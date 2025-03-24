<template>
  <div class="kit-tag" :color="color">
    <component :is="tag" class="text" :href="link">
      {{ label }}
    </component>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label?: string
  color?: string
  tag?: string
  link?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
  color: '',
  tag: 'span'
})
</script>

<style scoped>
.kit-tag {
  display: inline-flex;
  border-radius: 3px;
  height: 20px;
  margin: 4px;
}

.kit-tag .text {
  display: inline-block;
  outline: none;
  padding: 2px 0;
  line-height: 1;
  font-size: 14px;
  margin: 0 4px;
  max-width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.kit-tag[color='standard'] {
  background-color: rgb(244, 245, 247);
  color: rgb(37, 56, 88);
}

.kit-tag[color='green'] {
  background-color: rgb(87, 217, 163);
  color: rgb(23, 43, 77);
}

.kit-tag[color='blue'] {
  background-color: rgb(76, 154, 255);
  color: rgb(23, 43, 77);
}

.kit-tag[color='red'] {
  background-color: rgb(255, 143, 115);
  color: rgb(23, 43, 77);
}

.kit-tag[color='purple'] {
  background-color: rgb(153, 141, 217);
  color: rgb(23, 43, 77);
}

.kit-tag[color='grey'] {
  background-color: rgb(66, 82, 110);
  color: rgb(255, 255, 255);
}

.kit-tag[color='teal'] {
  background-color: rgb(0, 199, 230);
  color: rgb(23, 43, 77);
}

.kit-tag[color='yellow'] {
  background-color: rgb(255, 196, 0);
  color: rgb(23, 43, 77);
}

.kit-tag[color='green-light'] {
  background-color: rgb(121, 242, 192);
  color: rgb(0, 102, 68);
}

.kit-tag[color='blue-light'] {
  background-color: rgb(179, 212, 255);
  color: rgb(7, 71, 166);
}

.kit-tag[color='redLight'] {
  background-color: rgb(255, 189, 173);
  color: rgb(66, 82, 110);
}

.kit-tag[color='purple-light'] {
  background-color: rgb(192, 182, 242);
  color: rgb(64, 50, 148);
}

.kit-tag[color='grey-light'] {
  background-color: rgb(235, 236, 240);
  color: rgb(66, 82, 110);
}

.kit-tag[color='teal-light'] {
  background-color: rgb(121, 226, 242);
  color: rgb(66, 82, 110);
}

.kit-tag[color='yellow-light'] {
  background-color: rgb(255, 227, 128);
  color: rgb(66, 82, 110);
}
</style>
