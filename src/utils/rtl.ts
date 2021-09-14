export type Direction = 'rtl' | 'ltr'

export const isRtl = (languageCode: string): boolean => languageCode === 'ar'

export const getRtlDirection = (languageCode: string): Direction =>
  isRtl(languageCode) ? 'rtl' : 'ltr'
