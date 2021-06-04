import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'
import DrawerComponent from '../../../molecules/Drawer'
import MarriageRegistration from '../../dang-ky-ket-hon'

const DangKyKetHon = () => {
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
          <h1 className='main-title'>Thủ tục đăng ký kết hôn</h1>
        </div>
        <div className='pull-right'>
          <Button type='primary' size='middle' className='btn-main' onClick={showDrawer}>
            <PlusOutlined /> Đăng ký xử lý dịch vụ trực tuyến
          </Button>
          <DrawerComponent title='Đăng ký kết hôn' onClose={onClose} visible={visible} width={1080}>
            <MarriageRegistration nameDocument='Đăng ký kết hôn' />
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
              Ngay trong ngày tiếp nhận hồ sơ; trường hợp nhận hồ sơ sau 15 giờ mà không giải quyết được ngay thì trả
              kết quả trong ngày làm việc tiếp theo.Trường hợp cần xác minh điều kiện kết hôn của hai bên nam, nữ thì
              thời hạn giải quyết không quá 05 ngày làm việc.
            </td>
            <td style={{ minWidth: '130x', textAlign: 'left' }} data-title='Phí, lệ phí'>
              Lệ phí: Miễn lệ phí.
            </td>
            <td style={{ minWidth: '180;px' }} data-title='Mô tả'>
              Người có yêu cầu đăng ký kết hôn trực tiếp nộp hồ sơ tại Ủy ban nhân dân cấp xã có thẩm quyền (bên nam
              hoặc bên nữ có thể trực tiếp nộp hồ sơ mà không cần có văn bản ủy quyền của bên còn lại).
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
                    - Tờ khai đăng ký kết hôn theo mẫu. Hai bên nam, nữ có thể khai chung vào một Tờ khai đăng ký kết
                    hôn.
                  </td>
                  <td data-title='Mẫu đơn, tờ khai' style={{ cursor: 'pointer', color: '#283593' }}>
                    <a href='https://csdl.dichvucong.gov.vn/web/jsp/download_file.jsp?ma=3fef4ec9d101f8b1'>
                      2. TK đăng ký kết hôn.doc
                    </a>
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }} data-title='Số lượng'>
                    Bản chính: 1 - Bản sao: 0
                  </td>
                </tr>
                <tr>
                  <td data-title='Tên giấy tờ'>
                    - Bản chính Giấy xác nhận tình trạng hôn nhân do Ủy ban nhân dân cấp xã có thẩm quyền cấp trong
                    trường hợp người yêu cầu đăng ký kết hôn không đăng ký thường trú tại địa bàn xã, phường, thị trấn
                    làm thủ tục đăng ký kết hôn (trong giai đoạn chuyển tiếp, khi đi vui lòng đem theo).
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
      <div className='article'>Ủy ban Nhân dân xã, phường, thị trấn.</div>
      <div className='divider-gray'></div>
      <h2 className='main-title-sub'>Yêu cầu thực hiện</h2>
      <div className='article'>
        <p id='6177'>
          - Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên;
          <br />- Việc kết hôn do nam và nữ tự nguyện quyết định;
          <br />
          - Các bên không bị mất năng lực hành vi dân sự;
          <br />- Việc kết hôn không thuộc một trong các trường hợp cấm kết hôn, gồm:
          <br />
          + Kết hôn giả tạo;
          <br />
          + Tảo hôn, cưỡng ép kết hôn, lừa dối kết hôn, cản trở kết hôn;
          <br />
          + Người đang có vợ, có chồng mà kết hôn với người khác hoặc chưa có vợ, chưa có chồng mà kết hôn với người
          đang có chồng, có vợ;
          <br />+ Kết hôn giữa những người cùng dòng máu về trực hệ; giữa những người có họ trong phạm vi ba đời; giữa
          cha, mẹ nuôi với con nuôi; giữa người đã từng là cha, mẹ nuôi với con nuôi, cha chồng với con dâu, mẹ vợ với
          con rể, cha dượng với con riêng của vợ, mẹ kế với con riêng của chồng.
          <br />* Nhà nước không thừa nhận hôn nhân giữa những người cùng giới tính.
        </p>
      </div>
    </div>
  )
}
export default DangKyKetHon
