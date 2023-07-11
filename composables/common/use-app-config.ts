import { useRuntimeConfig } from '#app'

export function useAppConfig() {
  const environment = useRuntimeConfig()
  const KEY_GG_ANALYTICS: string = environment.KEY_GG_ANALYTICS
  const URL_TELE: string = environment.URL_TELE
  const CHAT_ID: string = environment.CHAT_ID
  const PAGE_ID: string = environment.PAGE_ID
  return {
    KEY_GG_ANALYTICS,
    URL_TELE,
    CHAT_ID,
    PAGE_ID
  }
}
