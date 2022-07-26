export default async function SetToClipboard(text) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch (error) {
      // noop
    }
  }
  try {
    // when not allowed in iframe
    const input = document.createElement('input')
    input.type = 'hidden'
    input.setAttribute('readonly', '')
    document.body.appendChild(input)
    input.type = 'text'
    input.value = text
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('uikit::SetToClipboard', error)
  }
}
