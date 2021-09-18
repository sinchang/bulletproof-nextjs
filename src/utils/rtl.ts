export type Direction = 'rtl' | 'ltr'

export const isRtl = (languageCode: string): boolean => languageCode === 'ar-SA'

export const getRtlDirection = (languageCode: string): Direction =>
  isRtl(languageCode) ? 'rtl' : 'ltr'
