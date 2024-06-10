<template>
  <div>
    <div class="wrapper">
      <KitSectionMessage title="Message title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt totam ipsa suscipit corrupti dolorum,
          dolor sit nihil? Earum ab alias dolorum molestiae porro consectetur deleniti ducimus velit amet a?
        </p>
        <ul slot="actions">
          <li><a href>Help</a></li>
          <li><a href>Ignore</a></li>
        </ul>
      </KitSectionMessage>
    </div>
    <div v-for="appearance of appearances" :key="appearance" class="wrapper">
      <KitSectionMessage :appearance="appearance" :title="appearance">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab cupiditate ratione voluptatem corporis?
          Asperiores accusamus tempore porro beatae repudiandae. Odit labore tempore nisi laboriosam repellat facilis
          aperiam in quos!
        </p>
      </KitSectionMessage>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitSectionMessage from '@components/SectionMessage/KitSectionMessage.vue'
const appearances = ['setup', 'info', 'warning', 'error', 'confirmation', 'change']
</script>

<style scoped>
.wrapper {
  width: 600px;
  margin-bottom: 20px;
}
</style>
