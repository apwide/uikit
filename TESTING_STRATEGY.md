# Testing Strategy for @apwide/uikit

## ⚠️ 2026-08-06 Update

This document's "Current Test Coverage Analysis" and "Success Metrics" sections below describe the
**2026-02-13 baseline** and are now stale — several unrecorded sessions since then brought coverage
to **116/149 components (~77.9%)**, with **117 unit test files / 979 passing tests**. See
`SESSION_SUMMARY.md` for the verified current state and the up-to-date list of the 33 remaining
untested components. `Popper.vue` and `common/Popup.vue` — flagged as the top priority in the
original "❌ Components WITHOUT Tests" list below — are now covered as of 2026-08-06; the remaining
gap is mostly small, low-risk presentational components (ContentLoader family, MarkdownEditor,
ColorPicker, Spotlight). The Wave priority matrix and test templates further down in this document are
still accurate and reusable.

## Current Test Coverage Analysis (historical baseline, 2026-02-13)

### ✅ Components with Tests (9 unit tests, 12 E2E tests)

#### Unit Tests (Jest + @vue/test-utils)
1. **Button** ✅ - Basic tests (3 tests)
2. **Checkbox** ✅ - Good coverage (3 tests)
3. **Form/Input** ✅ - Basic tests (2 tests)
4. **Form/TextArea** ✅ - Basic tests (2 tests)
5. **Form/FieldGroup** ✅ - Minimal tests (1 test)
6. **InlineEdit** ✅ - Comprehensive tests (10 tests) - *disabled with xdescribe*
7. **InlineEditViewContent** ✅ - Minimal (1 test)
8. **Select/Tag** ✅ - Basic tests (3 tests)
9. **Toggle** ✅ - Minimal (1 test)

#### E2E Tests (Cypress - Component Testing in Storybook)
1. **Button** ✅ - Visual styling test
2. **Calendar** ✅
3. **CreateableSelect** ✅ - Comprehensive (multiple scenarios)
4. **DatePicker** ✅
5. **Dropdown** ✅ - Good coverage (3 tests)
6. **InlineEdit** ✅ - Comprehensive (14 tests)
7. **Input** ✅
8. **Modal** ✅
9. **MultiSelect** ✅
10. **Select** ✅ - Comprehensive (8 tests)
11. **Toggle** ✅
12. **UserPicker** ✅

### ❌ Components WITHOUT Tests (Critical Gaps)

#### High Priority (Critical for Vue 3 migration)
- **Table** - Complex, uses slots, state management
- **Menu** system (KitMenu, MenuItem, ActionMenu, IconMenu)
- **Tabs** system (TabProvider, TabHeaders, TabPanels, etc.)
- **Tree** / **TreeSelect** - Uses EventBus ⚠️
- **Tooltip** / **BigTooltip**
- **Modal** variants (BigModal, different modes)
- **Popper** - Core positioning logic
- **Avatar**
- **Badge**
- **Lozenge**
- **Card**
- **Collapsible**
- **Breadcrumbs**

#### Medium Priority
- **MarkdownEditor**
- **ColorPicker**
- **Spotlight** (onboarding)
- **Flag**
- **SectionMessage**
- **ProgressBar** (not tested)
- **Spinner** (not tested)
- **InlineDialog**
- **CopyToClipboard**
- **Radio** / **RadioGroup**

#### Field Renderers (20+ components)
- All renderers need tests (EditableRenderer, Renderer for each type)
- Types: Checkbox, Date, Hyperlink, Markdown, MultiLine, MultiSelect, Number, SecuredString, SingleSelect, StringLine, User

---

## Testing Patterns Identified

### Unit Test Pattern (Jest)

```javascript
import { shallowMount } from '@vue/test-utils'
import ComponentName from '@components/Path/ComponentName.vue'

describe('ComponentName', () => {
  it('should test basic functionality', () => {
    const component = shallowMount(ComponentName, { 
      propsData: { /* props */ },
      slots: { default: 'Content' },
      listeners: { click: jest.fn() }
    })
    
    expect(component.exists()).toBe(true)
  })
})
```

**Key Patterns**:
- Use `shallowMount` for isolated component testing
- Use `mount` for integration tests with child components
- Test props, events, slots, computed properties, methods
- Use `@vue/test-utils` v1 (Vue 2 compatible)
- Mock child components when needed

### E2E Test Pattern (Cypress)

```javascript
describe('ComponentName', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=category--story-name')
  })

  it('should test user interaction', () => {
    cy.get('[data-cy=element]').click()
    cy.get('[data-cy=result]').should('be.visible')
  })
})
```

**Key Patterns**:
- Test against Storybook stories (iframe.html?id=...)
- Use `data-cy` attributes for stable selectors
- Test user interactions, keyboard navigation, focus management
- Test visual states (CSS properties)
- Test accessibility (focus, ARIA)

---

## Test Priority Matrix

### Wave 1: Foundation Components (Week 1-2)
**Goal**: Test simple, low-risk components

