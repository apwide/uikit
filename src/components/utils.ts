export function debounce<T extends (...args: any) => any>(func: T, timeout: number) {
  let parameters: unknown[] = []
  let timer: NodeJS.Timeout

  function runLater() {
    func(...parameters)
  }

  return (...a: unknown[]) => {
    parameters = a
    clearTimeout(timer)
    timer = setTimeout(runLater, timeout)
  }
}