import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Banner from '../../ui/organisms/banner'
import './index.scss'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Banner />
      <div className='hot-news'>
        <div className='container'></div>
      </div>
      <div className='container container-content'>
        <div className='content-title'>
          <Grid container spacing={0} className='row-title'>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} className='col-xs-6'>
              <Link to='/dvc-cong-dan'>
                <p className='section'>CÔNG DÂN</p>
              </Link>
            </Grid>

            <Grid item xs={5} className='col-xs-6'>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>DOANH NGHIỆP</p>
              </Link>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container spacing={5} className='row-content'>
            <Grid item xs={1}></Grid>

            <Grid item xs={5} className='col-xs-6'>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Có con nhỏ</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Học tập</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Việc làm</p>
              </Link>
              <Link to='/dvc-cong-dan/cu-tru-va-giay-to-thuy-than'>
                <p className='section'>Cư trú và giấy tờ tuỳ thân</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Hôn nhân và gia đình</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Điện lực, nhà ở, đất đai</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Sức khoẻ và y tế</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Phương tiện và người lái</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Hưu trí</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Người thân qua đời</p>
              </Link>
              <Link to='/dvc-cong-dan'>
                <p className='section'>Giải quyết khiếu kiện</p>
              </Link>
            </Grid>
            <Grid item xs={5} className='col-xs-6'>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Khởi sự kinh doanh</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Lao động và bảo hiểm xã hội</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Tài chính doanh nghiệp</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Điện lực, đất đai, xây dựng</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Thương mại, quảng cáo</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Sở hữu trí tuệ, đăng ký tài sản</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Thành lập chi nhánh, văn phòng đại diện</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Đấu thầu, mua sắm công</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Tái cấu trúc doanh nghiệp</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Giải quyết tranh chấp hợp đồng</p>
              </Link>
              <Link to='/dvc-doanh-nghiep'>
                <p className='section'>Tạm dừng, chấm dứt hoạt động</p>
              </Link>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default HomePage
