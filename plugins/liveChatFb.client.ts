import { useAppConfig } from '~/composables/common/use-app-config'

export default defineNuxtPlugin(() => {
  const { PAGE_ID } = useAppConfig()
  // if (document && window) {
  //   var chatbox = document.getElementById('fb-customer-chat');
  //   chatbox.setAttribute("page_id", PAGE_ID);
  //   chatbox.setAttribute("attribution", "biz_inbox");

  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       xfbml            : true,
  //       version          : 'v15.0'
  //     });
  //   };

  //   (function(d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s); js.id = id;
  //     js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'facebook-jssdk'));
  // }
})
