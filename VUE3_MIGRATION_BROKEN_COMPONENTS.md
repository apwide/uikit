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

> **2026-08-07 (third pass)**: Root cause found and fixed for the enter-transition animation reports
> below (Flag, DatePicker's month-switch) — another Vue 2 → Vue 3 CSS class rename that was never
> updated. Vue 2's transition classes were `<name>-enter` / `<name>-leave` (initial state, one frame
> before the transition starts); Vue 3 renamed the *enter* one to `<name>-enter-from` (the *leave* one
> keeps its name, just `<name>-leave-from` — but most of these components never styled that one
> separately, folding its styles into `<name>-leave-active` instead, which is why leaving still looked
> fine while entering silently stopped animating). Every affected component had CSS still targeting the
> old `<name>-enter` selector, which now matches nothing — Vue still applies the correct
> `<name>-enter-from` class, but no rule in the stylesheet listens for it, so the element just pops in at
> its final state instead of sliding/fading in. Fixed in **6 files**, found by grepping every
> `<transition>`/`<Transition>` block's paired CSS in the codebase (not just the 2 reported here):
> `KitFlag.vue` (`.flag-enter`, `.flag-left-enter`), `CalendarHeader.vue` (`.slide-right-enter`,
> `.slide-left-enter`, `.slide-top-enter` — this is the DatePicker month-switch animation),
> `KitModal.vue` (`.kit-modal-transition-enter`), `KitTransitionExpand.vue` (`.expand-enter`),
> `KitBigTooltipContent.vue` and `TooltipContent.vue` (`.fade-enter` in both). Verified concretely (not
> just "class name looks right"): mounted `KitFlag` with the real `<Transition>` (not VTU's default
> stub) and confirmed Vue actually applies `flag-enter-from flag-enter-active` on mount, which now matches
> the stylesheet. Full jest suite still 1012/0/10, lint and webpack build both clean.

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
  * ✅ switch month animation does not work anymore: new value seems to appear immediatly, not swap from the left/or right — fixed (`.slide-*-enter` → `.slide-*-enter-from` in `CalendarHeader.vue`)
  * ✅ when clicking date picker or date range picker, same error than for collapsible: can't access property "icon", props is undefined — same root cause, fixed
  * ✅ time picker: time selection is not applied. — fixed (`defineModel()`)
* Drop down:
  * ✅ Drop down with checkbox, intial state and selection is not applied. — fixed (`defineModel()` on `KitDropdownCheckboxItem`)
  * styles are wrong: background-color, selected element, 
* Flag:
  * ✅ animation broken: they should slide to appear, now they just appear. Same for disappearing — the
    entering half is fixed (`.flag-enter`/`.flag-left-enter` → `-enter-from`); the leaving half was
    already correctly named (`.flag-leave-active`, unchanged between Vue 2/3) so it should already have
    been working — re-verify the "disappearing" case specifically in Storybook (click a flag's close
    button) in case there's a second, separate issue there
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
  * ✅ Broken, no content and error: can't access property "insertBefore", parent is null — fixed. Root
    cause: `Tooltip.vue` (used in the story's "With tooltip and badge" tab headers) manually did
    `document.body.appendChild(popper.value.$el)` on `mouseenter` / `document.body.removeChild(...)` on
    `mouseleave`, entirely outside Vue's DOM tracking, immediately followed by `show.value = false`
    toggling the same element's `v-if` off. Vue's own unmount then tried to remove/move that element
    from its *original* parent, which by then had `parentNode === null` (Firefox's phrasing for a null
    dereference is "can't access property X, Y is null" — matches exactly). Not new to Vue 3, but Vue 3's
    rewritten patch/unmount internals appear to hit this dead branch more reliably than Vue 2 did.
    Reproduced concretely (mouseenter, wait, mouseleave, wait — no crash before the fix would throw here)
    and fixed by replacing the manual DOM manipulation with `<Teleport to="body" :disabled="!appendToBody">`
    wrapping the existing `v-if`, Vue's own built-in, fully-tracked mechanism for exactly this
    "render elsewhere in the DOM" case — eliminates the bug class rather than patching around it.
* Toggle:
  * ✅ selection is not applied on state — fixed (`defineModel()`)
  * there is a slight different in terms of alignment/margin (more margin on left or right)
* Tooltip:
  * ✅ on tooltip, I got an error: can't access property "insertBefore", parent is null — same root cause
    and fix as Tabs above. `KitBigTooltip.vue` had the identical manual-DOM-manipulation pattern (fixed
    the same way with `<Teleport>`), though its `appendToBody` branch was actually **dead code** there —
    the prop was read (`props.appendToBody`) but never declared in `Props`, so it was always `undefined`/
    falsy and the manual DOM code never ran in practice. Declared the missing prop as part of this fix so
    `<Teleport :disabled="!appendToBody">` actually does something when a caller sets it.
  * **Not yet checked**: `KitModal.vue`, `KitDropdown.vue`, `KitSelectMenu.vue`, `KitSpotlight.vue`, and
    `KitMarkdownEditableRenderer.vue` (the "position editor" logic) all use the same
    `document.body.appendChild`/`removeChild` pattern for their own "float/append to body" needs. They
    weren't reported as broken and weren't touched here, but they carry the same latent risk — worth a
    dedicated pass to migrate them to `<Teleport>` too rather than waiting for a bug report.
