<template>
  <span>{{ value }}</span>
</template>

<script>
export default {
  name: 'KitBadge',
  props: {
    value: {
      type: [String, Number],
      default: '-'
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  min-width: 1px;
  text-align: center;
  border-radius: 24px;
  padding: 2px 6px;
  box-sizing: border-box;
  flex-shrink: 0;
}

span:empty::after {
  display: inline-block;
  content: '-';
}

[appearance='added'] {
  background-color: rgb(227, 252, 239);
  color: rgb(0, 102, 68);
}

[appearance='default'] {
  background-color: rgb(223, 225, 230);
  color: rgb(23, 43, 77);
}

[appearance='important'] {
  background-color: rgb(222, 53, 11);
  color: rgb(255, 255, 255);
}

[appearance='primary'] {
  background-color: rgb(0, 82, 204);
  color: rgb(255, 255, 255);
}

[appearance='removed'] {
  background-color: rgb(255, 235, 230);
  color: rgb(191, 38, 0);
}
</style>
