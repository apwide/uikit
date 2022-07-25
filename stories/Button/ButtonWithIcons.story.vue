<template>
  <div>
    <div class="icon-only-child">
      <Button>
        <TableIcon slot="icon-before" />
      </Button>
      <Button :is-disabled="true" spacing="none">
        <EditorSettingsIcon slot="icon-before" />
      </Button>
      <Button spacing="none">
        <EditorRemoveIcon slot="icon-before" />
      </Button>
      <Button :is-selected="true" spacing="none">
        <EditorEditIcon slot="icon-before" />
      </Button>
    </div>
    <div class="icon-only-child">
      <h2>KitIconButton</h2>
      <p>
        <KitIconButton title="Sit at the table">
          <TableIcon />
        </KitIconButton>
      </p>
      <p>
        <KitIconButton :is-selected="true" title="Edit the settings">
          <EditorSettingsIcon />
        </KitIconButton>
      </p>
      <p>
        <KitIconButton inverted-colors title="...">
          <EditorRemoveIcon />
        </KitIconButton>
      </p>
      <p>
        <KitIconButton title="Edit this">
          <EditorEditIcon />
        </KitIconButton>
      </p>
      <h2>Button with an icon</h2>
      <p>
        <Button
          >Pick Date
          <CalendarIcon slot="icon-after" />
        </Button>
        <Button
          >Pick Date
          <PageIcon slot="icon-before" />
        </Button>
      </p>

      <h2>KitButtonGroup</h2>
      <p>
        Normal spacing
        <KitButtonGroup spacing="normal">
          <KitIconButton title="Sit at the table">
            <TableIcon />
          </KitIconButton>
          <KitIconButton title="Edit the content">
            <EditorSettingsIcon />
          </KitIconButton>
          <KitIconButton title="...">
            <EditorRemoveIcon />
          </KitIconButton>
          <KitIconButton title="Edit this">
            <EditorEditIcon />
          </KitIconButton>
        </KitButtonGroup>
      </p>
      <p>
        Wide Spacing
        <KitButtonGroup spacing="wide">
          <KitIconButton title="Sit at the table">
            <TableIcon />
          </KitIconButton>
          <KitIconButton title="Edit the content">
            <EditorSettingsIcon />
          </KitIconButton>
          <KitIconButton title="...">
            <EditorRemoveIcon />
          </KitIconButton>
          <KitIconButton title="Edit this">
            <EditorEditIcon />
          </KitIconButton>
        </KitButtonGroup>
      </p>
      <p>
        Narrow spacing
        <KitButtonGroup spacing="narrow">
          <KitIconButton title="Sit at the table">
            <QuestionIcon />
          </KitIconButton>
          <KitIconButton title="Edit the content">
            <CalendarIcon />
          </KitIconButton>
          <KitIconButton title="...">
            <QuestionIcon />
          </KitIconButton>
          <KitIconButton title="Edit this">
            <CalendarIcon />
          </KitIconButton>
        </KitButtonGroup>
      </p>
    </div>
  </div>
</template>

<script>
import QuestionIcon from '../../src/components/Icon/QuestionIcon'
import CalendarIcon from '../../src/components/Icon/CalendarIcon'
import KitIconButton from '../../src/components/Button/KitIconButton'
import KitButtonGroup from '../../src/components/Button/KitButtonGroup'
import Button from '@/components/Button/Button'

export default {
  name: 'ButtonWithIcons',
  components: {
    KitButtonGroup,
    KitIconButton,
    CalendarIcon,
    Button,
    QuestionIcon
  }
}
</script>

<style scoped>
.icon-only-child {
  margin-bottom: 10px;
}
</style>
