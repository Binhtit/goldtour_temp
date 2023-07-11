import { useAppConfig } from '~/composables/common/use-app-config'

export default defineNuxtPlugin(() => {
  const { KEY_GG_ANALYTICS } = useAppConfig()
  if (window && KEY_GG_ANALYTICS) {
    const keyAnalytics = KEY_GG_ANALYTICS
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', keyAnalytics);
  }
})
