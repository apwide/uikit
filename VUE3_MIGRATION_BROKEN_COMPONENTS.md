Storybook broken components:

> **2026-08-07**: Root cause found and fixed for every "missing icon" report below —
> `@fortawesome/vue-fontawesome` was pinned at `2.0.10`, the **Vue-2-only** major version
> (`peerDependencies.vue: "~2"`). It installed and compiled fine (no version guard blocks it), but its
> render logic is written against Vue 2's instance API, so under Vue 3 it silently failed to render (or
> crashed with `Cannot read properties of undefined (reading 'icon')` — matches the "props is undefined"
> errors reported below on Collapsible/DatePicker). Every icon disappearance traces back to `KitIcon.vue`,
> the single shared wrapper around `<FontAwesomeIcon>` used across Breadcrumb, Button, Collapsible,
> DatePicker's `CalendarHeader`, Menu's `KitActionMenu`, and Modal's close button. Bumped to
> `@fortawesome/vue-fontawesome@3.3.3` (the Vue 3 line, same public API, no other code changes needed) —
> confirmed via a direct component render test that `KitIcon` now emits a real `<svg>` with `<path>` data
> instead of crashing. **User-confirmed fixed in Storybook.** The `Icon/aui/*.vue` icon set (Warning/Error
> icons in Modal's `Header.vue`, Flag icons, etc.) is a separate, already-working system unaffected by
> this bug (converted from Vue 2 `render(h)` to `.vue` SFCs in an earlier session).
>
> Marked ✅ below where the *icon* part of a bullet is fixed by this change; anything else in the same
> bullet (animations, state/styling issues) is still open.

* Breadcrumb:
  * ✅ missing icon in front of element — fixed (fontawesome upgrade)
  * copy capability + animation broken
* Button:
  * ✅ Button with icon does not show icon — fixed (fontawesome upgrade)
* Checkbox:
  * Initial state is wrong.
  * When updating state, input displayed is not updated.
* Collapsible:
  * ✅ Missing icon (eg: chevron) — fixed (fontawesome upgrade)
  * ✅ On click, error: can't access property "icon", props is undefined — same root cause, fixed
* Color picker:
  * selected color not displayed
  * on click new color state not updated
* Date picker:
  * ✅ missing icon (eg: chevron) to navigation in year/month... — fixed (fontawesome upgrade)
  * switch month animation does not work anymore: new value seems to appear immediatly, not swap from the left/or right
  * ✅ when clicking date picker or date range picker, same error than for collapsible: can't access property "icon", props is undefined — same root cause, fixed
  * time picker: time selection is not applied.
* Drop down:
  * Drop down with checkbox, intial state and selection is not applied.
  * styles are wrong: background-color, selected element, 
* Flag:
  * animation broken: they should slide to appear, now they just appear. Same for disappearing
* Form:
  * input are not able to store state (input/model)
  * danger checkbox in story which should show the validation error messages does not display anything.
  * Radio current selection not applied
* Lozenge:
  * lozenge display have loose a bit of margin between them...
* Markdown:
  * initial input is not displayed
* Menu:
  * ✅ missing icon — fixed (fontawesome upgrade)
  * wrong background-colors
* Modal:
  * ✅ missing icon to close modal — fixed (fontawesome upgrade)
  * Modal basic has lost some padding/margins on left and right between content and modal border ?
* Section Message:
  * First example of Section Message has Help/Ignore link displayed vertically but they should be displayed horizontally
* Select:
  * Select component are broken.
* Tabs:
  * Broken, no content and error: can't access property "insertBefore", parent is null
* Toggle:
  * selection is not applied on state
  * there is a slight different in terms of alignment/margin (more margin on left or right)
* Tooltip:
  * on tooltip, I got an error: can't access property "insertBefore", parent is null
