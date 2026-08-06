# Vue 3 Migration Plan for @apwide/uikit

## Executive Summary

This document outlines a **phased, incremental approach** to migrating the @apwide/uikit component library from Vue 2.7 to Vue 3, with emphasis on maintaining stability, comprehensive testing, and backward compatibility where possible.

---

## Current State Analysis

### Test Coverage

> **Updated 2026-08-06**: the figures immediately below are the original 2026-02-13 baseline and are
> now fully superseded. Several testing sessions since then (documented in `SESSION_SUMMARY.md`)
> brought coverage to **129/149 components raw**, with **130 unit test files and 1122 passing tests**.
> The 8-component `ContentLoader` family, `Icon/MagicStick`, `Tree/Label`, `Toggle/LockSwitch`,
> `common/PromisedContentLoader`, the 7 Avatar icon subcomponents, and `UserEditableRendererEnriched`
> (20 components total) were excluded from the tracked coverage pool per project owner decisions
> (unused by consuming apps), giving a 129-component pool — and **every one of those 129 components now
> has a dedicated unit test (100%)**. 🏁 **Phase 1 is complete.** See `SESSION_SUMMARY.md` for the full
> list of what was covered and the reusable test patterns discovered along the way (`@floating-ui/dom`
> mocking, full-`mount()` for `<transition>`/deeply-nested-slot components, `easymde`
> module-interop mocking, `IntersectionObserver`/`ResizeObserver` mocking) — useful for testing any new
> component going forward, or for Phase 2's Vue 3 compatibility work.
>
> **Further update (`chore/claude-vue3` branch, 2026-08-06)**: the "149 total components" figure below
> is now stale too — a subsequent cleanup pass (`chore/rovo2`) deleted `Tree`/`TreeSelect` and several
> other unused components/renderers entirely (not just excluded from test tracking), and renamed many
> field renderers with a `Kit` prefix. The component count and the 129-component tracked pool above
> both predate that cleanup. Don't use the raw counts in this document for current-state decisions —
> re-verify against `src/components/**/*.vue` first.

- **Unit Tests**: 9 test files covering 6 component categories *(2026-02-13 baseline)*
  - Button, Checkbox, Form (Input, TextArea, FieldGroup)
  - InlineEdit (2 files), Select (Tag), Toggle
- **E2E Tests**: 12 Cypress specs covering critical user flows
  - Button, Calendar, CreateableSelect, DatePicker, Dropdown
  - InlineEdit, Input, Modal, MultiSelect, Select, Toggle, UserPicker
- **Components**: 149 Vue components total
- **Coverage Gap**: ~90% of components lack dedicated unit tests *(2026-02-13 baseline — now ~23.5%, see above)*

### Architecture Overview
- **Vue 2.7.16**: Already uses Composition API (backported)
- **Script Setup**: 135 out of 149 components (~90%) already use `<script setup>`
- **TypeScript**: Mixed usage - many components use TS with Composition API
- **Build**: Webpack 5, ESLint, Prettier configured

### Vue 2 Patterns Identified

#### Breaking Changes to Address:

> **Updated 2026-08-06** (branch `chore/claude-vue3`): the counts below are the original 2026-02-13
> baseline and are stale — the codebase has since been cleaned up (renaming, removal of unused
> components). Re-verified counts as of this branch:

1. **`$listeners` Usage** (~~19~~ **12 files**)
   - Used in: `KitButton`, `KitIconButton`, `KitDatePicker`, `KitDateRangePicker`, `KitTimePicker`,
     `KitDropdownItem`, `KitTextArea`, `KitTextField`, `IconWrapper`, `MenuItem`, `KitBigModal`,
     `UserPicker`
   - **Vue 3 Change**: `$listeners` removed, merged into `$attrs`
   - **Migration approach**: handled directly per-component in Phase 3 (swap `v-on="$listeners"` for
     relying on `$attrs`/`useAttrs()` fallthrough) — no shared abstraction needed, see note below.

