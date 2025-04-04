<template>
  <span class="kit-lozenge-wrapper">
    <span class="kit-lozenge" :appearance="appearance" :subtle="subtle">
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
type Props = {
  appearance?: 'default' | 'success' | 'yellow' | 'removed' | 'inprogress' | 'new' | 'moved' | 'brown'
  subtle?: boolean
}

withDefaults(defineProps<Props>(), {
  appearance: 'default',
  subtle: false
})
</script>

<style scoped>
/* NOTE: this wrapper is needed in order to simplify alignement in flex containers */
.kit-lozenge-wrapper {
  box-sizing: border-box;
}

.kit-lozenge {
  box-sizing: border-box;
  background-color: rgb(66, 82, 110);
  color: rgb(255, 255, 255);
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  vertical-align: baseline;
  border-radius: 3px;
  padding: 2px 5px 3px 5px;
  overflow: hidden;
  margin-bottom: -4px;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kit-lozenge[appearance='success'] {
  background-color: rgb(0, 135, 90);
  color: rgb(255, 255, 255);
}

.kit-lozenge[appearance='yellow'] {
  background-color: rgb(246, 195, 66);
  color: rgb(89, 67, 0);
}

.kit-lozenge[appearance='removed'] {
  background-color: rgb(192, 38, 0);
  color: rgb(255, 255, 255);
}

.kit-lozenge[appearance='inprogress'] {
  background-color: rgb(0, 82, 204);
  color: rgb(255, 255, 255);
}

.kit-lozenge[appearance='new'] {
  background-color: rgb(82, 67, 170);
  color: rgb(255, 255, 255);
}

.kit-lozenge[appearance='moved'] {
  background-color: rgb(255, 153, 31);
  color: rgb(23, 43, 77);
}

.kit-lozenge[appearance='brown'] {
  background-color: rgb(129, 91, 58);
  color: rgb(255, 255, 255);
}

.kit-lozenge[subtle] {
  background-color: rgb(223, 225, 230);
  color: rgb(66, 82, 110);
}

.kit-lozenge[subtle][appearance='success'] {
  background-color: rgb(227, 252, 239);
  color: rgb(0, 102, 68);
}

.kit-lozenge[subtle][appearance='yellow'] {
  background-color: rgb(255, 248, 190);
  color: rgb(255, 184, 4);
}

.kit-lozenge[subtle][appearance='removed'] {
  background-color: rgb(255, 235, 230);
  color: rgb(191, 38, 0);
}

.kit-lozenge[subtle][appearance='inprogress'] {
  background-color: rgb(222, 235, 255);
  color: rgb(7, 71, 166);
}

.kit-lozenge[subtle][appearance='new'] {
  background-color: rgb(234, 230, 255);
  color: rgb(64, 50, 148);
}

.kit-lozenge[subtle][appearance='moved'] {
  background-color: rgb(255, 240, 179);
  color: rgb(23, 43, 77);
}

.kit-lozenge[subtle][appearance='brown'] {
  background-color: rgb(255, 238, 224);
  color: rgb(129, 91, 58);
}
</style>
