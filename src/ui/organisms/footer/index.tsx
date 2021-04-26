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
              Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the upcoming programmers with the code.
              Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will
              help programmers build up concepts in different programming languages that include C, C++, Java, HTML,
              CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
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
              <a href=''>Nguyễn Tiến Đỉnh</a>
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
              <Link to='/faq'>ĐIỀU KHOẢN SỬ DỤNG</Link>
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
      <Grid container spacing={0} className='row-contact'>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <div className='add'>Cơ quan chủ quản: Văn phòng Chính phủ</div>
        </Grid>
        <Grid item xs={2}>
          <div className='add'>www.dichvucong.gov.vn</div>
        </Grid>
        <Grid item xs={2}>
          <div className='add'>Tổng đài hỗ trợ: 0339382945</div>
        </Grid>
        <Grid item xs={3}>
          <address style={{ color: 'white' }} className='add'>
            Email: <a href='mailto:duytrann.dev@gmail.com'>duytrann.dev@gmail.com</a>
          </address>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  )
}

export default Footer