2. ~~**Event Bus Pattern**~~ — **resolved, no longer applicable.** `src/components/event-bus.js` and
   its only consumers (`Tree`, `TreeSelect`, `Tree/Label`, `Tree/Node`) were deleted entirely in the
   `chore/rovo2` cleanup (unused components). There is no `new Vue()` event bus left anywhere in the
   codebase — this breaking-change item and its Phase 3/Wave 3 "Event Bus Refactoring" work are moot.

3. **`model` Option** (~~1~~ **2 files**: `KitDropdownCheckboxItem.vue` and `KitCheckbox.vue`)
   - Both use the Vue 2 Options API `model: { prop, event }` option
   - **Vue 3 Change**: Replaced by `defineModel()` (not available in Vue 2.7) — handled directly when
     each component is migrated in Phase 3

4. **Deep Selectors** (`>>>`) — **16 files** currently use it for scoped style penetration
   - **Vue 3 Change**: Use `:deep()` instead

5. **`$attrs` Behavior**
   - Currently excludes class/style
   - **Vue 3 Change**: Includes class/style by default

#### Decision: no `vue3-compat.ts` compatibility layer

The original Phase 2 plan (below) proposed a shared `utils/vue3-compat.ts` with `useListeners()`,
`useEventBus()`, and `useModelValue()` helpers meant to work under both Vue 2 and Vue 3. **This was
abandoned (2026-08-06)** — it doesn't fit how this library is actually shipping the migration:
- The plan is two separate major versions (`v6.x` stays Vue 2, `v7.x` becomes Vue 3), never one
  codebase running under both at runtime. So there's nothing to abstract across versions — once a
  component is migrated, it only ever runs under Vue 3, and can just call `useAttrs()`/`defineModel()`
  directly instead of through an indirection layer that would need to runtime-detect which Vue version
  is installed.
- `useEventBus()` is now dead on arrival — its only consumers (`Tree`/`TreeSelect`) are gone.
- `$listeners`/`model` fixes are one-line, permanent changes made at the point each component is
  migrated in Phase 3 — not something worth routing through a shared utility.

---

## Migration Strategy: 5-Phase Approach

### ✅ Phase 0: Foundation & Preparation (CURRENT)
**Goal**: Establish baseline quality and testing infrastructure

**Tasks**:
1. ✅ Audit current test coverage
2. ✅ Document Vue 2 specific patterns
3. ✅ Create migration plan
4. 🔲 Set up Vue 3 testing environment (parallel to Vue 2)
5. ❌ ~~Create compatibility layer/utilities~~ — decided against, see "Decision: no `vue3-compat.ts`
   compatibility layer" above
6. 🔲 Establish migration testing protocol

**Deliverables**:
- Migration plan document ✅
- Test coverage report
- Vue 3 branch with dual build support
- Migration utilities library

**Timeline**: 1-2 weeks

---

### 🏁 Phase 1: Test Coverage Expansion — COMPLETE
**Goal**: Achieve 80%+ component test coverage before migration (exceeded: 100% of tracked pool)

**Priority Components** (by usage/complexity) — updated 2026-08-06:
1. **Critical Path** (must have tests):
   - ✅ Button (has tests)
   - ✅ Input, TextArea (has tests)
   - ✅ Select, MultiSelect (has tests)
   - ✅ Dropdown (incl. KitDropdownCheckboxItem, KitDropdownSeparator)
   - ✅ Modal (incl. Blanket, Footer, Header, PositionerAbsolute)
   - ✅ Table (incl. TableHeaderCell, TableRowCell, TableRow)
   - ✅ DatePicker, TimePicker

