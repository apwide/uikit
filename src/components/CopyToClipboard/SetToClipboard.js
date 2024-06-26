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
    const textarea = document.createElement('textarea')
    textarea.setAttribute('readonly', '')
    document.body.appendChild(textarea)
    textarea.value = text
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('uikit::SetToClipboard', error)
  }
}
