import GeneralError from '@components/Form/GeneralError'

describe('GeneralError', () => {
  it('is an instance of Error', () => {
    const error = new GeneralError('Something failed', 'SERVER_ERROR')
    expect(error).toBeInstanceOf(Error)
  })

  it('sets the message', () => {
    const error = new GeneralError('Something failed', 'SERVER_ERROR')
    expect(error.message).toBe('Something failed')
  })

  it('sets the generalError code', () => {
    const error = new GeneralError('Something failed', 'SERVER_ERROR')
    expect(error.generalError).toBe('SERVER_ERROR')
  })
})