2. **High Usage** (should have tests):
   - ✅ Avatar, Badge, Lozenge
   - ✅ Tabs (incl. KitTabHeaders, KitTabHeader, KitTabPanels), Menu (incl. KitActionMenu, KitIconMenu, KitMenuSection, KitMenuSeparator)
   - ✅ Tooltip (incl. KitBigTooltip, KitBigTooltipContent, TooltipContent), InlineDialog
   - ✅ Spinner, ProgressBar
   - ✅ Card, Collapsible

3. **Complex Components** (need thorough tests):
   - ❌ ~~Tree, TreeSelect~~ — components deleted entirely (unused, removed in `chore/rovo2`), tests
     removed along with them; no longer applicable
   - ✅ Calendar components
   - ✅ MarkdownEditor
   - ✅ ColorPicker
   - ✅ Spotlight (onboarding)
   - ✅ Field renderers (UserEditableRendererEnriched excluded as unused, see `SESSION_SUMMARY.md`)
   - ✅ common utilities (InfiniteScroll, KitTransitionExpand; PromisedContentLoader excluded as unused)

**Phase 1 is complete: 129/129 (100%) of the tracked component pool now has a dedicated unit test**
(149 raw components minus 20 excluded as unused by consuming apps — ContentLoader family,
MagicStick/Label/LockSwitch, PromisedContentLoader, Avatar icons, UserEditableRendererEnriched — see
`SESSION_SUMMARY.md`). See `SESSION_SUMMARY.md` → "Next Session Recommendations" for what comes next.

**Testing Approach**:
- Unit tests: Component props, events, slots, state management
- E2E tests: User interactions, keyboard navigation, accessibility
- Visual regression: Storybook snapshots

**Deliverables**:
- 80%+ component test coverage
- All breaking-change-prone components tested
- Baseline test snapshots for regression detection

**Timeline**: 3-4 weeks

---

### 🔧 Phase 2: Infrastructure
**Goal**: Build tooling and patterns for smooth migration

> **Updated 2026-08-06**: the "Create Compatibility Utilities" task below (a shared `vue3-compat.ts`)
> was dropped — see "Decision: no `vue3-compat.ts` compatibility layer" earlier in this document.
> Phase 2 is now just build configuration, migration tooling, and documentation.

**Tasks**:

1. ~~Create Compatibility Utilities~~ — **dropped**, see decision note above.

2. ✅ **Update Build Configuration** — **done, 2026-08-06, on `chore/claude-vue3`**. See the full
   writeup below ("Build configuration: what changed, and the current jest failure inventory").

3. **Migration Checklist Template** — not started.
   - Per-component migration checklist
   - Automated lint rules for Vue 3 patterns
   - Pre-migration and post-migration test scripts

4. **Documentation Updates** — not started.
   - Migration guide for library consumers
   - Component API changes documentation
   - Deprecation notices

**Deliverables**:
- ~~Compatibility utilities library~~ (dropped)
- ✅ Vue 3 build configuration
- Migration tooling and checklists — not started
- Consumer migration guide (draft) — not started

**Timeline**: 2 weeks

---

## Build configuration: what changed, and the current jest failure inventory

**Done 2026-08-06, branch `chore/claude-vue3`.** The webpack build compiles cleanly under Vue 3, the
Jest suite runs end-to-end (not blocked by transform/config errors), and Storybook boots
(`HTTP 200`, 0 compile errors). Component-level Vue 3 behavior fixes were deliberately **not**
attempted here — that's Phase 3. What follows is the exact dependency/config diff and a categorized
map of the ~303 test failures Phase 3 will need to work through.

### Dependency changes (`package.json`)

