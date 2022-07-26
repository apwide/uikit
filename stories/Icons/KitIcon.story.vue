<template>
  <div>
    <h2>Changing the size of the icon</h2>
    <div>
      <div style="width: 400px">
        <KitSelect v-model="size" :options="['5em', '5x', '30px']" placeholder="Select size" />
      </div>
      <div>
        <AwesomeIcon :size="size" type="trash" />
      </div>
    </div>
    <h2>Solid icons</h2>
    <div class="grid-5">
      <div v-for="icon in solidSupportedIcons" :key="icon" class="box">
        <KitCopyToClipboard :text="icon">
          <div style="display: flex; flex-direction: column; align-items: center">
            <AwesomeIcon :type="icon" class="story-icon" />
            <span>{{ icon }}</span>
          </div>
        </KitCopyToClipboard>
      </div>
    </div>
    <h2>Regular icons</h2>
    <div class="grid-5">
      <div v-for="icon in regularSupportedIcons" :key="icon" class="box">
        <KitCopyToClipboard :text="icon">
          <div style="display: flex; flex-direction: column; align-items: center">
            <AwesomeIcon :title="icon" :type="icon" class="story-icon" icon-style="regular" />
            <span>{{ icon }}</span>
          </div>
        </KitCopyToClipboard>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import AwesomeIcon from '../../src/components/Icon/KitIcon'
import KitCopyToClipboard from '../../src/components/CopyToClipboard/CopyToClipboard'
import KitSelect from '../../src/components/Select/Select'

export default {
  name: 'FontAwesomeIcons.story',
  components: { KitSelect, KitCopyToClipboard, AwesomeIcon },
  data() {
    return {
      size: undefined
    }
  },
  computed: {
    solidSupportedIcons() {
      const list = Object.keys(library.definitions.fas)
      list.sort()
      return list
    },
    regularSupportedIcons() {
      const list = Object.keys(library.definitions.far)
      list.sort()
      return list
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
