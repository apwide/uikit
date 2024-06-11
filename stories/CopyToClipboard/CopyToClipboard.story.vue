<template>
  <div style="display: flex; align-items: center; gap: 20px">
    <CopyToClipboard text="text" />
    <CopyToClipboard text="text" spacing="none" placement="right">
      <KitButton appearance="subtle">
        <EditorLinkIcon />
      </KitButton>
    </CopyToClipboard>
    <CopyToClipboard text="text" placement="right"> Copy </CopyToClipboard>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import CopyToClipboard from '../../src/components/CopyToClipboard/CopyToClipboard.vue'
import EditorLinkIcon from '../../src/components/Icon/EditorLinkIcon'
</script>
