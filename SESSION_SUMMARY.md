# Test Coverage Session Summary

**Last Updated**: 2026-08-06

> Note: earlier versions of this document (dated 2026-02-13) were left unupdated while multiple
> testing sessions continued in the background (Calendar, Form, field renderers, Select variations,
> Tabs/Modal/Menu/Tooltip/Table/Dropdown system completions, etc.). The numbers below reflect the
> actual current state of the repository, verified directly against `tests/` and `src/components/`.

## 🎯 Current Results

### Test Statistics
- **Unit Tests**: 1043 passing, 10 skipped (1053 total)
- **Test Files**: 123 files
- **Components Tested**: 122/149 raw (~81.9%) — **122/141 (~86.5%) against the tracked pool**, see below
- **Success Rate**: 100% of active tests ✅
- **Lint**: All new test files pass `eslint` cleanly

### ⚠️ ContentLoader family excluded from the coverage goal (per project owner decision, 2026-08-06)

The 8 components under `src/components/ContentLoader/` (`AvatarDetailsLoader`, `AvatarNameLoader`,
`BulletListLoader`, `ContentLoader`, `FolderPathLoader`, `ListWithImageLoader`, `PageDetailsLoader`,
`TableLoader`) are **not used** by consuming applications and have been excluded from the tracked
component pool for the 80% coverage goal. This drops the denominator from 149 to **141 components**.

