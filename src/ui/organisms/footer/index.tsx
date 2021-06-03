import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './index.scss'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className='container-fluid container-footer'>
        <Grid container spacing={0} className='row-title'>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <div className='add'>ABOUT</div>
          </Grid>
          <Grid item xs={2} style={{ marginLeft: 20 }}>
            <div className='add'>MEMBER</div>
          </Grid>
          <Grid item xs={2}>
            <div className='add'>QUICK LINKS</div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={0} className='row-about'>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <div className='add'>
              Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa chỉ duy nhất www.dichvucong.gov.vn.
              <br />
              Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng Dịch vụ công
              Quốc gia kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ thực hiện,
              giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công trực tuyến và tiếp nhận, xử lý phản
              ánh, kiến nghị của cá nhân, tổ chức trên toàn quốc.
              <br />
              Chúng tôi luôn cố gắng mang đến những điều tốt đẹp nhất cho tất cả mọi người!
            </div>
          </Grid>
          <Grid item xs={2} className='member'>
            <div className='add'>
              <a href='https://www.facebook.com/ngocduy.tran.2310/'>Trần Ngọc Duy</a>
            </div>
            <div className='add'>
              <a href=''>Nguyễn Văn Thịnh</a>
            </div>
            <div className='add'>
              <a href=''>Nguyễn Trần Quốc Huy</a>
            </div>
            <div className='add'>
              <a href=''>Ngô Thanh Tú</a>
            </div>
            <div className='add'>
              <a href=''>Mai Văn Tiến Đỉnh</a>
            </div>
          </Grid>
          <Grid item xs={2} className='url'>
            <div className='add'>
              <Link to='/home'>TRANG CHỦ</Link>
            </div>
            <div className='add'>
              <Link to='/about'>GIỚI THIỆU</Link>
            </div>
            <div className='add'>
              <Link to='/terms'>ĐIỀU KHOẢN SỬ DỤNG</Link>
            </div>
            <div className='add'>
              <Link to='news'>TIN TỨC</Link>
            </div>
            <div className='add'>
              <Link to='/how-to-use'>HƯỚNG DẪN SỬ DỤNG</Link>
            </div>
            <div className='add'>
              <Link to='/contact'>LIÊN HỆ</Link>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
      <Grid container spacing={0} className='row-contact' style={{ height: '30px' }}></Grid>
    </>
  )
}

export default Footer
