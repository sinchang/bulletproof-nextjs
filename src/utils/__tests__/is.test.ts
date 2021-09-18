import { isRtl } from '../rtl'

describe('utils/is', () => {
  describe('isRtl', () => {
    it('should return true with langauge code ar-SA', () => {
      const actualOutput = isRtl('ar-SA')
      expect(actualOutput).toBe(true)
    })
  })
})
