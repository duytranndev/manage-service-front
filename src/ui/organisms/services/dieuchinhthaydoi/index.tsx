import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { useState } from 'react'
import HouseholdRegistration from '../../household-registration'
import Content from '../content'

const DieuChinhThayDoi = (): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
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
          <h1 className='main-title'>Điều chỉnh thay đổi nội dung sổ hộ khẩu</h1>
          {/* <a href='' className='url'>
          Xem chi tiet
        </a> */}
        </div>
        <div className='pull-right'>
          <Button type='primary' size='middle' className='btn-main' onClick={showModal}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>
          <Modal
            width={1280}
            title='Đăng ký thường trú'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <HouseholdRegistration />
          </Modal>
          {/* <DrawerComponent title='Đăng ký thường trú' onClose={onClose} visible={visible} width={1120}>
          <HouseholdRegistration />
        </DrawerComponent> */}
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
                  <td data-title='Tên giấy tờ'>Sổ hộ khẩu</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}></td>
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
                  <td data-title='Tên giấy tờ'>
                    Tùy từng trường hợp điều chỉnh thay đổi mà xuất trình các giấy tờ khác theo quy định như: Ý kiến của
                    chủ hộ hoặc người khác trong gia đình về việc thay đổi chủ hộ; Giấy khai sinh hoặc Quyết định được
                    phép thay đổi của cơ quan có thẩm quyền về đăng ký hộ tịch; Quyết định thay đổi địa giới hành chính,
                    đơn vị hành chính đường phố, số nhà của cơ quan nhà nước có thẩm quyền; giấy tờ chứng minh chỗ ở hợp
                    pháp mới.
                  </td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    {/* <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3feb960b6e7d6d31'>
                      93-Mẫu HK02-Phiếu báo thay đổi hộ khẩu, nhân khẩu.doc
                    </a> */}
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

export default DieuChinhThayDoi
