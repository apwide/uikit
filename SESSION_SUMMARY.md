# Test Coverage Session Summary

**Last Updated**: 2026-08-06

> Note: earlier versions of this document (dated 2026-02-13) were left unupdated while multiple
> testing sessions continued in the background (Calendar, Form, field renderers, Select variations,
> Tabs/Modal/Menu/Tooltip/Table/Dropdown system completions, etc.). The numbers below reflect the
> actual current state of the repository, verified directly against `tests/` and `src/components/`.

## 🎯 Current Results

### Test Statistics
- **Unit Tests**: 988 passing, 10 skipped (998 total)
- **Test Files**: 118 files
- **Components Tested**: 117/149 raw (~78.5%) — **117/141 (~83.0%) against the tracked pool**, see below
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

With this pool of 149 - 8 = **141 trackable components**, coverage is already **117/141 (~83.0%)** —
past the 80% Phase 1 goal from `VUE3_MIGRATION_PLAN.md`.

### 2026-08-06 Session — Completed Partial Component Systems + Positioning Core + ColorPicker

This session focused on finishing component "families" that already had partial coverage, per
`TESTING_STRATEGY.md`'s Wave 3 priorities, then tackled the positioning primitives and ColorPicker's
remaining sub-component. 23 new test files / ~144 new tests were added:

1. ✅ **Tabs system** — KitTabHeaders, KitTabHeader, KitTabPanels (18 tests)
2. ✅ **Modal system** — Blanket, Footer, Header, PositionerAbsolute (23 tests)
3. ✅ **Menu system** — KitActionMenu, KitIconMenu, KitMenuSection, KitMenuSeparator, MenuSection (30 tests)
4. ✅ **Tooltip system** — KitBigTooltip, KitBigTooltipContent, TooltipContent (21 tests)
5. ✅ **Table sub-components** — TableHeaderCell, TableRowCell, TableRow (24 tests)
6. ✅ **Dropdown remainder** — KitDropdownCheckboxItem, KitDropdownSeparator (13 tests)
7. ✅ **common/Popup.vue** (14 tests) — shallow-mounted with a stubbed `Popper`, standard pattern
8. ✅ **Popper/Popper.vue** (9 tests) — the core positioning primitive used by Tooltip, BigTooltip,
   Dropdown, Menu and Popup. This one needed a different approach — see below.
9. ✅ **ColorPicker/KitColorCard.vue** (9 tests) — background-color style, `data-cy-color` attribute,
   check-icon visibility logic (note: `color` and `selected` share the same default `#000000`, so the
   check icon *is* visible with fully default props — worth remembering if extending this test file).

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

### Notable test-writing gotchas found this session (useful for future sessions)
- This repo uses **`@vue/test-utils` v1** (Vue 2 compatible). `wrapper.findAll(...)` and
  `findAllComponents(...)` return a `WrapperArray`, which does **not** support `array[i]` bracket
  access — use `.at(i)` instead.
- `shallowMount` stubs for `<script setup>` components often render as `<anonymous-stub>` (name
  inference fails), so `findComponent({ name: 'X' })` frequently doesn't match. Prefer
  `findComponent(ActualImportedComponent)`.
- Boolean prop bindings like `:disabled="true"` or `:sortable="true"` render as
  `attribute="attribute"` (e.g. `disabled="disabled"`), not `attribute="true"`, for non-standard
  HTML attribute names.
- Stubbed child components do **not** render their default slot content by default in this project's
  VTU v1 setup — assert on props passed to the stub instead of rendered slot text when the slot
  content lives inside a shallow-stubbed child.
- `setImmediate` is not defined in this project's jsdom test environment — use
  `new Promise(resolve => setTimeout(resolve, 0))` to flush pending microtasks/promises instead.
- For components that call real positioning/geometry libraries (`@floating-ui/dom`, etc.), mock the
  library rather than mounting against jsdom's zeroed-out layout — jsdom has no real layout engine, so
  asserting on real pixel output is meaningless and `ResizeObserver`/`IntersectionObserver` may not
  exist at all.
- Watch for props that share the same default value (e.g. `KitColorCard`'s `color` and `selected` both
  default to `#000000`) — a "not shown by default" assertion can be wrong if two defaults happen to
  match; verify actual default behavior before asserting on it.

---

## 📈 Progress Metrics (cumulative, all sessions)

| Metric | Original baseline | Current | Change |
|--------|-------|-----|--------|
| Unit Tests | 67 | 988 | +921 |
| Test Files | 11 | 118 | +107 |
| Components Covered | ~21 | ~117 | +96 |
| Coverage % (of 141 tracked) | 14% | ~83.0% | +69.0% |

---

## 🎯 Remaining Work (24 components without dedicated unit tests, tracked pool)

Verified directly against `src/components/**/*.vue` vs. test imports on 2026-08-06. Excludes the
8-component ContentLoader family (see exclusion note above).

| Group | Components |
|---|---|
| Button | `KitButtonGroup`, `KitIconButton` |
| Common utilities | `InfiniteScroll`, `KitTransitionExpand`, `PromisedContentLoader` |
| Field renderers | `KitMarkdownEditableRenderer`, `UserEditableRendererEnriched` |
| Icon | `MagicStick` |
| Layout | `KitBorderedPanel`, `KitBorderedPanelRow` |
| MarkdownEditor | `KitMarkdownEditor` |
| Menu | `MenuItem.vue` (plain, non-Kit variant) |
| Spotlight | `KitSpotlight`, `KitSpotlightHintContainer`, `KitSpotlightMask` |
| Toggle | `LockSwitch` |
| Tree | `Label` |
| Avatar icons (low priority) | `Approved`, `Busy`, `Declined`, `Focus`, `Offline`, `Online`, `PresenceWrapper` (trivial SVG wrappers, indirectly exercised by `Avatar.test.js`) |

### Target
- **80% Coverage Goal**: 113/141 tracked components (after excluding ContentLoader)
- **Current**: 117/141 (~83.0%) — **goal already met**
- Remaining gap is now about closing out full coverage, not hitting the Phase 1 threshold

---

## 💪 Next Session Recommendations

1. **MarkdownEditor / Spotlight trio** — remaining "complex" components from Wave 3.
2. **Button (KitButtonGroup, KitIconButton) / Toggle (LockSwitch) / Tree/Label / Icon/MagicStick** —
   small, well-isolated remaining gaps.
3. **Layout (KitBorderedPanel, KitBorderedPanelRow) / common (InfiniteScroll, KitTransitionExpand,
   PromisedContentLoader)** — round out the utility/layout components.
4. **Field renderers** (KitMarkdownEditableRenderer, UserEditableRendererEnriched) — the last two
   untested renderers.

---

**Status**: Library is at ~83.0% component test coverage against the tracked (141-component) pool —
the 80% Phase 1 goal from `VUE3_MIGRATION_PLAN.md` has been reached.
