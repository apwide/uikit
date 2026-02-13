# Vue 3 Migration — Summary (v6.x → v7.0.0)

This document summarizes everything that changed when `@apwide/uikit` moved from Vue 2.7 to Vue 3.
It replaces the working notes (`VUE3_MIGRATION_PLAN.md`, `VUE3_MIGRATION_BROKEN_COMPONENTS.md`,
`VUE3_MIGRATION_CSS_SELECTORS.md`) that were used during the migration.

Use it as a checklist when a consuming application upgrades to v7 and something breaks.

- **v6.x**: Vue 2.7 (maintenance only)
- **v7.0.0**: Vue 3 (breaking major release)

There is no compatibility layer. The library runs on Vue 3 only.

---

## 1. Breaking changes for consumers

### 1.1 Peer dependency

- `peerDependencies.vue`: `2.7.x` → `^3.0.0`. The host application must run Vue 3.

### 1.2 Public exports (`src/index.ts`)

| Change | Details |
|---|---|
| **Removed** `tooltip` directive | `src/directives/tooltip.js` was deleted. Use `KitTooltip` / `KitBigTooltip` instead. |
| **Renamed** field renderer exports | These used to be exported **without** the `Kit` prefix (`CheckboxEditableRenderer`, `StringLineRenderer`, …). They are now exported **with** it: `KitCheckboxEditableRenderer`, `KitCheckboxRenderer`, `KitMultiSelectEditableRenderer`, `KitMultiSelectRenderer`, `KitSingleSelectEditableRenderer`, `KitSecureStringLineEditableRenderer`, `KitStringLineEditableRenderer`, `KitStringLineRenderer`, `KitDateEditableRenderer`, `KitDateRenderer`, `KitMultiLineEditableRenderer`, `KitMultiLineRenderer`. |
| **No longer exported** field renderers | `ImageRenderer`, `UserEditableRenderer`, `UserRenderer`, `HyperlinkEditableRenderer`, `HyperlinkRenderer` (the source files still exist but are no longer exported). |
| **Deleted** components | `UserEditableRendererEnriched`, `UserRendererEnriched`, `NumberFloat(Editable)Renderer`, `NumberLong(Editable)Renderer`, `Issue*Renderer` (Priority, Status, Type, Issue), `LinkedIssuesList`, `CustomSingleSelectEditableRenderer`, `Tree`, `TreeSelect`, the `event-bus.js` used by Tree, `src/utils/utils.js`, `Avatar/Icons/index.js`. |
| **Newly exported** | `KitMarkdownEditableRenderer`. |
| Unchanged names, now exported directly | `KitBorderedPanel`, `KitBorderedPanelRow`, `KitActionMenu`, `KitIconMenu`, `KitMenuItem`, `KitMenuSection`, `KitMenuSeparator` (alias of `KitDropdownSeparator`), `KitTab*`. The intermediate `layout/index`, `Menu/index`, `Tabs/index`, `field-renderers/index` barrels were removed. |
| `KitSetToClipboard` | Moved from `SetToClipboard.js` to `KitSetToClipboard.ts`. The export name is unchanged. |

### 1.3 `v-model` → `modelValue` / `update:modelValue`

In Vue 2, a bare `v-model="x"` on a component mapped to the `value` prop and the `input` event. In Vue 3
it maps to the `modelValue` prop and the `update:modelValue` event.

These components were converted to `defineModel()` (default `modelValue` name):

`KitCheckbox`, `KitDropdownCheckboxItem`, `KitInput`, `KitTextArea`, `KitSecuredInput`, `KitToggle`,
`KitColorPicker`, `KitRadioGroup`, `KitMarkdownEditor`, `KitDatePicker`, `KitDateRangePicker`,
`KitTimePicker`, `KitSelect`, `KitTabProvider`, `UserPicker`.

**Impact on consumers:**
- `v-model="x"` → keeps working, no change needed.
- `:value="x" @input="..."` → **breaks**. Replace with `:model-value="x" @update:model-value="..."`
  (or switch to `v-model`).
- `KitCheckbox` / `KitDropdownCheckboxItem`: the prop used to be `checked` (via the `model` option). It
  is now `modelValue`. `:checked="x"` → `:model-value="x"`.

Not changed (always wired with explicit props/events): `KitRadio`, `KitSingleSelectEditableRenderer`,
`KitMultiSelectEditableRenderer`.

### 1.4 CSS selectors: boolean attributes

Vue 3 no longer omits an attribute bound to `false` on non-native elements. It renders
`attr="false"`, and `[attr]` presence selectors then match all the time.

Two fixes were applied inside the library:

1. **Most components**: the bindings became `:attr="expr || undefined"`, so the attribute is still omitted
   when it is false. Selectors are unchanged. Applies to `KitButton`, `Day`, `TimePickerMenu`, `KitCheckbox`,
   `Popup`, `KitDropdown`, `KitImageRenderer`, `KitInlineEdit`, `KitTextArea`, `KitToggle`, `KitTable`,
   `KitSelectOption`, `KitLozenge`, `MenuItem`, `KitTabHeader`, `TableHeaderCell`. `KitTextField` normalizes
   its fallthrough attrs centrally (`inheritAttrs: false` + `useAttrs()`).
