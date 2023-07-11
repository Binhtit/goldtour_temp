import callcenter from '@/static/image/callcenter.png'
import Vinex02 from '@/static/image/vinex-img002.png'
import experience from '@/static/image/experience.png'

import Buy from '@/static/svg/buy.svg'
import Price from '@/static/svg/price.svg'
import Private from '@/static/svg/private.svg'
import Hour from '@/static/svg/hour.svg'

const FOOTER = {
  about: [
    'CÔNG TY TNHH GOLDTOUR VIỆT NAM',
    '17 Trần Bình Trọng, Tx Quảng Trị, Quảng Trị',
    // 'Số tài khoản: 1023431230',
    // 'Ngân hàng: Vietcombank',
    // 'Chi nhánh: Thăng Long',
    'Email: goldtourvietnam@gmail.com',
    'Số điện thoại: 0777427772 - 0936754789'
  ],
  // product: ['Sản phẩm', 'Exchange', 'Card', 'Trust Wallet'],
  service: ['Dịch vụ', 'Vé máy bay', 'Phòng khách sạn', 'Du lịch trong nước', 'Visa'],
  support: ['Hỗ trợ', 'Phản hồi', 'Trung tâm trợ giúp', 'Phí giao dịch'],
  detail: 'GoldTour © 2022',
}

const QANDA = [
  {
    title:'Đăng ký và xác minh tài khoản trên GoldTour như thế nào?',
    content:'Không cần mất nhiều thời gian chọn lựa, Chỉ mất 2 phút để đăng ký và gửi thông tin trên GoldTour, Chúng tôi sẽ gọi lại ngay lập tức để tư vấn cho Quý khách',
    subContent:[
      'B1: Bấm vào nút đăng ký',
      'B2: Nhập thông tin',
      'B3: Gửi thông tin'
    ]
  },
  {
    title:'Phí trên goldtour như thế nào?',
    content:'Mọi dịch vụ tư vấn, giữ chổ đều được miễn phí 100%',
    subContent:[
      // 'Phí giao dịch trên GoldTour là bao nhiêu?'
    ],
  },
  {
    title:'Làm sao để làm thẻ VISA trên GoldTour?',
    content:'Không cần mất nhiều thời gian chọn lựa, Chỉ mất 2 phút để đăng ký và gửi thông tin trên GoldTour, Chúng tôi sẽ gọi lại ngay lập tức để tư vấn cho Quý khách',
    subContent:[
      'B1: Bấm vào nút đăng ký',
      'B2: Nhập thông tin',
      'B3: Gửi thông tin'
    ]
  },
  {
    title:'Làm sao để trở thành CỘNG TÁC VIÊN của GoldTour?',
    content:'Không cần mất nhiều thời gian chọn lựa, Chỉ mất 2 phút để đăng ký và gửi thông tin trên GoldTour, Chúng tôi sẽ gọi lại ngay lập tức để tư vấn cho Quý khách',
    subContent:[
      'B1: Bấm vào nút đăng ký',
      'B2: Nhập thông tin',
      'B3: Gửi thông tin'
    ]
  }
]

const VINEX = [
  {
    label: 'Đối tác hàng không',
    content:
      'Những đối tác hàng không toàn cầu sẽ chắp cánh đưa bạn đến mọi địa điểm trên thế giới.',
  },
  {
    label: 'Đối tác thanh toán',
    content:
      'Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!',
  },
  {
    label: 'Nhiều loại tiền điện tử',
    content:
      'Chúng tôi xếp hạng hàng đầu trong số các sàn giao dịch cấp một với số lượng tiền điện tử được niêm yết cao nhất.',
  },
]

const CHOOSE_GOLDTOUR = [
  {
    image: experience,
    label: 'Hơn 5 năm kinh nghiệm',
    content:
      'Với hơn 5 năm kinh nghiệm trong lĩnh vực vé máy bay - khách sạn - visa chúng tôi luôn đặt sự uy tính - tận tâm lên hàng đầu. Và cũng đã đón nhận được nhiều sự góp ý hài lòng từ quý khách hàng.',
  },
  {
    image: callcenter,
    label: 'Hỗ trợ khách hàng 24/7',
    content:
      'Đội ngũ hỗ trợ nhiều kinh nghiệm của GoldTour luôn túc trực 24/7 để sẵn sàng trợ giúp bạn.',
  },
  {
    image: Vinex02,
    label: 'Phương thức thanh toán an toàn và linh hoạt',
    content:
      'Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch. ',
  },
]

const SLIDER = [
  {
    image: Buy,
    label: 'Đối tác hàng không',
    content:
      'Những đối tác hàng không toàn cầu sẽ chắp cánh đưa bạn đến mọi địa điểm trên thế giới.',
  },
  {
    image: Price,
    label: 'Miễn phí tư vấn và giữ chổ 100%',
    content:
      'GoldTour với phương châm Uy tính và Tận tâm, nhằm đem lại trải nghiệm dịch vụ tốt nhất cho khách hàng chúng tôi tư vấn và giữ chổ miễn phí 100%.',
  },
  {
    image: Private,
    label: 'Đối tác thanh toán',
    content:
      'Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!',
  },
  {
    image: Hour,
    label: 'Hỗ trợ khách hàng 24/7',
    content:
      'Đội ngũ hỗ trợ nhiều kinh nghiệm của GoldTour luôn túc trực 24/7 để sẵn sàng trợ giúp bạn.',
  },
  {
    image: Buy,
    label: 'Mua/bán bằng VND',
    content:
      'Mua và bán TetherUS một cách an toàn và dễ dàng trên GoldTour P2P. Tìm ưu đãi tốt nhất bên dưới, mua và bán USDT bằng các phương thức thanh toán ưa thích của bạn ngay hôm nay.',
  },
  {
    image: Buy,
    label: 'Mua/bán bằng VND',
    content:
      'Mua và bán TetherUS một cách an toàn và dễ dàng trên GoldTour P2P. Tìm ưu đãi tốt nhất bên dưới, mua và bán USDT bằng các phương thức thanh toán ưa thích của bạn ngay hôm nay.',
  },
  {
    image: Price,
    label: 'Phí giao dịch thấp nhất',
    content:
      'GoldTour dẫn đầu với phí giao dịch thấp và chương trình VIP hấp dẫn. Hãy tận hưởng mức phí giao dịch thấp nhất thị trường.',
  },
  {
    image: Private,
    label: 'Bảo mật cao',
    content:
      'Các biện pháp bảo mật cao cấp cùng cùng quỹ sàn của GoldTour sẽ bảo vệ dữ liệu và tài sản của bạn trước rủi ro.',
  },
]
export { FOOTER, QANDA, VINEX, CHOOSE_GOLDTOUR, SLIDER }
