<template>
  <div class="outer">
    <div class="loading-state-switcher">
      <label>
        <input v-model="isLoading" type="checkbox" />
        <span>Show Loading State</span>
      </label>
    </div>
    <div class="wrapper">
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :is-disabled="true" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :is-selected="true" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" round :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KitButton from './KitButton.vue'

export default {
  name: 'KitButtonAppearance',
  components: { KitButton },
  data() {
    return {
      appearances: ['default', 'primary', 'link', 'subtle', 'subtle-link', 'warning', 'danger', 'help'],
      isLoading: false,
      isSelected: false
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: normal;
}

.buttons >>> button {
  margin-bottom: 10px;
}

.wrapper {
  display: flex;
  max-width: 80%;
  justify-content: space-between;
}

.loading-state-switcher {
  margin-bottom: 10px;
}
</style>
