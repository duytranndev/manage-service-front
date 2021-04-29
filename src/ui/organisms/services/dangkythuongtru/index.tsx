import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import DrawerComponent from '../../../molecules/Drawer'
import HouseholdRegistration from '../../household-registration'

const DangKyThuongTru = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
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
          <Button type='primary' size='middle' className='btn-main' onClick={showDrawer}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>
          <DrawerComponent title='Đăng ký thường trú' onClose={onClose} visible={visible} width={1120}>
            <HouseholdRegistration />
          </DrawerComponent>
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
              Bước 2: Công dân nộp hồ sơ tại Công an cấp huyện để làm thủ tục đăng ký thường trú. Cán bộ tiếp nhận hồ sơ
              đối chiếu với các quy định của pháp luật về cư trú:
              <br />+ Trường hợp hồ sơ đầy đủ, hợp lệ thì viết giấy biên nhận trao cho người nộp. <br />+ Trường hợp hồ
              sơ đủ điều kiện nhưng thiếu thành phần hồ sơ hoặc biểu mẫu, giấy tờ kê khai chưa đúng, chưa đầy đủ thì cán
              bộ tiếp nhận hồ sơ hướng dẫn cho người đến nộp hồ sơ.
              <br />+ Trường hợp hồ sơ không đủ điều kiện thì không tiếp nhận và trả lời bằng văn bản cho công dân, nêu
              rõ lý do không tiếp nhận.
              <br />+ Thời gian tiếp nhận hồ sơ: Từ thứ 2 đến thứ 6 hàng tuần (ngày lễ, tết nghỉ)
            </p>
            <p>
              Bước 3: Trả kết quả: <br />+ Trường hợp được giải quyết đăng ký thường trú: Nộp lệ phí và nhận hồ sơ; kiểm
              tra lại giấy tờ, tài liệu, đối chiếu các thông tin được ghi trong sổ hộ khẩu, giấy tờ khác và ký nhận vào
              sổ theo dõi giải quyết hộ khẩu (ký, ghi rõ họ, tên và ngày, tháng, năm nhận kết quả). <br />+ Trường hợp
              không giải quyết đăng ký thường trú: Nhận lại hồ sơ đã nộp; kiểm tra lại giấy tờ, tài liệu có trong hồ sơ;
              nhận văn bản về việc không giải quyết đăng ký cư trú và ký nhận (ghi rõ họ, tên và ngày, tháng, năm nhận
              văn bản và hồ sơ đăng ký cư trú đã nộp) vào sổ theo dõi giải quyết hộ khẩu. <br />
              Thời gian trả kết quả: Theo ngày hẹn trên giấy biên nhận
            </p>
          </div>
        </div>
      </div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Cách thức thực hiện</h2>
      <br />
      <table className='table-result-tthc table-result'>
        <thead>
          <tr>
            <th>Hình thức nộp</th>
            <th>Thời hạn giải quyết</th>
            <th>Phí, lệ phí</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }} data-title='Hình thức nộp'>
              Trực tiếp
            </td>
            <td data-title='Thời hạn giải quyết'>15 Ngày làm việc</td>
            <td style={{ minWidth: '130x', textAlign: 'left' }} data-title='Phí, lệ phí'></td>
            <td style={{ minWidth: '180;px' }} data-title='Mô tả'>
              Trực tiếp tại trụ sở Công an cấp huyện. Thời giạn; Không quá 15 ngày kể từ ngày nhận đủ hồ sơ theo quy
              định.
            </td>
          </tr>
        </tbody>
      </table>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Thành phần hồ sơ</h2>
      <div className='list-expand'>
        <div className='item active'>
          <div className='title' title='Bao gồm'>
            Bao gồm
          </div>
          <div className='content'>
            <table className='table table-result'>
              <thead>
                <tr>
                  <th>Tên giấy tờ</th>
                  <th>Mẫu đơn, tờ khai</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title='Tên giấy tờ'>Giấy chuyển hộ khẩu (HK07)</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3fc59bf71d7f35b8'>
                      95-Mẫu HK07-Giấy chuyển hộ khẩu.doc
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>Phiếu báo thay đổi hộ khẩu, nhân khẩu (HK02).</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3feb960b6e7d6d31'>
                      93-Mẫu HK02-Phiếu báo thay đổi hộ khẩu, nhân khẩu.doc
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp</td>
                  <td>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma='></a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>Bản khai nhân khẩu (HK01)</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3fe1d05e04ef503d'>
                      92-Mẫu HK01-Bản khai nhân khẩu.doc
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>Sổ hộ khẩu (nếu có)</td>
                  <td>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma='></a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>
                    Giấy tờ tài liệu chứng minh thuộc một trong các điều kiện đăng ký thường trú tại thành phố trực
                    thuộc Trung ương
                  </td>
                  <td>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma='></a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>
                    Một số trường hợp cụ thể hồ sơ quy định tại khoản 2, Điều 6 Thông tư số 35/2014/TT-BCA, ngày
                    09/9/2014 quy định chi tiết thi hành một số điều của Luật Cư trú và Nghị định số 31/2014/NĐ-CP ngày
                    18/4/2014 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Cư trú
                  </td>
                  <td>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma='></a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='divider-gray'></div>

      <h2 className='main-title-sub'>Cơ quan thực hiện</h2>
      <div className='article'>
        <p>Công an huyện</p>
      </div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Yêu cầu, điều kiện thực hiện</h2>
      <div className='article'>
        <p id='6177'>
          Có giấy tờ, tài liệu chứng minh thuộc một trong các điều kiện đăng ký thường trú vào thành phố trực thuộc
          Trung ương.
        </p>
      </div>
    </div>
  )
}

export default DangKyThuongTru
