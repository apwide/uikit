<template>
  <div>
    <h3>Normal</h3>
    <p v-for="appearance in appearances" :key="appearance">
      <Lozenge :appearance="appearance">
        {{ appearance }}
      </Lozenge>
      <button style="all: unset; cursor: pointer">
        <Lozenge :appearance="appearance"> {{ appearance }} (button) </Lozenge>
      </button>
      with some text
    </p>
    <h3>Subtle</h3>
    <p v-for="appearance in appearances" :key="appearance">
      <Lozenge :appearance="appearance" subtle> {{ appearance }} </Lozenge> with some text
    </p>
    <h3>Long text</h3>
    <p>
      <Lozenge> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Lozenge>
    </p>
  </div>
</template>

<script>
import Lozenge from '@/components/Lozenge/Lozenge'

export default {
  name: 'Lozenges',
  components: { Lozenge },
  data() {
    return {
      appearances: ['default', 'success', 'yellow', 'removed', 'inprogress', 'new', 'moved', 'brown']
    }
  }
}
</script>