| Package | Before | After |
|---|---|---|
| `vue` | `2.7.16` | `3.5.41` |
| `vue-loader` | `15.11.1` | `17.4.2` |
| `vue-template-compiler` | `2.7.16` | **removed** (superseded by `@vue/compiler-sfc`) |
| `@vue/compiler-sfc` | *(transitive only)* | `3.5.41` **(added as an explicit devDependency — see below, our own code imports it directly)** |
| `@vue/test-utils` | `1.3.6` | `2.4.11` |
| `@vue/vue2-jest` | `29.2.6` | **removed** → `@vue/vue3-jest@29.2.6` |
| `@storybook/vue-webpack5` | `7.6.20` | **removed** → `@storybook/vue3-webpack5@7.6.20` |
| `jest` | `^30.4.2` | `^29.7.0` — **downgraded**: `@vue/vue3-jest@29.2.6` peer-requires `jest: 29.x` exactly, no 30.x support published yet |
| `jest-environment-jsdom` | `^30.4.1` | `^29.7.0` — kept in lockstep with `jest` |
| `vue-svg-loader` | `0.16.0` | `0.17.0-beta.2` — the only version line with real Vue 3 support (`peerDependencies: vue: '^2.5.0 \|\| ^3.0.0-0'`); usage changed, see below |
| `peerDependencies.vue` | `2.7.x` | `^3.0.0` |
| `babel-preset-typescript-vue`, `babel-preset-vue`, `storybook-addon-vue-info` | present | **removed** — confirmed unused (not referenced by any active config), and were dragging in a stale `vue-template-compiler@2.7.16` transitively that crashed the Vue 3 webpack build via its own internal version-mismatch guard |
| `vue-docgen-api` | *(implicit/phantom)* | `4.79.2` **(added as an explicit devDependency — see below)** |
| `packageManager` | `yarn@1.22.22+...` | `npm@11.12.1` |

**Package manager: switched from yarn to npm** (project decision, 2026-08-06). Install via
`npm install`. The repo's git-tracked `package-lock.json` is now up to date with the Vue 3 dependency
set; the `yarn.lock` generated mid-session was deleted (never committed).

One real breakage surfaced by the yarn→npm switch itself, unrelated to Vue 3: `vue-docgen-loader`
(used by `@storybook/preset-vue3-webpack` for prop-table docs) does `require('vue-docgen-api')` at
runtime but doesn't declare it in its own `package.json` dependencies — a "phantom dependency" that
only worked before because yarn's classic hoisting happened to place a resolvable copy where Node's
module resolution could find it. npm's arborist nested `vue-docgen-api` deeper
(`@storybook/preset-vue3-webpack/node_modules/vue-docgen-api`), which `vue-docgen-loader` (hoisted to
top-level `node_modules/`) can't see via normal directory-walking resolution — Storybook failed with
`Cannot find module 'vue-docgen-api'` across every story. Fixed by declaring `vue-docgen-api@4.79.2`
explicitly ourselves, forcing it to the top level where `vue-docgen-loader` can resolve it too.

### Config file changes

- **`jest.config.js`**: `transform['^.+\\.vue$']` → `@vue/vue3-jest`.
- **`.storybook/main.js`**: `framework.name` → `@storybook/vue3-webpack5`.
- **`webpack.config.js`** (main library build): no changes needed — `VueLoaderPlugin` import/usage is
  API-stable across v15→v17.
