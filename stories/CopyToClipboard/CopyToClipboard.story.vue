<template>
  <div style="display: flex; align-items: center; gap: 20px">
    <KitCopyToClipboard text="text" />
    <KitCopyToClipboard text="text" spacing="none" placement="right">
      <KitButton appearance="subtle">
        <EditorLinkIcon />
      </KitButton>
    </KitCopyToClipboard>
    <KitCopyToClipboard text="text" placement="right"> Copy </KitCopyToClipboard>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import KitCopyToClipboard from '@components/CopyToClipboard/KitCopyToClipboard.vue'
import EditorLinkIcon from '../../src/components/Icon/aui/EditorLinkIcon'
</script>
