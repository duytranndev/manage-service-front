import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const HowToUse = (): JSX.Element => {
  return (
    <div className='section-hotro'>
      <div className='container'>
        <ul className='breadcrumb'>
          <li>
            <Link to='/home'>Trang chủ</Link>
          </li>
          <li>
            <Link to='#'>Hướng dẫn sử dụng</Link>
          </li>
        </ul>
        <div className='cau-hoi-pho-bien'>
          <div className='row'>
            <div className='content'>
              <div className='main-title center' style={{ textAlign: 'center' }}>
                HƯỚNG DẪN SỬ DỤNG
              </div>
              <div className='help-steps'>
                <div className='item'>
                  <div className='number'>01</div>
                  <div className='text'>Tra cứu thủ tục hành chính, dịch vụ công</div>
                </div>
                <div className='item'>
                  <div className='number'>02</div>
                </div>
                <div className='item'>
                  <div className='text'>Chọn cơ quan thực hiện</div>
                </div>
                <div className='item'>
                  <div className='number'>03</div>
                  <div className='text'>Đăng ký, đăng nhập tài khoản công dân, doanh nghiệp</div>
                </div>
                <div className='item'>
                  <div className='number'>04</div>
                  <div className='text'>Nộp hồ sơ, tra cứu, theo dõi tình trạng hồ sơ</div>
                </div>
              </div>
              <div className='help-article'>
                <div className='step-item'>
                  <Grid className='row' container spacing={0}>
                    <Grid item xs={5}>
                      <div className='help-description'>
                        <div className='head'>
                          <div className='head-number'>
                            <span className='number'>01</span>
                          </div>
                          <span className='text'>Tra cứu thủ tục hành chính, dịch vụ công</span>
                        </div>
                        <div className='description'>
                          <p>Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:</p>
                          <p>-Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp</p>
                          <p>-Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp</p>
                          <p>-Chọn từ danh sách dịch vụ công trực tuyến</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div className='help-img'>
                        <video
                          id='player1'
                          style={{ maxWidth: '100%' }}
                          playsInline
                          controls
                          preload='none'
                          webkit-playsinline=''>
                          <source src='https://dichvucong.gov.vn/general/1.mp4' />
                        </video>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className='step-item'>
                  <Grid className='row' container spacing={0}>
                    <Grid item xs={5}>
                      <div className='help-description'>
                        <div className='head'>
                          <div className='head-number'>
                            <span className='number'>01</span>
                          </div>
                          <span className='text'>Tra cứu thủ tục hành chính, dịch vụ công</span>
                        </div>
                        <div className='description'>
                          <p>Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:</p>
                          <p>-Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp</p>
                          <p>-Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp</p>
                          <p>-Chọn từ danh sách dịch vụ công trực tuyến</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div className='help-img'>
                        <video
                          id='player1'
                          style={{ maxWidth: '100%' }}
                          playsInline
                          controls
                          preload='none'
                          webkit-playsinline=''>
                          <source src='https://dichvucong.gov.vn/general/1.mp4' />
                        </video>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className='step-item'>
                  <Grid className='row' container spacing={0}>
                    <Grid item xs={5}>
                      <div className='help-description'>
                        <div className='head'>
                          <div className='head-number'>
                            <span className='number'>01</span>
                          </div>
                          <span className='text'>Tra cứu thủ tục hành chính, dịch vụ công</span>
                        </div>
                        <div className='description'>
                          <p>Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:</p>
                          <p>-Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp</p>
                          <p>-Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp</p>
                          <p>-Chọn từ danh sách dịch vụ công trực tuyến</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div className='help-img'>
                        <video
                          id='player1'
                          style={{ maxWidth: '100%' }}
                          playsInline
                          controls
                          preload='none'
                          webkit-playsinline=''>
                          <source src='https://dichvucong.gov.vn/general/1.mp4' />
                        </video>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className='step-item'>
                  <Grid className='row' container spacing={0}>
                    <Grid item xs={5}>
                      <div className='help-description'>
                        <div className='head'>
                          <div className='head-number'>
                            <span className='number'>01</span>
                          </div>
                          <span className='text'>Tra cứu thủ tục hành chính, dịch vụ công</span>
                        </div>
                        <div className='description'>
                          <p>Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:</p>
                          <p>-Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp</p>
                          <p>-Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp</p>
                          <p>-Chọn từ danh sách dịch vụ công trực tuyến</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div className='help-img'>
                        <video
                          id='player1'
                          style={{ maxWidth: '100%' }}
                          playsInline
                          controls
                          preload='none'
                          webkit-playsinline=''>
                          <source src='https://dichvucong.gov.vn/general/1.mp4' />
                        </video>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HowToUse