- **`.storybook/webpack.config.js`**: two real fixes were needed here (not just version bumps):
  1. Removed the `vue$: 'vue/dist/vue.esm.js'` resolve alias — that exact subpath doesn't exist in
     Vue 3's package (`exports` map rejects it); Vue 3's default resolution already picks the right
     ESM build without a manual alias. This one alias was the root cause of ~421 of the ~422 initial
     Storybook compile errors (every story bundled together, one broken resolve poisons the whole
     preview build).
  2. `vue-svg-loader@0.17.0-beta.2` changed its expected wiring versus `0.16.0`: it now **outputs a
     synthetic `.vue` SFC string** that must be chained through `vue-loader` afterward, rather than
     compiling SVG straight to JS itself. Fixed the `.svg` rule from `loader: 'vue-svg-loader'` to
     `use: ['vue-loader', { loader: 'vue-svg-loader', options: {...} }]` (per the beta's own README).
- **`modules/babel-preset-typescript/fileTest.js`**: our own code, not a config file, but infra-level
  — it used `vue-template-compiler`'s `parseComponent()` to sniff whether a `.vue` file's
  `<script>`/`<script setup>` block is TypeScript. Swapped for `@vue/compiler-sfc`'s `parse()`, which
  returns an equivalent `descriptor.script`/`descriptor.scriptSetup.lang` shape.

### Real component-code fixes required just to get the build compiling (done)

Vue 3's inline event-handler expression parser is stricter than Vue 2's: multiple statements inside
`@event="..."` **must** be semicolon-separated — Vue 2 tolerated bare newline-separated statements
(relying on JS ASI inside the generated function body), Vue 3's expression parser does not. Fixed in
3 files, 5 call sites, by adding the missing `;` (behavior-neutral, valid under both Vue versions):
`Modal/KitBigModal.vue`, `field-renderers/KitMultiSelectEditableRenderer.vue`,
`field-renderers/KitSingleSelectEditableRenderer.vue`.

### Jest failure inventory — Bucket A complete (828 passed / 184 failed / 10 skipped of 1022, 62/114
suites green, up from 709/303/10 and 60/114 at the start of this pass)

**Bucket A — test-file-only, mechanical, `@vue/test-utils` v1→v2 API renames (no component behavior
changes) — DONE, applied across the whole suite:**
- `wrapper.destroy()` → `wrapper.unmount()` (renamed in v2) — ~96 occurrences fixed
- `provide` / custom `stubs` **top-level mount options moved under a `global: {...}` key** in v2 — hit
  the Tabs system tests hardest, fixed in 5 files
- Shallow-stub tag names changed from a generic `anonymous-stub` to the real component's kebab-case
  name + `-stub` — 134 occurrences across 25 files converted to `findComponent(ActualImportedComponent)`
  (unaffected by the tag-name rename)
- Newly discovered mid-pass: `wrapper.find(cssSelector).vm` no longer works in v2 — `find()` always
  returns a `DOMWrapper` (no `.vm`), whereas v1 exposed `.vm` even off a CSS-selector match into a stub.
  Fixed in 5 files (`CalendarHeader`, `SecureStringLineRenderer`, `KitSecuredInput`, `KitSelectMenu`,
  `InlineEditButtons`) by switching to `findComponent()`/`findAllComponents()`.

**Bucket B — genuine Vue 3 runtime/API differences in component source or test-infra behavior changes
that need a per-component decision, not a mechanical rename (Phase 3 territory):**
- `Popper/Popper.vue`'s custom `render()` does `this.$slots.default[0].elm` — in Vue 3, `$slots.default`
  is a **function** (call it: `this.$slots.default()`), not a live array, and a vnode's DOM node is
  `.el`, not `.elm`. (`TypeError: Cannot read properties of undefined (reading 'elm')`, `'default'`)
- `Icon/IconWrapper.vue`'s Options API `render(h)` — Vue 3's Options API `render()` no longer receives
  `h` as an argument; must `import { h } from 'vue'` explicitly, and the vnode data object shape
  changes (`{ attrs: {...}, on: {...} }` → flat props + `onXxx` handlers). (`TypeError: h is not a
  function`)
- The 12 `$listeners` files and 2 `model`-option files already catalogued earlier in this document
  (3 of the `$listeners` test files — `KitIconButton`, `KitTextField`, `MenuItemPlain` — still have a
  top-level `listeners:` mount option left untouched on purpose: fixing the test alone can't pass while
  `v-on="$listeners"` is dead code under Vue 3).
- **Systemic: Vue 3 always renders a stringified value (`"true"`/`"false"`) for boolean/custom attrs
  instead of omitting the attribute when falsy** — Vue 2 omitted the attribute entirely for false values,
  including on genuine native HTML boolean attributes like `disabled`. Breaks any
  `expect(wrapper.attributes('x')).toBeUndefined()` assertion for a false boolean. First seen on
  `KitTabHeader`, confirmed to recur elsewhere; needs a scope decision (see below) before a fix pass.
