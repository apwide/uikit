import { config } from '@vue/test-utils'

// @vue/test-utils v2 stopped rendering a stubbed child's default slot content
// (v1 did render it). Restore the v1 behavior globally so shallowMount-based
// tests that assert on slot content keep working the same way across the
// Vue 2 -> Vue 3 migration.
// https://test-utils.vuejs.org/api/#global-renderstubdefaultslot
config.global.renderStubDefaultSlot = true
