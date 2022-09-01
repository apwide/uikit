<template>
  <div>
    <h2>KitIconButton</h2>
    <p>
      <KitIconButton title="Sit at the table">
        <KitIcon type="table" />
      </KitIconButton>
    </p>
    <p>
      <KitIconButton :is-selected="true" title="Edit the settings">
        <KitIcon type="edit" />
      </KitIconButton>
      (selected)
    </p>
    <p>
      <KitIconButton inverted-colors title="...">
        <KitIcon type="search" />
      </KitIconButton>
    </p>
    <p>
      <KitIconButton title="Edit this">
        <KitIcon type="edit" />
      </KitIconButton>
    </p>
    <h2>Button with an icon</h2>
    <p>
      <Button
        >Pick Date
        <KitIcon type="calendar-alt" icon-style="regular" slot="icon-after" />
      </Button>
      <Button>Pick Date <KitIcon type="calendar-alt" icon-style="regular" slot="icon-before" /> </Button>
    </p>

    <h2>KitButtonGroup</h2>
    <p>
      Normal spacing
      <KitButtonGroup spacing="normal">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="edit" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="download" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
    <p>
      Wide Spacing
      <KitButtonGroup spacing="wide">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="edit" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="download" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
    <p>
      Narrow spacing
      <KitButtonGroup spacing="narrow">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="calendar-alt" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="square" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
  </div>
</template>

<script>
import KitIconButton from '../../src/components/Button/KitIconButton'
import KitButtonGroup from '../../src/components/Button/KitButtonGroup'
import KitIcon from '../../src/components/Icon/KitIcon'
import Button from '../../src/components/Button/Button'

export default {
  name: 'ButtonWithIcons',
  components: {
    KitIcon,
    KitButtonGroup,
    KitIconButton,
    Button
  }
}
</script>

<style scoped></style>