- **Shallow stubs no longer auto-render default slot content.** VTU v1 rendered a stub's default slot
  content; v2 does not unless the slot is explicitly re-provided. Breaks tests that read `.text()` off a
  stubbed child expecting its slot content to show (e.g. `Years.test.js` expecting KitButton stub text
  `'2020'`, gets `''`; `KitTabHeaders` "renders slot content" through a stubbed `KitDraggable`). This is
  the single largest remaining failure category and needs a Phase 3 decision: fix test-by-test (pass
  `slots`/`scopedSlots` explicitly per stub) vs. a shared test helper vs. accepting `mount()` instead of
  `shallowMount()` in the affected suites.
- Whatever else surfaces once Bucket A's mechanical fixes stop masking real component issues — the
  184-failure count above is the accurate Bucket B starting point now that Bucket A is cleared.

---

### 🚀 Phase 3: Component Migration (Iterative)
**Goal**: Migrate components incrementally, maintain stability

**Migration Order** (3 waves):

#### Wave 1: Foundation Components (Low Risk)
**Characteristics**: No $listeners, simple props, minimal dependencies

1. **Presentational Components** (~2 weeks)
   - Badge, Lozenge, Tag
   - Avatar, KitIcon
   - Spinner, ProgressBar
   - Card, Collapsible
   - Breadcrumbs

2. **Migration Steps Per Component**:
   ```
   a. Create feature branch: `migrate/component-name`
   b. Run existing tests (baseline)
   c. Update component code:
      - Replace >>> with :deep()
      - Replace $listeners with $attrs
      - Update v-model if needed
      - Fix TypeScript types
   d. Run tests, fix failures
   e. Update Storybook stories
   f. Manual testing in Storybook
   g. E2E test updates if needed
   h. Code review
   i. Merge to vue3 branch
   ```

3. **Continuous Validation**:
   - All tests must pass
   - No visual regressions
   - Bundle size monitoring

#### Wave 2: Interactive Components (Medium Risk)
**Characteristics**: Use $listeners, complex interactions, form controls

1. **Components** (~3-4 weeks)
   - Button, ButtonGroup, IconButton ✅ (already setup-based)
   - Input, TextArea, SecuredInput ✅ (already setup-based)
   - Checkbox, Toggle, Radio
   - Dropdown + all dropdown items
   - Select, MultiSelect, UserPicker
   - DatePicker, TimePicker, Calendar
   - Modal, BigModal
   - InlineDialog, Tooltip, BigTooltip

2. **Special Attention**:
   - `$listeners` migration (merge into `$attrs`)
   - Form v-model bindings
   - Event emission compatibility
   - Focus management

#### Wave 3: Complex Components (High Risk)
**Characteristics**: complex state, multiple dependencies

> **Updated 2026-08-06**: Tree/TreeSelect (and their Event Bus dependency) are removed from this wave
> — those components were deleted entirely (unused). The "Event Bus Refactoring" task below is no
> longer needed.

1. **Components** (~4-5 weeks)
   - Table (complex state, slots)
   - Tabs system (TabProvider, TabHeaders, etc.)
   - Menu system (ActionMenu, IconMenu, MenuItem)
   - InlineEdit + all field renderers (20+ components)
   - MarkdownEditor
   - ColorPicker
   - Spotlight (onboarding system)
   - Layout components (BorderedPanel, etc.)

2. ~~**Event Bus Refactoring**~~ — **no longer needed**, its only consumers (Tree, TreeSelect) were
   deleted.

3. **High-Risk Mitigations**:
   - Feature flags for gradual rollout
   - Parallel old/new implementations
   - Extended testing periods
   - Beta releases for early adopters

