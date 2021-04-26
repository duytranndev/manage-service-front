const AboutPage = (): JSX.Element => {
  return (
    <div className='container'>
      <div className='col-md-4'>
        <img src='images/HOLW.jpg' alt='' width='100%' />
      </div>
      <div className='col-md-1' />
      <div className='col-md-7'>
        <h1>GIỚI THIỆU </h1>
        <div className='row'>
          <div className='col-md-5'>
            <div className='khoi'>
              <h2>Mục Tiêu Của Chúng Tôi</h2>
              <div className='col-md-1' />
              <div className='col-md-2' />
              <p>
                Chúng tôi muốn mang lại sự tiện dụng nhất cho những người dân có nhu cầu làm các loại giấy tờ dịch vụ
                công. Bạn sẽ dễ dàng hoàn tất hồ sơ mà không cần thiết phải đi đến các cơ quan liên quan để làm giấy tờ.
                Đồng thời chúng tôi muốn giảm tối đa lượng công việc của một cán bộ. Đặc biệt trong giai đoạn dịch bệnh
                chúng tối muốn mọi người hạn chế tiếp xúc nhiều nhất có thể và trang web này được coi như là một giải
                pháp của chúng tôi.
              </p>
            </div>
            <div className='khoi'>
              <h2>Mục Tiêu Hướng Đến Trong Tương Lai</h2>
              <p>
                Chúng tôi hướng đến việc có được mạng lưới rộng lớn để tất cả người dân trên các tỉnh thành có thể dễ
                dàng thực hiện công việc dịch vụ công. Điều này mang đến dự tiện lợi,tiết kiệm thời gian,công sức. Chúng
                tôi muốn hiện đại hóa hệ thống dịch vụ công một cách triệt để nhằm hạn chế tối đa nạn tham ô của trong
                bộ máy nhà nước{' '}
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='khoinho'>
              <h6 />
              <p>
                <i className='fas fa-search-plus' /> Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương
                tại Cơ sở dữ liệu quốc gia về thủ tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải quyết
                thủ tục hành chính, dịch vụ công;
              </p>
            </div>
            <div className='khoinho'>
              <h6 />
              <p>
                <i className='fas fa-phone' /> Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua Tổng đài
                điện thoại 1900-123-123 hoặc trực tuyến tại mục Hỗ trợ;
              </p>
            </div>
            <div className='khoinho'>
              <h6>GIỜ LÀM VIỆC</h6>
              <p>
                <i className='fas fa-clock' /> T2-T6 7H30 AM - 17H00 PM
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='khoinho'>
              <h6>LIÊN HỆ</h6>
              <p>
                <i className='fas fa-phone' /> 1900-123-123
              </p>
            </div>
            <div className='khoinho'>
              <h6> ĐỊA CHỈ</h6>
              <p>
                <i className='fas fa-map-marker-alt' /> 123, Nguyễn Văn Linh, Hải Châu, Đà Nẵng
              </p>
            </div>
            <div className='khoinho'>
              <h6>GIỜ LÀM VIỆC</h6>
              <p>
                <i className='fas fa-clock' /> T2-T6 7H30 AM - 17H00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
