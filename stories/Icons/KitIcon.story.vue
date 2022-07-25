<template>
  <div>
    <h2>Changing the size of the icon</h2>
    <select v-model="size">
      <option>5em</option>
      <option>5x</option>
      <option>30px</option>
    </select>
    <div class="grid-5">
      <div class="box">
        <AwesomeIcon :size="size" type="trash" />
      </div>
    </div>
    <h2>Solid icons</h2>
    <div class="grid-5">
      <div v-for="icon in solidSupportedIcons" :key="icon" class="box">
        <AwesomeIcon :title="icon" :type="icon" class="story-icon" />
        <span>{{ icon }}</span>
      </div>
    </div>
    <h2>Regular icons</h2>
    <div class="grid-5">
      <div v-for="icon in regularSupportedIcons" :key="icon" class="box">
        <AwesomeIcon :title="icon" :type="icon" class="story-icon" icon-style="regular" />
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import AwesomeIcon from '../../src/components/Icon/KitIcon'

export default {
  name: 'FontAwesomeIcons.story',
  components: { AwesomeIcon },
  data() {
    return {
      size: undefined
    }
  },
  computed: {
    solidSupportedIcons() {
      console.log(library.definitions)
      return Object.keys(library.definitions.fas)
    },
    regularSupportedIcons() {
      return Object.keys(library.definitions.far)
    }
  },
  methods: {
    toggleColors() {
      if (!this.color) {
        this.color = '#ffffff'
        this.backgroundColor = '#0747a6'
      } else {
        this.color = undefined
        this.backgroundColor = '#fff'
      }
    }
  }
}
</script>
<style scoped>
.story-icon {
  margin: 5px;
}

.grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