**Deliverables**:
- All 149 components migrated to Vue 3
- All tests passing
- Storybook fully functional
- Zero regression in functionality

**Timeline**: 9-11 weeks total for all waves

---

### 🎯 Phase 4: Final Integration & Testing
**Goal**: Ensure production readiness

**Tasks**:

1. **Comprehensive Testing**
   - Full regression test suite
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Accessibility audit (WCAG 2.1 AA)
   - Performance benchmarking
   - Bundle size analysis

2. **Documentation Finalization**
   - Complete API documentation
   - Migration guide for consumers
   - Breaking changes changelog
   - Upgrade instructions

3. **Pre-release Testing**
   - Alpha release (internal testing)
   - Beta release (selected partners/projects)
   - Release candidate (public beta)

4. **Migration Support**
   - Codemod scripts for common patterns
   - Migration assistance tools
   - FAQ and troubleshooting guide

**Deliverables**:
- Production-ready Vue 3 library
- Complete documentation
- Migration tooling
- Beta feedback incorporated

**Timeline**: 2-3 weeks

---

### 📦 Phase 5: Release & Support
**Goal**: Ship Vue 3 version with proper versioning

**Release Strategy**:

1. **Versioning** (Semantic Versioning)
   - Vue 2.7 version: `v6.x.x` (maintenance mode)
   - Vue 3 version: `v7.0.0` (BREAKING - major bump)

2. **Dual Support Period** (6-12 months)
   - Maintain both versions
   - Backport critical fixes to v6.x
   - Encourage migration to v7.x

3. **Release Plan**:
   ```
   v7.0.0-alpha.1  → Internal testing
   v7.0.0-beta.1   → Public beta, gather feedback
   v7.0.0-rc.1     → Release candidate
   v7.0.0          → Official release
   ```

4. **Communication**:
   - Release announcement
   - Migration workshops/webinars
   - Dedicated support channel
   - Regular updates on migration progress

**Deliverables**:
- v7.0.0 release
- Active support for both versions
- Migration success metrics
- Community feedback loop

**Timeline**: Ongoing (6-12 months dual support)

---

## Risk Assessment & Mitigation

### High-Risk Areas

| Risk | Impact | Mitigation |
|------|--------|------------|
| **@vue/test-utils v1→v2 breakage** | Large share of the 1122 unit tests likely fail on Vue 3 build config bump | Dedicated pass with test fixes budgeted in, not a drive-by dependency update |
| **$listeners removal** | Event handling breaks | Automated migration, comprehensive tests |
| **Consumer breaking changes** | Adoption resistance | Clear migration guide, backward compat where possible |
| **Bundle size increase** | Performance regression | Tree-shaking optimization, bundle analysis |
| **Test gaps** | Regressions undetected | Phase 1 test expansion mandatory |
| **Incomplete migration** | Mixed Vue 2/3 state | Strict migration checklist, automated validation |

### Medium-Risk Areas

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Slot syntax changes** | Named slots break | Code review, pattern search |
| **TypeScript compatibility** | Type errors | Gradual typing, Vue 3 type support |
| **Storybook compatibility** | Documentation breaks | Storybook 7 already supports Vue 3 |
| **CSS deep selectors** | Styling breaks | Automated find/replace, visual regression |

---

## Success Metrics

### Phase Completion Criteria

- **Phase 1**: 80% test coverage, all critical paths tested
- **Phase 2**: Build passing on Vue 3 branch, utilities tested
- **Phase 3**: All components migrated, 0 failing tests
- **Phase 4**: 100% Storybook stories functional, docs complete
- **Phase 5**: v7.0.0 released, <5% bug reports

### Quality Gates

- ✅ All unit tests pass
- ✅ All E2E tests pass
- ✅ No visual regressions
- ✅ Bundle size ≤ 105% of v6.x
- ✅ Performance ≥ 95% of v6.x
- ✅ Accessibility score maintained
- ✅ Zero breaking changes without deprecation notice

