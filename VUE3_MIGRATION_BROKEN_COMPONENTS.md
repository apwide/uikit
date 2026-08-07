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
  * ✅ animation broken: they should slide to appear, now they just appear. Same for disappearing —
    **fully fixed (2026-08-07), two separate bugs stacked here.** First, the CSS class rename
    (`.flag-enter`/`.flag-left-enter` → `-enter-from`, see the second-pass note above) fixed the
    entering half. The disappearing half turned out to be a second, structurally different bug, found
    only after re-verifying in Storybook per this note: `KitFlag.vue`'s *entire template root* was
    `<transition>`, and the story removed it via `<KitFlag v-if="show" @close="show = false">` — a
    `v-if` on the ANCESTOR, outside the component. Reproduced in isolation (a minimal component whose
    whole template is `<transition><div>...</div></transition>`, unmounted via a parent's `v-if`): Vue 3
    cannot defer/animate a removal that's decided by an ancestor outside the `<Transition>`'s own render
    scope — it only works when the `v-if`/`v-show` toggling the transitioned element lives *inside* the
    same component as the `<Transition>`. The leave-active CSS class was correctly named all along; it
    just never got the chance to apply because the element was already gone from the DOM before Vue's
    leave-transition logic could run. Fixed by moving visibility inside `KitFlag.vue` itself (`v-if="visible"`
    on the transitioned div, own local `visible` ref) and deferring the `close` emit to the transition's
    `@after-leave` hook — so the flag now animates itself out *before* telling the parent it's safe to
    unmount, with **zero change needed** to existing consumer code (the story's
    `@close="show = false"` handler still works as-is, it just now fires after the animation instead of
    instantly). Added a `mount()`-based test (not `shallowMount`, which stubs
    `<transition>` by default and would hide this class of bug) confirming the element stays in the DOM
    and `close` hasn't fired yet immediately after clicking the close button — verified this test fails
    against the pre-fix code and passes against the fix.
* Form:
  * ✅ input are not able to store state (input/model) — fixed (`defineModel()` on `KitInput`/`KitTextArea`/`KitSecuredInput`)
  * ✅ danger checkbox in story which should show the validation error messages does not display anything. — unrelated to the model bug, still open
  * ✅ Radio current selection not applied — fixed (`defineModel()` on `KitRadioGroup`)
* Lozenge:
  * lozenge display have loose a bit of margin between them...
* Markdown:
  * ✅ initial input is not displayed — fixed (`defineModel()`)
  * ✅ content visually pushed down shortly after the editor mounts (visible on the plain
    `MarkdownEditor` story, no floating/positioning involved) — root cause was in
    `KitMarkdownEditor.vue`'s `onMounted`: it constructed EasyMDE against an **empty** textarea, then
    immediately replaced the whole document via `editor.value.value(modelValue.value)`. CodeMirror 5
    handles that "construct empty, then full-document replace" sequence by leaving its internal
    `display.viewOffset` (the `.CodeMirror-sizer`'s inner `mover` div `top` offset, meant to represent
    the height of virtualized/scrolled-past lines) stale at a non-zero value even though `viewFrom`
    correctly ends up at `0` — pushing all rendered lines down inside the editor box by roughly the
    content's own height. Neither `cm.refresh()` nor `cm.setSize()` called afterwards (even from dev
    tools, well after mount) recomputes it correctly. Confirmed unrelated to `data-has-status-bar`
    timing or the `KitMarkdownEditableRenderer.vue` positioning logic (both were red herrings from
    earlier investigation attempts). Fixed by setting the raw `<textarea>` element's native `.value`
    to the initial content *before* constructing `EasyMDE`/CodeMirror (`CodeMirror.fromTextArea` reads
    the textarea's existing value as its starting document), so the editor is built once, in a single
    pass, with its real content — no post-construction document replace, no stale offset. Verified via
    `cypress run` against the live Storybook `MarkdownEditor` story, inspecting
    `cm.display.viewOffset`/`viewFrom` directly (jest can't catch this — CSS is mocked and the bug is a
    real CodeMirror layout/DOM quirk, not a Vue reactivity issue jsdom would surface).
* Menu:
  * ✅ missing icon — fixed (fontawesome upgrade)
  * wrong background-colors
* Modal:
  * ✅ missing icon to close modal — fixed (fontawesome upgrade)
  * Modal basic has lost some padding/margins on left and right between content and modal border ?
* Section Message:
  * First example of Section Message has Help/Ignore link displayed vertically but they should be displayed horizontally
* Select:
  * ✅ Select component are broken. — the `value`/`input` → `defineModel()` fix covered part of it,
    but the project owner found two more concrete symptoms after re-verifying: **SingleSelect story
    displaying oddly (no visible text, dark background)** and **multi-select tags not showing their
    label**. This needed a **real browser** to diagnose — jest maps all CSS imports to a no-op mock
    (`styleMock.js`), so it can never catch a rendering/styling bug like this, and the component's own
    unit tests (which assert on props/DOM structure, not on what `.map(normalizer)` actually produces)
    didn't catch the underlying data bug either. Used `cypress run` against the live Storybook build to
    get real, reliable signal throughout — `SingleSelect`'s "should search elements" test failed with
    "Too many elements found: 10, expected 1" (typing into the search box never filtered the option
    list), which is the same underlying data problem behind both reported symptoms: every "normalized"
    option/tag was silently wrong, not `{id, label, value, disabled}`.
    <br><br>
    Root cause: `KitSelect.vue`'s `normalizer`/`filterPredicate` props are typed via an *imported* type
    alias (`normalizer?: Normalizer<unknown>`, from `@components/Select/types`) rather than an inline
    function-type literal. `@vue/compiler-sfc`'s lightweight `defineProps<T>()` type-to-runtime-prop
    inference can resolve an inline function type (e.g. `(value: unknown) => Value<unknown>` written
    directly) to `type: Function`, but can't "see through" an *imported* alias to know it's a function
    type — it falls back to `type: null`. That distinction matters a lot at runtime: Vue only skips
    invoking a function-valued prop default as a factory when the prop's resolved `type` is exactly
    `Function`; for `type: null` (same as `Object`/`Array`), **any** function default gets called once
    (with the whole `props` object as its argument) to compute the real value — the same convention
    Object/Array defaults need, extended to cover anything the compiler couldn't prove was itself meant
    to be used as a plain function value. The existing default was doubly-wrapped
    (`normalizer: () => (value) => ({ id: value, label: value, ... })`) to account for exactly this.
    <br><br>
    Three attempts were needed to land the correct fix, and this is worth documenting because two of
    them looked right until checked in a real browser: (1) simply removing the outer wrapper broke
    `KitSelect.vue`'s own jest tests outright (`TypeError: object is not a function`) — with `type: null`
    still in effect, the now-single-level function itself got invoked as the factory, so `props.normalizer`
    ended up being *the result of calling the normalizer with the whole `props` object*, not the
    normalizer itself. (2) Reverting to the original double-wrap tested as *correct* in an isolated jest
    check (`vm.normalizer('Paris')` genuinely returned the right object) — yet that's the code the very
    first `cypress run` had already shown as broken in the browser. That contradiction was never fully
    resolved (most likely explanation: Storybook's webpack dev server was serving a stale cached bundle
    at the time of that first `cypress run`, after many unrelated file edits earlier in the session —
    but this isn't proven with certainty). (3) The fix that's actually in place now: changed the prop's
    TypeScript type from the imported alias to an **inline** function-type literal
    (`normalizer?: (value: unknown) => Value<unknown>`, `filterPredicate?: (label: string, input: string)
    => boolean`) so the compiler correctly infers `type: Function`, then used a plain, unwrapped function
    as the default — matching `isValidOption?: (option: string) => boolean` in the same file, which was
    never affected by any of this because its type was already written inline. Fixed in **3 files**:
    `KitSelect.vue`, `KitSingleSelectEditableRenderer.vue`, `KitMultiSelectEditableRenderer.vue` (the
    latter two only had `normalizer`, not `filterPredicate`).
    <br><br>
    Verified with a full `cypress run` (`Select.spec.js`, `MultiSelect.spec.js`, `CreateableSelect.spec.js`
    — 19/19 passing) against a Storybook instance that was fully killed and restarted with its webpack
    cache cleared first, specifically to rule out a stale bundle giving a false-positive read on the fix
    itself. Full jest suite still 1019/0/10, lint and webpack build both clean.
    **Worth a broader check**: any other component with a function-typed prop default sourced from an
    *imported* type alias (rather than written inline) carries the same latent risk — this pass fixed
    the 3 instances found via `grep` for the double-wrapped-default pattern specifically, not every
    possible instance of the underlying type-inference gap.
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