| Component | Priority | Test Type | Estimated Time |
|-----------|----------|-----------|----------------|
| Avatar | HIGH | Unit + E2E | 2 hours |
| Badge | HIGH | Unit + E2E | 2 hours |
| Lozenge | HIGH | Unit + E2E | 2 hours |
| Card | HIGH | Unit + E2E | 2 hours |
| Breadcrumbs | MEDIUM | Unit + E2E | 3 hours |
| Spinner | MEDIUM | Unit | 1 hour |
| ProgressBar | MEDIUM | Unit + E2E | 2 hours |

**Total**: ~14-16 hours

### Wave 2: Interactive Components (Week 3-4)
**Goal**: Test components with complex interactions

| Component | Priority | Test Type | Estimated Time |
|-----------|----------|-----------|----------------|
| Dropdown (enhance) | CRITICAL | Unit + E2E | 4 hours |
| Modal (enhance) | CRITICAL | Unit + E2E | 4 hours |
| Menu system | CRITICAL | Unit + E2E | 6 hours |
| Tooltip | HIGH | Unit + E2E | 3 hours |
| InlineDialog | HIGH | Unit + E2E | 3 hours |
| Collapsible | HIGH | Unit + E2E | 2 hours |
| Radio/RadioGroup | HIGH | Unit + E2E | 3 hours |

**Total**: ~25 hours

### Wave 3: Complex Components (Week 5-6)
**Goal**: Test high-risk, complex components

| Component | Priority | Test Type | Estimated Time |
|-----------|----------|-----------|----------------|
| Table | CRITICAL | Unit + E2E | 8 hours |
| Tree/TreeSelect | CRITICAL | Unit + E2E | 8 hours |
| Tabs system | CRITICAL | Unit + E2E | 6 hours |
| MarkdownEditor | HIGH | Unit + E2E | 6 hours |
| ColorPicker | MEDIUM | Unit + E2E | 4 hours |
| Spotlight | MEDIUM | Unit + E2E | 4 hours |

**Total**: ~36 hours

### Wave 4: Field Renderers (Week 7-8)
**Goal**: Test all inline edit renderers

| Component Group | Priority | Test Type | Estimated Time |
|-----------------|----------|-----------|----------------|
| String renderers (4) | HIGH | Unit + E2E | 6 hours |
| Number renderers (2) | HIGH | Unit + E2E | 3 hours |
| Date renderer | HIGH | Unit + E2E | 3 hours |
| Select renderers (2) | HIGH | Unit + E2E | 4 hours |
| User renderers (3) | MEDIUM | Unit + E2E | 4 hours |
| Other renderers (5) | MEDIUM | Unit + E2E | 6 hours |

**Total**: ~26 hours

---

## Test Templates

### Template 1: Simple Presentational Component

```javascript
// tests/components/ComponentName/ComponentName.test.js
import { shallowMount } from '@vue/test-utils'
import ComponentName from '@components/Path/ComponentName.vue'

describe('ComponentName', () => {
  it('renders with default props', () => {
    const component = shallowMount(ComponentName)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(ComponentName, {
      slots: { default: 'Test Content' }
    })
    expect(component.text()).toContain('Test Content')
  })

  it('applies correct CSS classes based on props', () => {
    const component = shallowMount(ComponentName, {
      propsData: { variant: 'primary' }
    })
    expect(component.attributes('variant')).toBe('primary')
  })

  it('emits events on user interaction', async () => {
    const component = shallowMount(ComponentName)
    await component.trigger('click')
    expect(component.emitted('click')).toBeTruthy()
  })
})
```

### Template 2: Interactive Component with State

```javascript
import { mount } from '@vue/test-utils'
import ComponentName from '@components/Path/ComponentName.vue'

describe('ComponentName', () => {
  it('toggles open/closed state on click', async () => {
    const component = mount(ComponentName)
    
    expect(component.vm.isOpen).toBe(false)
    
    await component.find('[data-cy=trigger]').trigger('click')
    expect(component.vm.isOpen).toBe(true)
    
    await component.find('[data-cy=trigger]').trigger('click')
    expect(component.vm.isOpen).toBe(false)
  })

  it('closes on click outside', async () => {
    const component = mount(ComponentName, { attachTo: document.body })
    
    await component.find('[data-cy=trigger]').trigger('click')
    expect(component.vm.isOpen).toBe(true)
    
    document.body.click()
    await component.vm.$nextTick()
    expect(component.vm.isOpen).toBe(false)
  })

  it('handles keyboard navigation', async () => {
    const component = mount(ComponentName)
    
    await component.trigger('keydown.enter')
    expect(component.vm.isOpen).toBe(true)
    
    await component.trigger('keydown.escape')
    expect(component.vm.isOpen).toBe(false)
  })
})
```

### Template 3: Form Component with v-model

