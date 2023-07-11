<template>
  <div class="tw-mx-[16px] md:tw-mx-[120px] lg:tw-mx-[240px] tw-my-[40px]">
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
      <div class="tw-flex tw-flex-col tw-justify-items-center tw-self-center tw-items-start">
        <BaseHeading class="tw-font-bold tw-text-2xl lg:tw-text-5xl">
          Bán vé máy bay - Phòng khách sạn - Visa <span class="text-yellow800">uy tính tận tâm</span></BaseHeading>
        <BaseText class="tw-text-sm lg:tw-text-base">Với gần 7 năm kinh nghiệm. Đặt biệt là dịch vụ vé máy bay và phòng khách sạn, địa điểm vui chơi du lịch mà chúng tôi
          đã theo đuổi được hơn 6 năm, nên dịch vụ của chúng tôi luôn đánh vào tâm lý chất lượng tốt uy tính và giá cả hợp lý của
          quý khách hàng. Giá thành dịch vụ mà chúng tôi đưa ra luôn là tốt nhất trên thị trường.<br/>
          Chung tôi luôn luôn đặt uy tính - tận tâm lên hàng đầu</BaseText>
        <BaseButton @click="showAlert()"
          class="tw-block tw-bg-yellow800 tw-text-grey900 tw-text-sm tw-px-[50px] tw-py-[5px] md:tw-py-[14px] md:tw-px-[78px] tw-rounded-md">
          TƯ VẤN NHANH</BaseButton>
      </div>
      <div class="tw-mt-10">
        <BaseImage :src="IlLU" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppConfig } from '~/composables/common/use-app-config'
import IlLU from '@/static/image/illustration.png'
const { URL_TELE, CHAT_ID } = useAppConfig()

function showAlert() {
  const { $swal } = useNuxtApp()
  const url = URL_TELE
  const chat_id = CHAT_ID
  $swal.fire({
    title: '<span style="color: #faac2e;">ĐĂNG KÝ TƯ VẤN</span>',
    // input: 'text',
    html:
      '<input id="swal-name" class="swal2-input" placeholder="Nhập tên của bạn" style="margin: 1rem 0 0 0; width: 100%;">' +
      '<input id="swal-phone" class="swal2-input" placeholder="Nhập số điện thoại" style="margin: 1rem 0 0 0; width: 100%;">',
    // inputAttributes: {
    //   autocapitalize: 'off'
    // },
    showCancelButton: true,
    cancelButtonText: 'Đóng',
    confirmButtonText: 'Đăng ký',
    confirmButtonColor: '#faac2e',
    showLoaderOnConfirm: true,
    preConfirm: function () {
      const name = document.getElementById('swal-name')?.value
      const phone = document.getElementById('swal-phone')?.value
      const text = `<b><u>ĐĂNG KÝ TƯ VẤN</u></b>\n   Tên: ${name}\n   Điện thoại: \`${phone}\``
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
          if (response.status === 200) {
            $swal.fire(
              'Cảm ơn bạn!',
              'Chúng tôi sẽ gọi bạn ngay khi nhận được thông tin.',
              'success'
            )
          }
        },

      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result: any) => {
    if (result.isConfirmed) {}
  })
}
</script>