Caveat for transparency: `ContentLoader.vue` itself (the base skeleton primitive, not the 7 preset
variants) is technically still referenced internally by `common/PromisedContentLoader.vue`, which in
turn is used by `field-renderers/UserEditableRendererEnriched.vue`. The exclusion decision was made at
the project level (these presets aren't used downstream), so the whole family is being treated as
out-of-scope rather than re-litigated here — if `PromisedContentLoader` or `UserEditableRendererEnriched`
get tested later, that will exercise `ContentLoader.vue` indirectly anyway.

With this pool of 149 - 8 = **141 trackable components**, coverage is **122/141 (~86.5%)** — well past
the 80% Phase 1 goal from `VUE3_MIGRATION_PLAN.md`.

### 2026-08-06 Session — Completed Partial Component Systems + Positioning Core + ColorPicker + Spotlight + Button

This session covered, in order: finishing component "families" that already had partial coverage
(Tabs/Modal/Menu/Tooltip/Table/Dropdown), the positioning primitives (Popper/Popup), ColorPicker's
remaining sub-component, and finally the full Spotlight onboarding system plus the two remaining
Button components. 28 new test files / ~180 new tests were added across the session:

1. ✅ **Tabs system** — KitTabHeaders, KitTabHeader, KitTabPanels (18 tests)
2. ✅ **Modal system** — Blanket, Footer, Header, PositionerAbsolute (23 tests)
3. ✅ **Menu system** — KitActionMenu, KitIconMenu, KitMenuSection, KitMenuSeparator, MenuSection (30 tests)
4. ✅ **Tooltip system** — KitBigTooltip, KitBigTooltipContent, TooltipContent (21 tests)
5. ✅ **Table sub-components** — TableHeaderCell, TableRowCell, TableRow (24 tests)
6. ✅ **Dropdown remainder** — KitDropdownCheckboxItem, KitDropdownSeparator (13 tests)
7. ✅ **common/Popup.vue** (14 tests) — shallow-mounted with a stubbed `Popper`, standard pattern
8. ✅ **Popper/Popper.vue** (9 tests) — the core positioning primitive; needed `@floating-ui/dom`
   mocking — see below.
9. ✅ **ColorPicker/KitColorCard.vue** (9 tests) — background-color style, `data-cy-color` attribute,
   check-icon visibility logic.
10. ✅ **Button/KitButtonGroup.vue** (6 tests) — slot rendering, `spacing`/`data-spacing`.
11. ✅ **Button/KitIconButton.vue** (10 tests) — full-mounted (not shallow) since it just forwards
    props/`$attrs`/`$listeners` to a real `KitButton`; verifies the screen-reader span, `title`
    attribute, and attr/listener passthrough.
12. ✅ **Spotlight/KitSpotlightMask.vue** (9 tests) — exact pixel math for the four background panels,
    the border, and the text box position, given a mocked `getBoundingClientRect`.
13. ✅ **Spotlight/KitSpotlightHintContainer.vue** (12 tests) — step counter, Dismiss/Go back/Next-Done
    button visibility per step position, and their emitted events.
14. ✅ **Spotlight/KitSpotlight.vue** (17 tests) — the onboarding orchestrator: `document.body` mutation
    on mount/unmount, keyboard navigation (ArrowRight/Left/Enter/Escape, Ctrl-guard), custom step slots
    vs. the default hint, and margin normalization. Full-mounted (not shallow) — see below.

Notably, `KitDropdownCheckboxItem` uses the Vue 2 `model` option (documented breaking change for
Vue 3 in `VUE3_MIGRATION_PLAN.md`) — its v-model contract (`checked`/`input`) is now covered by tests,
which will make that migration safer to verify.

### Testing Popper.vue: why it needed a different approach

`Popper.vue` is structurally unusual (two `<script>` blocks: a `<script setup>` for the
Composition-API logic, plus a plain `<script>` exporting a custom `render()` that returns
`this.$slots.default[0]` directly — i.e. it renders its slot's root element with **no wrapper**).
Its actual positioning logic delegates entirely to `@floating-ui/dom`'s `computePosition` and
`autoUpdate`, which do real DOM measurement and optionally use `ResizeObserver`/`IntersectionObserver`
(not implemented in jsdom).

Rather than mount it against real (and in jsdom, meaningless — all rects are zero) DOM geometry,
`tests/components/Popper/Popper.test.js` mocks `@floating-ui/dom` directly
(`jest.mock('@floating-ui/dom', () => ({ computePosition: jest.fn(), autoUpdate: jest.fn(), ... }))`),
with `autoUpdate` invoking its update callback synchronously and `computePosition` resolving a
controlled `{ x, y, middlewareData, placement }`. This isolates and verifies Popper's *own* logic —
default props, calling `computePosition` with the right `placement`/`strategy` per prop combination,
applying the resolved `x`/`y` to the floating element's style, and positioning the arrow element from
`middlewareData.arrow` — without depending on jsdom's absent layout engine. `mount()` (not
`shallowMount`) is required since Popper has no child components to stub; a real DOM node is used for
`targetElement`, and a `flushPromises()` helper (`setTimeout(resolve, 0)`, not `setImmediate` — jsdom
doesn't expose that global) drains the microtask chain from `nextTick` → `initPopper()` →
`computePosition()`.

This pattern (mocking `@floating-ui/dom`) is the one to reuse for any other component that talks to
floating-ui directly rather than going through `Popper`/`Popup`.

### Testing the Spotlight system: full `mount()`, not `shallowMount`

`KitSpotlightMask` does real `getBoundingClientRect()`-based math (four background panels, a border,
and text positioning) and has a root-level `@click.stop.prevent` that swallows every click within the
overlay. `KitSpotlight` nests `KitSpotlightMask` → `KitSpotlightHintContainer` → (a custom step slot or
the default `KitSpotlightStepHint`) three levels deep. Because **shallow-stubbed components in this
project's VTU v1 setup never render their slot content into the DOM**, `shallowMount`ing `KitSpotlight`
would make `KitSpotlightHintContainer` (and anything nested inside the stubbed `KitSpotlightMask`'s
slot) undiscoverable — `findComponent` would never find it, since Vue never even instantiates child
component instances for vnodes a stub doesn't render. All three Spotlight components are plain
templates with no other heavy dependencies, so `tests/components/Spotlight/KitSpotlight.test.js` uses
full `mount()` instead, which lets the real 3-level chain render and be inspected directly. Key
findings from testing this:
- `KitSpotlightMask`'s root `<div class="kit-spotlight-mask" @click.stop.prevent>` means **every**
  click within the mask gets `event.defaultPrevented === true` — including clicks on the hint text
  itself. The separate `document`-level click listener with its `textRef.contains(event.target)` check
  is effectively unreachable through normal DOM bubbling for clicks *inside* the mask (they're stopped
  before reaching `document`); it only matters for clicks that land entirely outside the mask tree.
  Don't write a test asserting clicks *inside* the text area are *not* prevented — that assertion is
  false given the current implementation.
- `KitSpotlight` reparents its own root element into `document.body` via a `watch(me, ..., {immediate:
  true})` on a template ref. The `document.body.appendChild` call may not have happened yet
  synchronously right after `mount()` returns (template refs populate during the mount patch, and the
  watcher reacting to that can be deferred a tick) — `await flushPromises()` before asserting
  `wrapper.element.parentElement === document.body`.
- Tests that mount `KitSpotlight` **must** call `wrapper.destroy()` in `afterEach` (or explicitly per
  test) — otherwise its `document.body.style.position = 'fixed'`, `document` keydown listener, and
  reparented DOM node leak into subsequent tests in the same file.

### Notable test-writing gotchas found this session (useful for future sessions)
- This repo uses **`@vue/test-utils` v1** (Vue 2 compatible). `wrapper.findAll(...)` and
  `findAllComponents(...)` return a `WrapperArray`, which does **not** support `array[i]` bracket
  access — use `.at(i)` instead. `.filter(...)` on a `WrapperArray` does work and returns something
  `.at()`-compatible (useful for picking a button out of several by its text).
- `shallowMount` stubs for `<script setup>` components often render as `<anonymous-stub>` (name
  inference fails), so `findComponent({ name: 'X' })` frequently doesn't match. Prefer
  `findComponent(ActualImportedComponent)`.
- Boolean prop bindings like `:disabled="true"` or `:sortable="true"` render as
  `attribute="attribute"` (e.g. `disabled="disabled"`), not `attribute="true"`, for non-standard
  HTML attribute names.
- Stubbed child components do **not** render their default (or named/scoped) slot content by default in
  this project's VTU v1 setup — and since Vue never instantiates a child component for vnodes a stub
  doesn't render, anything nested *inside* that slot is invisible to `findComponent` too. Use `mount()`
  instead of `shallowMount()` whenever you need to inspect something nested inside another component's
  slot content.
- `setImmediate` is not defined in this project's jsdom test environment — use
  `new Promise(resolve => setTimeout(resolve, 0))` to flush pending microtasks/promises instead.
- For components that call real positioning/geometry libraries (`@floating-ui/dom`, etc.), mock the
  library rather than mounting against jsdom's zeroed-out layout — jsdom has no real layout engine, so
  asserting on real pixel output is meaningless and `ResizeObserver`/`IntersectionObserver` may not
  exist at all. Exception: if the component does its own arithmetic on top of `getBoundingClientRect()`
  (like `KitSpotlightMask`), you *can* get deterministic, meaningful pixel assertions by overriding
  `element.getBoundingClientRect = () => ({...})` on plain `document.createElement()` nodes.
- Watch for props that share the same default value (e.g. `KitColorCard`'s `color` and `selected` both
  default to `#000000`) — a "not shown by default" assertion can be wrong if two defaults happen to
  match; verify actual default behavior before asserting on it.
- Components that mutate global DOM state (`document.body.style`, `document`/`window` event listeners,
  reparenting themselves into `document.body`) need explicit `wrapper.destroy()` cleanup between tests
  to avoid cross-test leakage within the same file.

---

## 📈 Progress Metrics (cumulative, all sessions)

| Metric | Original baseline | Current | Change |
|--------|-------|-----|--------|
| Unit Tests | 67 | 1043 | +976 |
| Test Files | 11 | 123 | +112 |
| Components Covered | ~21 | ~122 | +101 |
| Coverage % (of 141 tracked) | 14% | ~86.5% | +72.5% |

---

## 🎯 Remaining Work (19 components without dedicated unit tests, tracked pool)

Verified directly against `src/components/**/*.vue` vs. test imports on 2026-08-06. Excludes the
8-component ContentLoader family (see exclusion note above).

| Group | Components |
|---|---|
| Common utilities | `InfiniteScroll`, `KitTransitionExpand`, `PromisedContentLoader` |
| Field renderers | `KitMarkdownEditableRenderer`, `UserEditableRendererEnriched` |
| Icon | `MagicStick` |
| Layout | `KitBorderedPanel`, `KitBorderedPanelRow` |
| MarkdownEditor | `KitMarkdownEditor` |
| Menu | `MenuItem.vue` (plain, non-Kit variant) |
| Toggle | `LockSwitch` |
| Tree | `Label` |
| Avatar icons (low priority) | `Approved`, `Busy`, `Declined`, `Focus`, `Offline`, `Online`, `PresenceWrapper` (trivial SVG wrappers, indirectly exercised by `Avatar.test.js`) |

### Target
- **80% Coverage Goal**: 113/141 tracked components (after excluding ContentLoader) — **met**
- **Current**: 122/141 (~86.5%)
- Remaining gap is now about closing out full coverage, not hitting the Phase 1 threshold

---

## 💪 Next Session Recommendations

1. **MarkdownEditor/KitMarkdownEditor** — the last "complex" component from Wave 3.
2. **Toggle/LockSwitch, Tree/Label, Icon/MagicStick** — small, well-isolated remaining gaps.
3. **Layout (KitBorderedPanel, KitBorderedPanelRow) / common (InfiniteScroll, KitTransitionExpand,
   PromisedContentLoader)** — round out the utility/layout components.
4. **Field renderers** (KitMarkdownEditableRenderer, UserEditableRendererEnriched) — the last two
   untested renderers.
5. **Menu/MenuItem.vue** (plain, non-Kit variant) — check first whether it's actually still used
   anywhere or a legacy leftover, similar to the ContentLoader situation.

---

**Status**: Library is at ~86.5% component test coverage against the tracked (141-component) pool —
well past the 80% Phase 1 goal from `VUE3_MIGRATION_PLAN.md`. 19 components remain for full coverage.