```javascript
import { shallowMount } from '@vue/test-utils'
import ComponentName from '@components/Path/ComponentName.vue'

describe('ComponentName', () => {
  it('binds value prop correctly', () => {
    const component = shallowMount(ComponentName, {
      propsData: { value: 'test value' }
    })
    expect(component.find('input').element.value).toBe('test value')
  })

  it('emits input event on value change', async () => {
    const component = shallowMount(ComponentName, {
      propsData: { value: '' }
    })
    
    await component.find('input').setValue('new value')
    expect(component.emitted('input')).toBeTruthy()
    expect(component.emitted('input')[0]).toEqual(['new value'])
  })

  it('handles disabled state', () => {
    const component = shallowMount(ComponentName, {
      propsData: { disabled: true }
    })
    expect(component.find('input').attributes('disabled')).toBeDefined()
  })

  it('validates input and shows errors', async () => {
    const component = shallowMount(ComponentName, {
      propsData: { 
        value: '',
        required: true
      }
    })
    
    await component.vm.validate()
    expect(component.vm.hasError).toBe(true)
  })
})
```

### Template 4: Cypress E2E Test

```javascript
// cypress/integration/ComponentName.spec.js
describe('ComponentName', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=category--component-name-story')
  })

  it('should render correctly', () => {
    cy.get('[data-cy=component-name]').should('be.visible')
  })

  it('should handle user interaction', () => {
    cy.get('[data-cy=trigger]').click()
    cy.get('[data-cy=content]').should('be.visible')
  })

  it('should be keyboard accessible', () => {
    cy.get('[data-cy=trigger]').focus()
    cy.get('[data-cy=trigger]').should('have.focus')
    cy.get('[data-cy=trigger]').type('{enter}')
    cy.get('[data-cy=content]').should('be.visible')
  })

  it('should have correct ARIA attributes', () => {
    cy.get('[data-cy=trigger]').should('have.attr', 'aria-expanded', 'false')
    cy.get('[data-cy=trigger]').click()
    cy.get('[data-cy=trigger]').should('have.attr', 'aria-expanded', 'true')
  })

  it('should have correct visual states', () => {
    cy.get('[data-cy=trigger]').should('have.css', 'background-color', 'rgb(246, 247, 248)')
    cy.get('[data-cy=trigger]').hover()
    // Visual regression testing
  })
})
```

---

## Testing Checklist (Per Component)

### Unit Tests (Jest)
- [ ] Component renders without errors
- [ ] Props are correctly applied
- [ ] Default props work as expected
- [ ] Slots render content correctly
- [ ] Events are emitted correctly
- [ ] Computed properties return correct values
- [ ] Methods execute correctly
- [ ] v-model binding works (if applicable)
- [ ] Watchers react to changes (if applicable)
- [ ] Conditional rendering works
- [ ] Edge cases handled (null, undefined, empty)

### E2E Tests (Cypress)
- [ ] Component renders in Storybook
- [ ] User interactions work (click, hover, etc.)
- [ ] Keyboard navigation works
- [ ] Focus management works correctly
- [ ] ARIA attributes are correct
- [ ] Visual states are correct (CSS)
- [ ] Form submission works (if applicable)
- [ ] Error states display correctly
- [ ] Loading states work
- [ ] Responsive behavior (if applicable)

### Accessibility Tests
- [ ] Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- [ ] Focus indicators visible
- [ ] ARIA roles present
- [ ] ARIA labels/descriptions present
- [ ] Screen reader friendly
- [ ] Color contrast sufficient

---

## Next Steps

### Immediate Actions (This Week)
1. ✅ Document testing strategy
2. 🔲 Set up test coverage reporting
3. 🔲 Fix disabled InlineEdit tests (xdescribe → describe)
4. 🔲 Start Wave 1: Avatar, Badge, Lozenge tests

### Week 1-2: Foundation Components
- Write tests for Avatar
- Write tests for Badge
- Write tests for Lozenge
- Write tests for Card
- Write tests for Breadcrumbs

### Week 3-4: Interactive Components
- Enhance Dropdown tests
- Enhance Modal tests
- Write Menu system tests
- Write Tooltip tests

### Week 5-6: Complex Components
- Write Table tests
- Write Tree/TreeSelect tests
- Write Tabs system tests

### Week 7-8: Field Renderers
- Write tests for all field renderers
- Comprehensive InlineEdit testing

---

## Success Metrics

**Target**: 80% component test coverage

**Current Status (2026-02-13 baseline, historical)**:
- Components with tests: 21/149 (14%)
- Components with unit tests: 9/149 (6%)
- Components with E2E tests: 12/149 (8%)

**Current Status (verified 2026-08-06)**:
- Components with unit tests: 116/149 (~77.9%)
- Unit test files: 117, unit tests: 979 passing (10 skipped)
- Remaining to reach 80% target: 4 components (33 total remain untested — see `SESSION_SUMMARY.md`)

**Target After Phase 1**:
- Components with tests: 120/149 (80%+)
- All critical components: 100% coverage
- All Vue 2 breaking-change components: 100% coverage

---

**Status**: 🚧 Phase 1 nearly complete — ~77.9% component coverage, 4 components short of the 80% goal

**Last Updated**: 2026-08-06
