import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import DrawerComponent from '../../../molecules/Drawer'
import SignUpForBirth from '../../dang-ky-khai-sinh'

const DangKyKhaiSinh = () => {
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
          <h1 className='main-title'>Đăng ký khai sinh</h1>
          {/* <a href='' className='url'>
            Xem chi tiet
          </a> */}
        </div>
        <div className='pull-right'>
          <Button type='primary' size='middle' className='btn-main' onClick={showDrawer}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>
          {/* <Modal
            width={1280}
            title='Đăng ký thường trú'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <HouseholdRegistration />
          </Modal> */}
          <DrawerComponent title='Đăng ký khai sinh' onClose={onClose} visible={visible} width={1080}>
            <SignUpForBirth nameDocument='Đăng ký khai sinh' />
          </DrawerComponent>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Trình tự thực hiện</h2>
      <div className='list-expand'>
        <div className='item active'>
          <div className='title'></div>
          {/* <Content />
           */}
          <div className='content'>
            <p>- Người có yêu cầu đăng ký khai sinh nộp hồ sơ tại Ủy ban nhân dân cấp xã có thẩm quyền.</p>
            <p>
              - Người tiếp nhận có trách nhiệm kiểm tra ngay toàn bộ hồ sơ, đối chiếu thông tin trong Tờ khai và tính
              hợp lệ của giấy tờ trong hồ sơ do người yêu cầu nộp, xuất trình.
            </p>
            <p>
              - Nếu hồ sơ đầy đủ, hợp lệ, người tiếp nhận hồ sơ viết giấy tiếp nhận, trong đó ghi rõ ngày, giờ trả kết
              quả; nếu hồ sơ chưa đầy đủ, hoàn thiện thì hướng dẫn người nộp hồ sơ bổ sung, hoàn thiện theo quy định;
              trường hợp không thể bổ sung, hoàn thiện hồ sơ ngay thì phải lập thành văn bản hướng dẫn, trong đó nêu rõ
              loại giấy tờ, nội dung cần bổ sung, hoàn thiện, ký, ghi rõ họ, chữ đệm, tên của người tiếp nhận.
            </p>
            <p>
              - Ngay sau khi nhận đủ giấy tờ theo quy định, nếu thấy thông tin khai sinh đầy đủ và phù hợp, công chức tư
              pháp - hộ tịch báo cáo Chủ tịch Ủy ban nhân dân cấp xã. Trường hợp Chủ tịch Ủy ban nhân dân cấp xã đồng ý
              giải quyết thì công chức tư pháp - hộ tịch cập nhật thông tin khai sinh theo hướng dẫn để lấy Số định danh
              cá nhân, ghi nội dung khai sinh vào Sổ đăng ký khai sinh, hướng dẫn người đi đăng ký khai sinh kiểm tra
              nội dung Giấy khai sinh và Sổ đăng ký khai sinh, cùng người đi đăng ký khai sinh ký tên vào Sổ. Chủ tịch
              Ủy ban nhân dân cấp xã ký 01 bản chính Giấy khai sinh cấp cho người được đăng ký khai sinh, số lượng bản
              sao Giấy khai sinh được cấp theo yêu cầu.
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
            <td data-title='Thời hạn giải quyết'>
              Ngay trong ngày tiếp nhận yêu cầu, trường hợp nhận hồ sơ sau 15 giờ mà không giải quyết được ngay thì trả
              kết quả trong ngày làm việc tiếp theo.
            </td>
            <td style={{ minWidth: '130x', textAlign: 'left' }} data-title='Phí, lệ phí'>
              Lệ phí: - Đối với trường hợp đăng ký khai sinh không đúng hạn: theo mức thu lệ phí do Hội đồng nhân dân
              cấp tỉnh quy định. - Miễn lệ phí đối với trường hợp khai sinh đúng hạn, người thuộc gia đình có công với
              cách mạng; người thuộc hộ nghèo; người khuyết tật
            </td>
            <td style={{ minWidth: '180;px' }} data-title='Mô tả'>
              - Người có yêu cầu đăng ký khai sinh trực tiếp thực hiện hoặc ủy quyền cho người khác thực hiện việc đăng
              ký khai sinh;
              <br />- Người thực hiện việc đăng ký khai sinh có thể trực tiếp nộp hồ sơ tại Ủy ban nhân dân cấp xã có
              thẩm quyền hoặc gửi hồ sơ qua hệ thống bưu chính hoặc gửi hồ sơ theo hệ thống đăng ký hộ tịch trực tuyến.
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
                    - Tờ khai theo mẫu (Tờ khai đăng ký khai sinh, Tờ khai đăng ký nhận cha, mẹ, con theo mẫu nếu tiến
                    hành đồng thời thủ tục nhận cha, mẹ con)
                  </td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}></td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>
                    - Bản chính Giấy chứng sinh; trường hợp không có Giấy chứng sinh thì nộp văn bản của người làm chứng
                    xác nhận về việc sinh; nếu không có người làm chứng thì phải có giấy cam đoan về việc sinh.
                  </td>
                  <td></td>
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
        <p>Ủy ban nhân dân cấp xã</p>
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
export default DangKyKhaiSinh
