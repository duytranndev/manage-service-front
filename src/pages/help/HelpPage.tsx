import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './index.scss'

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
                {/* <div className='item'>
                  <div className='number'>02</div>
                  <div className='text'>Chọn cơ quan thực hiện</div>
                </div> */}

                <div className='item'>
                  <div className='number'>03</div>
                  <div className='text'>Đăng ký, đăng nhập tài khoản công dân, doanh nghiệp</div>
                </div>
                <div className='item'>
                  <div className='number'>04</div>
                  <div className='text'>Nộp hồ sơ, tra cứu, theo dõi tình trạng hồ sơ</div>
                </div>
              </div>
              <div className='divider-gray'></div>
              <div className='help-article'>
                <div className='help-steps-content'>
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
                            <p>
                              Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:
                            </p>
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
                            poster='/images/posters/1.png'
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
                              <span className='number'>02</span>
                            </div>
                            <span className='text'>Chọn cơ quan thực hiện</span>
                          </div>
                          <div className='description'>
                            <p>
                              Căn cứ vào “Cơ quan thực hiện” trong thông tin thủ tục hành chính, người dân, doanh nghiệp
                              chọn cơ quan thực hiện tương ứng của thủ tục cần thực hiện
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <div className='help-img'>
                          <video
                            id='player1'
                            style={{ maxWidth: '100%' }}
                            poster='/images/posters/2.png'
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
                              <span className='number'>03</span>
                            </div>
                            <span className='text'>Đăng ký, đăng nhập tài khoản công dân, doanh nghiệp</span>
                          </div>
                          <div className='description'>
                            <p>
                              Người dân, doanh nghiệp có thể đăng ký tài khoản bằng: Sim ký số; USB ký số; Thuê bao di
                              động (Dành cho Công dân); Mã số BHXH (Dành cho Công dân)
                            </p>
                            <p>
                              Sau khi đăng ký tài khoản, Người dân, doanh nghiệp đăng nhập bằng 1 trong các cách sau:
                              Sim ký số; USB ký số; CMT/CCCD.
                            </p>
                            <a href='/general/HDSD dang ky tai khoan.docx'>
                              <span className='-ap icon-paper-clip icon'></span> Xem tệp đính kèm
                            </a>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <div className='help-img'>
                          <video
                            id='player1'
                            style={{ maxWidth: '100%' }}
                            poster='/images/posters/3.png'
                            playsInline
                            controls
                            preload='none'
                            webkit-playsinline=''>
                            <source src='https://dichvucong.gov.vn/general/3.mp4' />
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
                              <span className='number'>04</span>
                            </div>
                            <span className='text'>Nộp hồ sơ, tra cứu, theo dõi tình trạng hồ sơ</span>
                          </div>
                          <div className='description'>
                            Sau khi Người dân, doanh nghiệp đăng nhập thành công, Cổng Dịch vụ công Quốc gia sẽ điều
                            hướng về Cổng của Bộ/Ngành/Địa phương nơi mà người dân, doanh nghiệp đăng ký thực hiện thủ
                            tục để nộp hồ sơ.<p></p>
                            <p>
                              Người dân, doanh nghiệp tra cứu tình trạng hồ sơ theo mã số hồ sơ được cấp trên Cổng Dịch
                              vụ công Quốc gia, để theo dõi chi tiết tiến trình xử lý, quản lý dữ liệu đầu vào, đầu ra
                              của hồ sơ thì người dân thực hiện đăng nhập để xem chi tiết.
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={7}>
                        <div className='help-img'>
                          <video
                            id='player1'
                            style={{ maxWidth: '100%' }}
                            poster='/images/posters/4.png'
                            preload='none'
                            controls={true}
                            webkit-playsinline=''>
                            <source src='https://dichvucong.gov.vn/general/4.mp4' />
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
    </div>
  )
}
export default HowToUse
