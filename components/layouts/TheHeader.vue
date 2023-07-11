<template>
  <header>
    <div class="header-top container-fluid">
      <div class="header-top__wrap">
        <div class="notification">
          <img :src="IC_BELL" />
          <marquee>Tưng bừng ưu đãi, đón ngàn niềm vui - Mùa du lịch đến rồi GOLDTOUR đang có nhiều chương trình
            ưu đãi cho quý khách hàng khi đặt tour du lịch, vé máy bay, khách sạn, visa tại GOLDTOUR với hàng nghìn mã giảm giá lên đến 70% và vô số ưu đãi
            đang chờ. ĐẶT NGAY THÔI !!!</marquee>
        </div>
        <div class="top-nav">
          <a href="tel:0777427772"><span class="label">Support hotline: </span><span>07774-27772</span></a>
          <a href="https://zalo.me/0393415769">Zalo</a>
          <a href="https://www.facebook.com/goldtourvietnam">Facebook</a>
          <a href="https://t.me/goldtourvnbot">Telegram</a>
        </div>
      </div>
    </div>
    <div class="tw-px-3 tw-py-4 tw-flex tw-items-center tw-border tw-border-grey100">
      <div class="tw-flex">
        <BaseImage class="tw-h-6 md:tw-h-8" :src="LOGO" />
      </div>
      <div class="tw-w-full tw-flex tw-justify-between">
        <div class="tw-flex tw-items-center">
          <BaseDropDownAsk class="tw-mx-20 tw-w-[90px] tw-hidden md:tw-block" label="Giao dịch">
          </BaseDropDownAsk>
          <BaseDropDownAsk class="tw-hidden tw-w-[90px] md:tw-block" label="Hỗ trợ">
          </BaseDropDownAsk>
        </div>

        <BaseButton
          class="tw-bg-yellow800 tw-py-[5px] tw-px-[8px] tw-text-[#ffffff] md:tw-text-grey900 md:tw-py-[14px] md:tw-px-12 tw-rounded-md tw-text-sm"
          ref="btnShow" @click="showAlert()">ĐĂNG KÝ CỘNG TÁC VIÊN</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppConfig } from '~/composables/common/use-app-config'
import LOGO from '@/static/image/logo.png'
import IC_BELL from '@/static/image/icons/ic_bell.svg'

const { URL_TELE, CHAT_ID } = useAppConfig()

function showAlert() {
  const { $swal } = useNuxtApp()
  const url = URL_TELE
  const chat_id = CHAT_ID
  $swal.fire({
    title: '<span style="color: #faac2e;">ĐĂNG KÝ CỘNG TÁC VIÊN</span>',
    // input: 'text',
    html:
      '<i>Bạn có nhiều bạn bè hoặc bạn thường xuyên bay và đi du lịch. Hãy đăng ký cộng tác viên để được hưỡng ưu đãi nhiều hơn nữa.</i>' +
      '<input id="swal-name" class="swal2-input" placeholder="Nhập tên của bạn" style="margin: 1rem 0 0 0; width: 100%;">' +
      '<input id="swal-phone" class="swal2-input" placeholder="Nhập số điện thoại" style="margin: 1rem 0 0 0; width: 100%;">',
    showCancelButton: true,
    cancelButtonText: 'Đóng',
    confirmButtonText: 'Đăng ký',
    confirmButtonColor: '#faac2e',
    showLoaderOnConfirm: true,
    preConfirm: function () {
      const name = document.getElementById('swal-name')?.value
      const phone = document.getElementById('swal-phone')?.value
      const text = `<b><u>ĐĂNG KÝ CỘNG TÁC VIÊN</u></b>\n   Tên: ${name}\n   Điện thoại: \`${phone}\``
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
              'Chúc mừng bạn đã đăng ký đối tác thành công. Chúng tôi sẽ gọi bạn khi nhận được thông tin.',
              'success'
            )
          }
        },
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {})
}

</script>
<style lang="scss" scoped>
.vue-notification {
  // styling
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
.header-top {
  background: #17112D;
  font-family: "Barlow", Arial, Times !important;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 14px;
  }

  .notification {
    position: relative;
    display: flex;
    gap: 10px;
    max-width: 470px;
    color: #F7F7F7;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 16px 0;
    padding-left: 12px;

    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 45px;
      background: linear-gradient(270deg, #17112d 0%, rgba(255, 255, 255, 0) 100%);
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .top-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;

    .label {
      color: #9297A5;
    }

    span,
    a {
      color: #fff;
      transition: all .3s;
    }

    a:hover {
      color: #FFC700;
    }
  }

  @media only screen and (max-width: 922px) {
    .header-top__wrap {
      display: block;
    }

    .top-nav {
      font-size: 2.6vw;
      padding-bottom: 8px;
      column-gap: 4.2vw;

      a {
        text-decoration: none;
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .header-top__wrap {
      display: none;
    }
  }
}
</style>