2. **Selectors renamed to `data-*`.** If your app overrides these selectors, you must update them:

| Component | Old selector | New selector |
|---|---|---|
| `KitSelect` | `.kit-select[disabled]` | `.kit-select[data-disabled="true"]` |
| `KitSelect` (multi-select tags) | `.kit-select__flex-wrapper[gap]`, `[gap] .kit-select__search` | `.kit-select__flex-wrapper[data-gap="true"]`, `[data-gap="true"] .kit-select__search` |
| `KitDropdownItem` / `KitMenuItem` | `.dropdown-item[disabled]` / `.kit-menu-item[disabled]` | `.dropdown-item[data-disabled="true"]` / `.kit-menu-item[data-disabled="true"]` |
| `KitDropdownItem` / `KitMenuItem` | `.dropdown-item[selected]` / `.kit-menu-item[selected]` | `.dropdown-item[data-selected="true"]` / `.kit-menu-item[data-selected="true"]` |

The component **props** themselves (`disabled`, `is-disabled`, `selected`) are unchanged.

**If your own app uses Vue 3**, the same issue applies to its own `[attr]` selectors on custom
attributes.

### 1.5 Listeners, `.native`, `$attrs`

- `$listeners` no longer exists. Listeners are now part of `$attrs` and fall through to the component's root element.
  For consumers, `@click` etc. on library components keep working.
- `.native` was removed in Vue 3. If you used `@click.native` on a library component, drop `.native`.
- `$attrs` now includes `class` and `style`. Components that use `inheritAttrs: false` + `v-bind="$attrs"`
  on an inner element (e.g. `KitTextField`, the date/time pickers, `KitTextArea`) may now put
  `class`/`style` on that inner element instead of the root. **Check custom classes passed to these components.**
- `KitDatePicker`, `KitDateRangePicker`, `KitTimePicker` and `KitTextArea` intercept `focus`/`blur`/`input`
  and forward the remaining listeners and attrs to the inner `<input>`/`<textarea>`.

### 1.6 Behavior changes

- **`KitFlag`**: the `close` event is now emitted **after** the leave animation (`@after-leave`), not
  immediately on click. Visibility is handled internally. `@close="show = false"` keeps working, but it now fires
  ~animation-duration later.
- **`Tooltip` / `KitBigTooltip`**: `appendToBody` now uses `<Teleport to="body">` instead of manual
  `document.body.appendChild`. `KitBigTooltip` used to read an `appendToBody` prop it never declared, so
  `appendToBody` had no effect before. It is now declared and works, which could change where tooltips
  render for callers that already passed it.
- **`KitAvatar`**: `z-index` is now actually applied (it was `zIndex` in a style string, which browsers
  ignored). Avatars with a `zIndex` prop may now stack differently.
- **`KitSelect` / Select renderers**: the `normalizer` and `filterPredicate` defaults now behave correctly
  (see §3.3). Custom normalizers passed by consumers are unaffected.
- **`KitMarkdownEditor`**: the initial content is written into the textarea before EasyMDE is created, which fixes
  content being pushed down after mount.
- **`KitCheckbox`**: the `id = this._uuid` dead code was removed. `id`/`for` were already unset before.
- **Icons**: the `Icon/aui/*` icons (37 files) and `Icon/MagicStick` are now `.vue` SFCs (they used to be `.js` render functions).
  Their component name is now inferred from the filename (`ChevronDownIcon` instead of `KitChevronDownIcon`).
  This only matters if you look them up by name (tests, devtools).
- **Font Awesome**: `@fortawesome/vue-fontawesome` was upgraded from `2.0.10` to `3.3.3` (the Vue 3 line). If the host app also
  registers `FontAwesomeIcon` itself, it must use v3.x too.

### 1.7 Transitions (CSS)

Vue 3 renamed `<name>-enter` → `<name>-enter-from` (and `-leave` → `-leave-from`). This was fixed in
`KitFlag`, `CalendarHeader` (month slide), `KitModal`, `KitTransitionExpand`, `KitBigTooltipContent`,
`TooltipContent`. **If your app overrides these transition classes**, rename your selectors the same way.

### 1.8 Scoped styles

- `>>>` / `::v-deep` → `:deep()` across the codebase.
- `KitSectionMessage`: slot-content rules now use `:deep()` (Help/Ignore actions are displayed inline again).

---

## 2. Build, tooling and dependencies

### 2.1 Build output

- **Webpack 5 → Vite 5** (`vite.config.mjs`, library mode).
- The output shape is unchanged: UMD `dist/uikit.js` + `dist/bundle.css`, `vue` external, source maps.
- **Babel was removed.** Webpack used to transpile through `@babel/preset-env` (`targets: 'defaults'`). Vite
  uses its own default target (modern browsers, ES2020+). **Older browsers are no longer guaranteed to be supported.**
