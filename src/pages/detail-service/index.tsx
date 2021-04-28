import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { SERVICE_URL } from '../../share/common/api.constants'
import { moduleApi } from '../../share/handle/api.module'
import { ServiceInterface } from '../../share/interface/service.interface'
import './index.scss'

const DetailService = (): JSX.Element => {
  const { slug } = useParams<any>()
  const [service, setService] = useState<ServiceInterface>({})

  useEffect(() => {
    const params = {
      slug: slug
    }
    moduleApi.getDetail(SERVICE_URL, slug).then((res) => setService(res.data.data))
  }, [])

  console.log('service :>> ', service)

  return (
    <div className='section-detail'>
      <div className='container'>
        <div className='breadcrumb'>
          <li>
            <a href='/'>Trang chủ</a>
          </li>
          <li>
            <a href='#'>Chi tiết thủ tục hành chính</a>
          </li>
        </div>
        <div className='row-content'>
          <div className='head'>
            <div className='pull-left'>
              <h1 className='main-title'></h1>
              <h1 className='main-title'>Đăng ký thường trú (thực hiện tại cấp huyện)</h1>
              <a href='' className='url'>
                Xem chi tiet
              </a>
            </div>
            <div className='pull-right'>
              <button>Nop truc tuyen</button>
            </div>
            <div className='clearfix'></div>
          </div>
          <div className='divider-gray'></div>
          <h2 className='main-title-sub'>Trình tự thực hiện</h2>
          <div className='list-expand'>
            <div className='item active'>
              <div className='title'></div>
              <div className='content'>
                <p>Bước 1: Chuẩn bị hồ sơ theo quy định của pháp luật.</p>
                <p>
                  Bước 2: Công dân nộp hồ sơ tại Công an cấp huyện để làm thủ tục đăng ký thường trú. Cán bộ tiếp nhận
                  hồ sơ đối chiếu với các quy định của pháp luật về cư trú:
                  <br />+ Trường hợp hồ sơ đầy đủ, hợp lệ thì viết giấy biên nhận trao cho người nộp. <br />+ Trường hợp
                  hồ sơ đủ điều kiện nhưng thiếu thành phần hồ sơ hoặc biểu mẫu, giấy tờ kê khai chưa đúng, chưa đầy đủ
                  thì cán bộ tiếp nhận hồ sơ hướng dẫn cho người đến nộp hồ sơ.
                  <br />+ Trường hợp hồ sơ không đủ điều kiện thì không tiếp nhận và trả lời bằng văn bản cho công dân,
                  nêu rõ lý do không tiếp nhận.
                  <br />+ Thời gian tiếp nhận hồ sơ: Từ thứ 2 đến thứ 6 hàng tuần (ngày lễ, tết nghỉ)
                </p>
                <p>
                  Bước 3: Trả kết quả: <br />+ Trường hợp được giải quyết đăng ký thường trú: Nộp lệ phí và nhận hồ sơ;
                  kiểm tra lại giấy tờ, tài liệu, đối chiếu các thông tin được ghi trong sổ hộ khẩu, giấy tờ khác và ký
                  nhận vào sổ theo dõi giải quyết hộ khẩu (ký, ghi rõ họ, tên và ngày, tháng, năm nhận kết quả). <br />+
                  Trường hợp không giải quyết đăng ký thường trú: Nhận lại hồ sơ đã nộp; kiểm tra lại giấy tờ, tài liệu
                  có trong hồ sơ; nhận văn bản về việc không giải quyết đăng ký cư trú và ký nhận (ghi rõ họ, tên và
                  ngày, tháng, năm nhận văn bản và hồ sơ đăng ký cư trú đã nộp) vào sổ theo dõi giải quyết hộ khẩu.{' '}
                  <br />
                  Thời gian trả kết quả: Theo ngày hẹn trên giấy biên nhận
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailService
