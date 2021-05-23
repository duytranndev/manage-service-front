import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import DrawerComponent from '../../../molecules/Drawer'
import SignUpForBirth from '../../dang-ky-khai-sinh'
import Content from '../content'

const DangKyTamTru = (): JSX.Element => {
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
        </div>
        <div className='pull-right'>
          <Button type='primary' size='middle' className='btn-main' onClick={showDrawer}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>
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
          <Content />
          {/* <div className='content'>
            <p>- Người có yêu cầu đăng ký kết hôn nộp hồ sơ tại Ủy ban nhân dân cấp xã có thẩm quyền.</p>
            <p>
              - Người tiếp nhận có trách nhiệm kiểm tra ngay toàn bộ hồ sơ, đối chiếu thông tin trong Tờ khai và tính
              hợp lệ của giấy tờ trong hồ sơ do người yêu cầu nộp, xuất trình.
            </p>
            <p>
              - Nếu hồ sơ đầy đủ, hợp lệ, người tiếp nhận hồ sơ viết giấy tiếp nhận, trong đó ghi rõ ngày, giờ trả kết
              quả; nếu hồ sơ chưa đầy đủ, hoàn thiện thì hướng dẫn ngay để người nộp hồ sơ bổ sung, hoàn thiện theo quy
              định; trường hợp không thể bổ sung, hoàn thiện hồ sơ ngay thì người tiếp nhận phải lập văn bản hướng dẫn,
              trong đó nêu rõ loại giấy tờ, nội dung cần bổ sung, hoàn thiện, ký, ghi rõ họ, tên của người tiếp nhận.
            </p>
            <p>
              - Ngay sau khi tiếp nhận đủ hồ sơ hợp lệ, nếu thấy đủ điều kiện kết hôn theo quy định, công chức tư pháp -
              hộ tịch báo cáo Chủ tịch Ủy ban nhân dân cấp xã. Trường hợp Chủ tịch Ủy ban nhân dân cấp xã đồng ý giải
              quyết thì công chức tư pháp - hộ tịch ghi việc kết hôn vào Sổ đăng ký kết hôn. Khi trả kết quả đăng ký kết
              hôn, công chức tư pháp - hộ tịch hướng dẫn hai bên nam, nữ kiểm tra nội dung trong Sổ đăng ký kết hôn và
              Giấy chứng nhận kết hôn. Nếu các bên thấy nội dung đúng, phù hợp với hồ sơ đăng ký kết hôn thì công chức
              tư pháp - hộ tịch cùng hai bên nam, nữ ký tên vào Sổ và hướng dẫn các bên cùng ký vào Giấy chứng nhận kết
              hôn, Chủ tịch Ủy ban nhân dân cấp xã tổ chức trao Giấy chứng nhận kết hôn cho hai bên nam, nữ, mỗi bên
              được nhận 01 bản chính Giấy chứng nhận kết hôn; số lượng bản sao Trích lục kết hôn được cấp theo yêu cầu.
            </p>
          </div> */}
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
              Trực tiếp tại trụ sở Công an cấp xã.. Thời gian: Không quá 03 ngày kể từ ngày nhận đủ hồ sơ theo quy định.
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }} data-title='Hình thức nộp'>
              Trực tiếp
            </td>
            <td data-title='Thời hạn giải quyết'>3 Ngày làm việc</td>
            <td style={{ minWidth: '130x', textAlign: 'left' }} data-title='Phí, lệ phí'></td>
            <td style={{ minWidth: '180;px' }} data-title='Mô tả'></td>
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
                  <td data-title='Tên giấy tờ'>Phiếu báo thay đổi hộ khẩu, nhân khẩu (HK02)</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3fed1930930413a9'>
                      93-Mẫu HK02-Phiếu báo thay đổi hộ khẩu, nhân khẩu.doc
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>

                <tr>
                  <td data-title='Tên giấy tờ'>Chứng minh nhân dân.</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}></td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>

                <tr>
                  <td data-title='Tên giấy tờ'>Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp</td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}></td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='divider-gray'></div>

      <h2 className='main-title-sub'>Cơ quan thực hiện</h2>
      <div className='article'>
        <p>Ủy ban Nhân dân xã, phường, thị trấn.</p>
      </div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Yêu cầu thực hiện</h2>
      <div className='article'>
        <p id='6177'>Không</p>
      </div>
    </div>
  )
}
export default DangKyTamTru