---

## Component Migration Priority Matrix

### Priority: CRITICAL (Test First, Migrate Early)
- Button, ButtonGroup, IconButton
- Input, TextArea, Select
- Dropdown, Modal
- Checkbox, Toggle

### Priority: HIGH (Test & Migrate Wave 1-2)
- DatePicker, TimePicker, Calendar
- Table, Tabs
- Menu system
- InlineEdit
- Avatar, Badge, Lozenge

### Priority: MEDIUM (Migrate Wave 2-3)
- Field renderers
- Tooltip, InlineDialog
- Card, Collapsible
- Breadcrumbs

### Priority: LOW (Migrate Last)
- MarkdownEditor
- ColorPicker
- Spotlight
- ContentLoaders
- Specialized renderers

---

## Immediate Next Steps

### Week 1-2: Setup & Planning
1. ✅ Create this migration plan
2. 🔲 Get stakeholder approval
3. ✅ Create Vue 3 migration branch (`chore/claude-vue3`, 2026-08-06)
4. 🔲 Set up Vue 3 build configuration
5. 🔲 Install Vue 3 dependencies in dev

### Week 3-4: Test Infrastructure — ✅ complete (and expanded well beyond this list, see `SESSION_SUMMARY.md`)
1. ✅ Write tests for Button component (if gaps exist)
2. ✅ Write tests for Input/TextArea components
3. ✅ Write tests for Select/MultiSelect
4. ✅ Write tests for Dropdown
5. ✅ Write tests for Modal

### Week 5-6: First Migration Wave
1. ❌ ~~Create compatibility utilities~~ — dropped, see decision note earlier in this document
2. 🔲 Migrate Badge, Lozenge, Tag (simple components)
3. 🔲 Update Storybook stories
4. 🔲 Validate with manual testing

---

## Resources & References

### Official Documentation
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue 3 Breaking Changes](https://v3-migration.vuejs.org/breaking-changes/)
- [Composition API RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)

### Tools
- [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html)
- [eslint-plugin-vue (Vue 3 rules)](https://eslint.vuejs.org/)
- [vue-compat](https://github.com/vuejs/core/tree/main/packages/vue-compat)

### Testing
- [@vue/test-utils v2](https://test-utils.vuejs.org/)
- [Cypress Vue 3 Component Testing](https://docs.cypress.io/guides/component-testing/vue/overview)

---

## Questions for Stakeholders

Before proceeding, please confirm:

1. **Timeline**: Is 4-6 months acceptable for complete migration?
2. **Resources**: How many developers can dedicate time?
3. **Risk Tolerance**: Beta testing period duration?
4. **Versioning**: Agreed on v7.0.0 for Vue 3?
5. **Support**: How long to support v6.x (Vue 2.7)?
6. **Testing**: Acceptable to dedicate ~30% of time to test writing?

---

**Status**: 🏁 Phase 1 (Test Coverage Expansion) complete — 100% of the tracked component pool
(129/129) now has unit tests, well past the original 80% goal. 🔧 Phase 2 (Infrastructure): the
`vue3-compat.ts` compatibility-utilities task was evaluated and dropped (doesn't fit a
two-major-versions migration strategy). **Build configuration is done** (2026-08-06, branch
`chore/claude-vue3`): webpack compiles under Vue 3, Jest runs end-to-end, Storybook boots — see "Build
configuration: what changed, and the current jest failure inventory" above for the full diff and the
categorized Phase 3 starting checklist (709/1022 tests currently pass; the rest split into mechanical
`@vue/test-utils` v1→v2 API renames vs. genuine Vue 3 component-code fixes). Remaining Phase 2 work:
the migration checklist template and consumer documentation. Package manager switched from yarn to
npm mid-session (project decision) — `package-lock.json` is up to date, no lingering `yarn.lock`.

**Last Updated**: 2026-08-06 (originally 2026-02-13)
