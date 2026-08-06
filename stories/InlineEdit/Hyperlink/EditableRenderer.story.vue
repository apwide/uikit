<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" :editable="false" />
    </p>
  </div>
</template>

<script>
import KitHyperlinkEditableRenderer from '@/components/field-renderers/KitHyperlinkEditableRenderer'

export default {
  components: { KitHyperlinkEditableRenderer },
  data() {
    return {
      link: 'https://www.spartez.com'
    }
  },
  methods: {
    onSave(value, callback) {
      this.link = value
      callback()
    },

    onSaveError(value, callback) {
      callback(new Error('Something went wrong'))
    }
  }
}
</script>
