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

2. **Update Build Configuration**
   - Working on this on the `chore/claude-vue3` branch (created 2026-08-06)
   - Configure webpack for Vue 3
   - Update `package.json` dependencies (`vue`, `vue-loader`, `vue-template-compiler`,
     `@vue/test-utils`, `@vue/vue2-jest` → `@vue/vue3-jest`, etc.)
   - This is the highest-risk item in Phase 2: it will very likely break a large share of the 1122
     unit tests written against `@vue/test-utils` v1 semantics (documented extensively in
     `SESSION_SUMMARY.md`), since v2 changes stub behavior, `WrapperArray`, and mount options. Needs
     its own dedicated pass with test fixes budgeted in, not a drive-by dependency bump.

3. **Migration Checklist Template**
   - Per-component migration checklist
   - Automated lint rules for Vue 3 patterns
   - Pre-migration and post-migration test scripts

4. **Documentation Updates**
   - Migration guide for library consumers
   - Component API changes documentation
   - Deprecation notices

**Deliverables**:
- ~~Compatibility utilities library~~ (dropped)
- Vue 3 build configuration
- Migration tooling and checklists
- Consumer migration guide (draft)

**Timeline**: 2 weeks

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
(129/129) now has unit tests, well past the original 80% goal. 🔧 Phase 2 (Infrastructure) is
underway on the `chore/claude-vue3` branch: the `vue3-compat.ts` compatibility-utilities task was
evaluated and dropped (see decision note above — it doesn't fit a two-major-versions migration
strategy, and its main driver, Tree/TreeSelect's event bus, no longer exists). Remaining Phase 2 work:
Vue 3 build configuration (highest-risk item — will likely require fixing a large share of the 1122
unit tests against `@vue/test-utils` v2 semantics), the migration checklist template, and consumer
documentation.

**Last Updated**: 2026-08-06 (originally 2026-02-13)
