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

> **2026-08-07 (second pass)**: Root cause found and fixed for every "state/model not applied" report
> below — this is the exact `value`/`input` → `modelValue`/`update:modelValue` breaking change from the
> Vue 2 → Vue 3 migration guide, except undocumented in this project's own migration plan until now: bare
> `v-model="x"` on a custom component used to map to `prop: value` + `event: input` implicitly in Vue 2 —
> no declaration needed. In Vue 3 it maps to `prop: modelValue` + `event: update:modelValue` instead. Every
> component below had never been updated for this (only the 2 components using the old *explicit*
> `model: {}` option were on the migration plan's radar), so every Storybook story using bare `v-model`
> silently bound to a prop the component doesn't have (wrong/missing initial value) and listened for an
> event the component never emits (changes never propagate back). Fixed by converting all 16 affected
> components to `defineModel()` (the Vue 3 replacement) targeting the default `modelValue` name, so every
> existing bare `v-model="x"` usage — in every story and any external consumer — keeps working unchanged,
> no consumer-side migration required: `KitCheckbox`, `KitDropdownCheckboxItem`, `KitInput`, `KitTextArea`,
> `KitSecuredInput`, `KitToggle`, `KitColorPicker`, `KitRadioGroup`, `KitMarkdownEditor`, `KitDatePicker`,
> `KitDateRangePicker`, `KitTimePicker`, `KitSelect`, `KitTabProvider`, `UserPicker` (found via the same
> bare-`v-model` story pattern, not part of the original 16). Verified end-to-end (not just unit tests)
> with a direct `mount()` reproducing the exact bug pattern — initial value shown + change propagates back
> to the parent ref — for `KitInput`, `KitCheckbox`, `KitToggle`. Full jest suite still 1012/0/10, lint and
> webpack build both clean. See `VUE3_MIGRATION_PLAN.md` for the full per-component breakdown.
>
> Marked ✅ below where the *state/model* part of a bullet is fixed; anything else in the same bullet
> (animations, styling, layout) is still open.

* Breadcrumb:
  * ✅ missing icon in front of element — fixed (fontawesome upgrade)
  * ✅ copy capability + animation broken
* Button:
  * ✅ Button with icon does not show icon — fixed (fontawesome upgrade)
* Checkbox:
  * ✅ Initial state is wrong. — fixed (`defineModel()`)
  * ✅ When updating state, input displayed is not updated. — fixed (`defineModel()`)
* Collapsible:
  * ✅ Missing icon (eg: chevron) — fixed (fontawesome upgrade)
  * ✅ On click, error: can't access property "icon", props is undefined — same root cause, fixed
* Color picker:
  * ✅ selected color not displayed — fixed (`defineModel()`)
  * ✅ on click new color state not updated — fixed (`defineModel()`)
* Date picker:
  * ✅ missing icon (eg: chevron) to navigation in year/month... — fixed (fontawesome upgrade)
  * switch month animation does not work anymore: new value seems to appear immediatly, not swap from the left/or right
  * ✅ when clicking date picker or date range picker, same error than for collapsible: can't access property "icon", props is undefined — same root cause, fixed
  * ✅ time picker: time selection is not applied. — fixed (`defineModel()`)
* Drop down:
  * ✅ Drop down with checkbox, intial state and selection is not applied. — fixed (`defineModel()` on `KitDropdownCheckboxItem`)
  * styles are wrong: background-color, selected element, 
* Flag:
  * animation broken: they should slide to appear, now they just appear. Same for disappearing
* Form:
  * ✅ input are not able to store state (input/model) — fixed (`defineModel()` on `KitInput`/`KitTextArea`/`KitSecuredInput`)
  * ✅ danger checkbox in story which should show the validation error messages does not display anything. — unrelated to the model bug, still open
  * ✅ Radio current selection not applied — fixed (`defineModel()` on `KitRadioGroup`)
* Lozenge:
  * lozenge display have loose a bit of margin between them...
* Markdown:
  * ✅ initial input is not displayed — fixed (`defineModel()`)
* Menu:
  * ✅ missing icon — fixed (fontawesome upgrade)
  * wrong background-colors
* Modal:
  * ✅ missing icon to close modal — fixed (fontawesome upgrade)
  * Modal basic has lost some padding/margins on left and right between content and modal border ?
* Section Message:
  * First example of Section Message has Help/Ignore link displayed vertically but they should be displayed horizontally
* Select:
  * ✅ Select component are broken. — the underlying cause was the same `value`/`input` bug (`defineModel()` fix
    applied to `KitSelect` and `UserPicker`); re-verify in Storybook since this was a broad statement and may
    have covered more than just the model wiring
* Tabs:
  * Broken, no content and error: can't access property "insertBefore", parent is null — `KitTabProvider`
    also had the same model bug and has been fixed (`defineModel()`), but this specific `insertBefore`
    crash looks unrelated (likely a DOM/Teleport issue) and needs separate investigation
* Toggle:
  * ✅ selection is not applied on state — fixed (`defineModel()`)
  * there is a slight different in terms of alignment/margin (more margin on left or right)
* Tooltip:
  * on tooltip, I got an error: can't access property "insertBefore", parent is null — likely the same
    unrelated issue as Tabs' `insertBefore` crash, needs separate investigation
