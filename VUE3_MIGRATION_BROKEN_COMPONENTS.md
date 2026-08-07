Storybook broken components:

* Breadcrumb:
  * missing icon in front of element
  * copy capability + animation broken
* Button:
  * Button with icon does not show icon
* Checkbox:
  * Initial state is wrong.
  * When updating state, input displayed is not updated.
* Collapsible:
  * Missing icon (eg: chevron)
  * On click, error: can't access property "icon", props is undefined
* Color picker:
  * selected color not displayed
  * on click new color state not updated
* Date picker:
  * missing icon (eg: chevron) to navigation in year/month...
  * switch month animation does not work anymore: new value seems to appear immediatly, not swap from the left/or right
  * when clicking date picker or date range picker, same error than for collapsible: can't access property "icon", props is undefined
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
  * missing icon
  * wrong background-colors
* Modal:
  * missing icon to close modal
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
