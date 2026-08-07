# CSS Selector Changes — Consumer Migration Guide

If your application overrides any of the library's styles by targeting the selectors below, you need
to update those overrides for v7.0.0 (Vue 3). Everything else in the library's public class names/DOM
structure is unaffected — this only concerns the specific selectors listed here.

## Why

Several components exposed a boolean state — `disabled`, `selected`, etc. — as a **plain boolean
attribute** on a non-native element (e.g. a `<div>`) so it could be targeted in CSS with a presence
selector: `[disabled] { ... }` / `[selected] { ... }`.

Under Vue 2, binding a boolean to an attribute like this (`:disabled="isDisabled"`) omitted the attribute
entirely when the value was `false`, so `[disabled]` only ever matched the "on" state.

Under Vue 3, this omission behavior only applies to *real* native boolean DOM properties (the browser's
own IDL boolean reflection — this still works correctly for actual `<button disabled>` / `<input
disabled>` elements, no change there). For anything else — a custom attribute on a `<div>`/`<span>`, or
any attribute landing on a component that isn't a native form element — Vue 3 now **stringifies** the
value instead: `disabled="false"`. A presence selector like `[disabled]` matches *any* attribute value,
including `"false"`, so it incorrectly applied the styling all the time, even in the "off" state — a case
a plain presence selector was never designed to handle.

We are switching these to explicit `data-*` attributes with value-matching selectors instead of presence
selectors, precisely so this can't happen again regardless of the underlying Vue version's attribute
serialization behavior: `[data-disabled="true"]` only ever matches the literal string `"true"`.

## What changed, component by component

Only components actually affected are listed. Untouched components (real native `<button>`/`<input>`
elements, or components that already correctly omitted the attribute) are not in this list because their
selectors did not change.

| Component | Old selector (remove) | New selector (use instead) | Status |
|---|---|---|---|
| `KitSelect` (`.kit-select`) | `.kit-select[disabled]` | `.kit-select[data-disabled="true"]` | ✅ Done |
| `KitSelect` (`.kit-select__flex-wrapper`, multi-select tag spacing) | `.kit-select__flex-wrapper[gap]` / `[gap] .kit-select__search` | `.kit-select__flex-wrapper[data-gap="true"]` / `[data-gap="true"] .kit-select__search` | ✅ Done |
| `KitDropdownItem` / `KitMenuItem` (`.dropdown-item`) | `.dropdown-item[disabled]` | `.dropdown-item[data-disabled="true"]` | ✅ Done |
| `KitDropdownItem` / `KitMenuItem` (`.dropdown-item`) | `.dropdown-item[selected]` | `.dropdown-item[data-selected="true"]` | ✅ Done |

`KitMenuItem` renders a `KitDropdownItem` internally (with an extra `.kit-menu-item` class on the same
element) — if you target `.kit-menu-item[disabled]` or `.kit-menu-item[selected]` directly instead of
`.dropdown-item[...]`, update those the same way: `.kit-menu-item[data-disabled="true"]` /
`.kit-menu-item[data-selected="true"]`.

*(This table will grow as more components are converted — see `VUE3_MIGRATION_BROKEN_COMPONENTS.md` for
the full investigation and which components were checked and found already safe.)*

## What to do in your application

Search your stylesheets for the **old selector** column above. If you have a rule like:

```css
/* your app's CSS, overriding or extending KitSelect's disabled styling */
.kit-select[disabled] {
  /* ... */
}
```

Update it to the new selector:

```css
.kit-select[data-disabled="true"] {
  /* ... */
}
```

The underlying `disabled`/`is-disabled` **prop** on the component itself is unchanged — only the DOM
attribute used for the CSS hook changed name and matching style. If you're binding this prop from a
parent component (`:is-disabled="x"`), nothing changes on your side; this only affects raw CSS selectors.