- UMD global for Vue is `Vue` (was `vue` in webpack externals). This only matters for `<script>`-tag usage.

### 2.2 Tests and Storybook

- **Jest → Vitest** (`vitest.config.mjs`, jsdom). `@vue/test-utils` `1.3.6` → `2.4.11`.
- **Storybook**: `@storybook/vue-webpack5` → `@storybook/vue3-vite` (still 7.6.20). Stories were
  migrated to the Composition API.
- **ESLint**: `plugin:vue/essential` → `plugin:vue/vue3-essential`.
- **Package manager**: yarn → npm (`packageManager: npm@11.12.1`).

### 2.3 Main dependency changes

| Package | Before | After |
|---|---|---|
| `vue` | 2.7.16 | 3.5.41 |
| `@vue/test-utils` | 1.3.6 | 2.4.11 |
| `@fortawesome/vue-fontawesome` (runtime dep) | 2.0.10 | 3.3.3 |
| `@vue/compiler-sfc` | transitive | 3.5.41 |
| `vite` / `@vitejs/plugin-vue` / `vitest` | — | 5.x / 5.x / 3.x |
| `vue-docgen-api` | phantom dep | 4.79.2 (explicit, needed by Storybook docgen under npm) |
| Removed | | webpack, loaders, babel + presets, jest, ts-jest, `vue-template-compiler`, `vue-loader`, `vue-svg-loader`, `storybook-addon-vue-info`, … |

---

## 3. Internal fixes (useful when debugging regressions)

### 3.1 Vue 3 API changes applied

- `$scopedSlots` → `$slots` (`KitActionMenu`, `KitBorderedPanel`, `KitMenuSection`, `KitSelect`, Select renderers).
- `$slots.default` is now a function, and vnode `.elm` is now `.el`. `Popper` now uses `instance.proxy.$el`.
- `render(h)` render functions were replaced by templates (`IconWrapper`, all icons).
- Inline handlers with several statements now need `;` separators (`KitBigModal`, Select renderers).
- `model: {}` option → `defineModel()`.

### 3.2 DOM manipulation → `<Teleport>`

`Tooltip` and `KitBigTooltip` used to move elements to `<body>` by hand, which crashed Vue 3 with
`can't access property "insertBefore", parent is null` (Tabs with tooltips, Tooltip stories).
They now use `<Teleport>`.

**Not migrated yet (same latent risk)**: `KitModal`, `KitDropdown`, `KitSelectMenu`, `KitSpotlight`,
`KitMarkdownEditableRenderer`. They still use `document.body.appendChild/removeChild`. If one of them
throws `insertBefore` / `parent is null` errors in a host app, this is the cause.

### 3.3 Function props typed with an imported type alias

`defineProps<T>()` turns a prop typed with an **imported** function alias into `type: null` at
runtime, and Vue then calls a function default as a factory. This was fixed in `KitSelect`,
`KitSingleSelectEditableRenderer` and `KitMultiSelectEditableRenderer` by inlining the function type.
**Not audited exhaustively**: other function-typed props declared through an imported alias may have the same problem
(the symptom is a default that looks like garbage, e.g. options without labels).

---

## 4. Known open points at release time

Cosmetic issues reported in Storybook that were not fixed:

- Dropdown: background colour / selected item style.
- Menu: background colours.
- Lozenge: slightly less margin between lozenges.
- Modal (basic): less horizontal padding between content and border.
- Toggle: slight horizontal alignment/margin difference.

Plus the `<Teleport>` follow-up (§3.2) and the imported-type-alias audit (§3.3).

---

## 5. Quick troubleshooting after upgrading to v7

| Symptom in the host app | Likely cause | Section |
|---|---|---|
| Initial value not shown / change not propagated | `:value` + `@input` (or `:checked`) instead of `v-model` / `modelValue` | 1.3 |
| Style always applied (disabled look, selected look…) | Override of an old `[disabled]` / `[selected]` selector, or your own `[attr]` selectors | 1.4 |
| `Failed to resolve directive: tooltip` | Directive removed | 1.2 |
| Import of `CheckboxRenderer` etc. is `undefined` | Exports renamed with the `Kit` prefix, or removed | 1.2 |
| Icons missing / `reading 'icon'` error | Host app still on `vue-fontawesome` 2.x | 1.6 |
| Element pops in without animation | App CSS still uses `-enter` instead of `-enter-from` | 1.7 |
| `insertBefore` / `parent is null` | Manual DOM move in a not-yet-teleported component | 3.2 |
| `@close` on `KitFlag` fires later than before | Intended, it now waits for the leave animation | 1.6 |
| Class/style ends up on an inner element | `$attrs` now includes `class`/`style` | 1.5 |
| Breaks on an older browser | Babel/preset-env removed, Vite targets modern browsers | 2.1 |
