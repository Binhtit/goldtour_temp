import { useAppConfig } from '~/composables/common/use-app-config'

export const showAlertPlaneTicket = function() {
    const { URL_TELE, CHAT_ID } = useAppConfig()
    const { $swal } = useNuxtApp()
    const url = URL_TELE
    const chat_id = CHAT_ID
    $swal.fire({
      title: '<span style="color: #faac2e;">NHẬP THÔNG TIN CỦA BẠN</span>',
      // input: 'text',
      html:
    '<input id="swal-name" class="swal2-input" placeholder="Nhập tên của bạn" style="margin: 1rem 0 0 0; width: 100%;">' +
    '<input id="swal-phone" class="swal2-input" placeholder="Nhập số điện thoại" style="margin: 1rem 0 0 0; width: 100%;">',
      // inputAttributes: {
      //   autocapitalize: 'off'
      // },
      showCancelButton: true,
      cancelButtonText: 'Đóng',
      confirmButtonText: 'Xác nhận',
      confirmButtonColor: '#faac2e',
      showLoaderOnConfirm: true,
      preConfirm: function () {
        const name = document.getElementById('swal-name')?.value
        const phone = document.getElementById('swal-phone')?.value
        const text = `<b><u>ĐẶT VÉ MÁY BAY</u></b>\n   Tên: ${name}\n   Điện thoại: \`${phone}\``
        if (!name || !phone) {
          alert('Bạn nhập chưa đầy đủ!')
          return
        }
        return useFetch(() => url, {
            method: 'POST',
            body: {
              chat_id: chat_id,
              text: text,
              parse_mode: 'HTML'
            },
            initialCache: false,
            onResponse({ request, response, options }) {
              $swal.fire(
                'Cảm ơn bạn!',
                'Chúng tôi sẽ gọi bạn ngay khi nhận được thông tin.',
                'success'
              )
          },
          
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.isConfirmed) {}
    })
  }
