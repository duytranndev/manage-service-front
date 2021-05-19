import { Link } from 'react-router-dom'
import './index.scss'

const AboutPage = (): JSX.Element => {
  return (
    <div className='section-about'>
      <div className='container'>
        <ul className='breadcrumb'>
          <li>
            <Link to='/home'>Trang chủ</Link>
          </li>
          <li>
            <Link to='/dvc-cong-dan'>Giới thiệu</Link>
          </li>
        </ul>
        <h1 className='main-title -none'>Giới thiệu về Cổng Dịch vụ công Quốc gia</h1>
        <div className='article'>
          <p>
            <img src='/images/gioi-thieu-slider.png' alt='' />
          </p>
          <p>
            Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng Dịch vụ công
            Quốc gia kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ thực hiện,
            giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công trực tuyến và tiếp nhận, xử lý phản ánh,
            kiến nghị của cá nhân, tổ chức trên toàn quốc.
          </p>
          <p>
            Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa chỉ duy nhất
            <a href='https://www.dichvucong.gov.vn'> www.dichvucong.gov.vn</a>
          </p>
          <div className='list-intro-info'>
            <div className='item'>
              <div className='icon'>
                <img src='/images/timkiem.svg' alt='' />
                <p>
                  Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương tại Cơ sở dữ liệu quốc gia về thủ
                  tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải quyết thủ tục hành chính, dịch vụ công;
                </p>
              </div>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src='/images/denghi.svg' alt='' />
              </div>
              <p>
                Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua{' '}
                <strong>
                  <i>Tổng đài điện thoại 18001096</i> hoặc trực tuyến tại mục Hỗ trợ;{' '}
                </strong>
              </p>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src='/images/denghi.svg' alt='' />
              </div>
              <p>
                Theo dõi toàn bộ quá trình giải quyết thủ tục hành chính và xử lý phản ánh kiến nghị của mình bằng cách
                cung cấp mã hồ sơ, kể cả mã hồ sơ thủ tục hành chính không thực hiện qua Cổng Dịch vụ công Quốc gia,
                Cổng Dịch vụ công của Bộ, ngành, địa phương;
              </p>
            </div>

            <div className='item'>
              <div className='icon'>
                <img src='/images/truyvan.svg' alt='' />
              </div>
              <p>
                Được hỗ trợ truy vấn thông tin của cá nhân, tổ chức lưu trữ tại các Cơ sở dữ liệu, Hệ thống thông tin đã
                tích hợp với Cổng Dịch vụ công Quốc gia như đăng ký kinh doanh, thuế, bảo hiểm,…;
              </p>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src='/images/thuchien.svg' alt='' />
              </div>
              <p>
                Thực hiện thủ tục hành chính tại nhiều tỉnh, thành phố chỉ cần khai báo <strong>1</strong> lần trên Cổng
                Dịch vụ công Quốc gia;
              </p>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src='/images/payment.svg' alt='' />
              </div>
              <p>
                Sử dụng tài khoản của các ngân hàng, trung gian thanh toán để thanh toán trực tuyến phí, lệ phí thực
                hiện thủ tục hành chính; dịch vụ công;
              </p>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src='/images/danhgia.svg' alt='' />
              </div>
              <p>Đánh giá sự hài lòng trong giải quyết thủ tục hành chính;</p>
            </div>
          </div>
        </div>

        <div className='box-about-slogan'>
          <div className='content'>
            <p>
              Các Bộ, ngành, địa phương nỗ lực cùng với sự tham gia tích cực của người dân và doanh nghiệp trong vận
              hành Cổng Dịch vụ công Quốc gia là góp phần xây dựng Chính phủ liêm chính, hành động, phát triển, phục vụ
              Nhân Dân
            </p>
            <p className='main'>
              Hãy truy cập{' '}
              <a href='https://www.dichvucong.gov.vn' className='link'>
                www.dichvucong.gov.vn !
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className='container'>
    //   <div className='col-md-4'>
    //     <img src='images/HOLW.jpg' alt='' width='100%' />
    //   </div>
    //   <div className='col-md-1' />
    //   <div className='col-md-7'>
    //     <h1>GIỚI THIỆU </h1>
    //     <div className='row'>
    //       <div className='col-md-5'>
    //         <div className='khoi'>
    //           <h2>Mục Tiêu Của Chúng Tôi</h2>
    //           <div className='col-md-1' />
    //           <div className='col-md-2' />
    //           <p>
    //             Chúng tôi muốn mang lại sự tiện dụng nhất cho những người dân có nhu cầu làm các loại giấy tờ dịch vụ
    //             công. Bạn sẽ dễ dàng hoàn tất hồ sơ mà không cần thiết phải đi đến các cơ quan liên quan để làm giấy tờ.
    //             Đồng thời chúng tôi muốn giảm tối đa lượng công việc của một cán bộ. Đặc biệt trong giai đoạn dịch bệnh
    //             chúng tối muốn mọi người hạn chế tiếp xúc nhiều nhất có thể và trang web này được coi như là một giải
    //             pháp của chúng tôi.
    //           </p>
    //         </div>
    //         <div className='khoi'>
    //           <h2>Mục Tiêu Hướng Đến Trong Tương Lai</h2>
    //           <p>
    //             Chúng tôi hướng đến việc có được mạng lưới rộng lớn để tất cả người dân trên các tỉnh thành có thể dễ
    //             dàng thực hiện công việc dịch vụ công. Điều này mang đến dự tiện lợi,tiết kiệm thời gian,công sức. Chúng
    //             tôi muốn hiện đại hóa hệ thống dịch vụ công một cách triệt để nhằm hạn chế tối đa nạn tham ô của trong
    //             bộ máy nhà nước{' '}
    //           </p>
    //         </div>
    //       </div>
    //       <div className='col-md-3'>
    //         <div className='khoinho'>
    //           <h6 />
    //           <p>
    //             <i className='fas fa-search-plus' /> Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương
    //             tại Cơ sở dữ liệu quốc gia về thủ tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải quyết
    //             thủ tục hành chính, dịch vụ công;
    //           </p>
    //         </div>
    //         <div className='khoinho'>
    //           <h6 />
    //           <p>
    //             <i className='fas fa-phone' /> Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua Tổng đài
    //             điện thoại 1900-123-123 hoặc trực tuyến tại mục Hỗ trợ;
    //           </p>
    //         </div>
    //         <div className='khoinho'>
    //           <h6>GIỜ LÀM VIỆC</h6>
    //           <p>
    //             <i className='fas fa-clock' /> T2-T6 7H30 AM - 17H00 PM
    //           </p>
    //         </div>
    //       </div>
    //       <div className='col-md-3'>
    //         <div className='khoinho'>
    //           <h6>LIÊN HỆ</h6>
    //           <p>
    //             <i className='fas fa-phone' /> 1900-123-123
    //           </p>
    //         </div>
    //         <div className='khoinho'>
    //           <h6> ĐỊA CHỈ</h6>
    //           <p>
    //             <i className='fas fa-map-marker-alt' /> 123, Nguyễn Văn Linh, Hải Châu, Đà Nẵng
    //           </p>
    //         </div>
    //         <div className='khoinho'>
    //           <h6>GIỜ LÀM VIỆC</h6>
    //           <p>
    //             <i className='fas fa-clock' /> T2-T6 7H30 AM - 17H00 PM
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default AboutPage
