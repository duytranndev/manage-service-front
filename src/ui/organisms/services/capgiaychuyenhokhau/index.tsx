import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import DrawerComponent from '../../../molecules/Drawer'
import CapGiayChuyen from '../../cap-giay-chuyen-ho-khau'
import Content from '../content'

const CapGiayChuyenHoKhau = (): JSX.Element => {
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
          <h1 className='main-title'>Cấp giấy chuyển hộ khẩu</h1>
          {/* <a href='' className='url'>
          Xem chi tiet
        </a> */}
        </div>
        <div className='pull-right'>
          <Button type='primary' size='middle' className='btn-main' onClick={showDrawer}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>

          <DrawerComponent title='Đăng ký thường trú' onClose={onClose} visible={visible} width={1080}>
            <CapGiayChuyen nameDocument='Cấp giấy chuyển hộ khẩu' />
          </DrawerComponent>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Trình tự thực hiện</h2>
      <div className='list-expand'>
        <div className='item active'>
          <div className='title'></div>
          <Content />
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
            <td data-title='Thời hạn giải quyết'>3 Ngày làm việc</td>
            <td style={{ minWidth: '130x', textAlign: 'left' }} data-title='Phí, lệ phí'></td>
            <td style={{ minWidth: '180;px' }} data-title='Mô tả'>
              Trực tiếp tại trụ sở Công an cấp huyện. Thời giạn: Không quá 03 ngày kể từ ngày nhận đủ hồ sơ theo quy
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
                  <td data-title='Tên giấy tờ'>
                    Sổ hộ khẩu (hoặc sổ hộ khẩu gia đình, giấy chứng nhận nhân khẩu tập thể đã được cấp trước đây).
                  </td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    {/* <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3fc59bf71d7f35b8'>
                      95-Mẫu HK07-Giấy chuyển hộ khẩu.doc
                    </a> */}
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
          + Giấy chuyển hộ khẩu được cấp cho công dân trong các trường hợp sau đây: chuyển đi ngoài phạm vi xã, thị trấn
          của huyện thuộc tỉnh; chuyển đi ngoài phạm vi huyện, quận, thị xã của thành phố trực thuộc trung ương; thị xã,
          thành phố thuộc tỉnh.
        </p>
        <p id='6177'>
          + Trường hợp không phải cấp giấy chuyển hộ khẩu: chuyển đi trong phạm vi xã, thị trấn của huyện thuộc tỉnh;
          chuyển đi trong cùng một huyện, quận, thị xã của thành phố trực thuộc trung ương; chuyển đi trong cùng một thị
          xã, thành phố thuộc tỉnh; học sinh, sinh viên, học viên học tại nhà trường và cơ sở giáo dục khác; đi làm
          nghĩa vụ quân sự, phục vụ có thời hạn trong Công an nhân dân; được tuyển dụng vào Quân đội nhân dân, Công an
          nhân dân ở tập trung trong doanh trại hoặc nhà ở tập thể; chấp hành hình phạt tù; chấp hành quyết định đưa vào
          trường giáo dưỡng, cơ sở giáo dục, cơ sở chữa bệnh, cơ sở cai nghiện ma tuý bắt buộc, quản chế.
        </p>
      </div>
    </div>
  )
}

export default CapGiayChuyenHoKhau
