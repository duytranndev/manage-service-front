import { Button } from 'antd'
import Form from 'antd/lib/form/Form'
import { useState } from 'react'
import Image from '../../ui/atom/image'
import './index.scss'

const ContactPage = (): JSX.Element => {
  const [formContact, setFormContact] = useState({
    name: '',
    email: '',
    subject: ''
  })

  const handleOnChange = (e: any) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = () => {
    console.log('object')
  }

  console.log('formContact :>> ', formContact)
  return (
    <>
      <div className='my-team'>
        <div className='about-section'>
          <h1>Sứ mệnh</h1>
          <p>Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa chỉ duy nhất www.dichvucong.gov.vn</p>
          <p>
            Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng Dịch vụ công
            Quốc gia kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ thực hiện,
            giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công trực tuyến và tiếp nhận, xử lý phản ánh,
            kiến nghị của cá nhân, tổ chức trên toàn quốc.
          </p>
          <p>Chúng tôi luôn cố gắng mang đến những điều tốt đẹp nhất cho tất cả mọi người!</p>
        </div>
        <h2 style={{ textAlign: 'center', marginTop: '15px' }}>My Team</h2>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <div className='image'>
                <Image src='/images/team/duyne.jpg' alt='Duy' />
              </div>
              <div className='container'>
                <h2>Ngọc Duy</h2>
                <p className='title'>Project Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>duytrann.dev@gmail.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='image'>
                <Image src='/images/team/hienxinh.jpg' alt='Jane' />
              </div>
              <div className='container'>
                <h2>Hiền Nguyễn</h2>
                <p className='title'>CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='card'>
              <div className='image'>
                <Image src='/images/team/duynee.jpg' alt='John' />
              </div>
              <div className='container'>
                <h2>Ngọc Duy</h2>
                <p className='title'>Scrum Master</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='image'>
                <Image src='/images/posters/1.png' alt='John' />
              </div>
              <div className='container'>
                <h2>Quốc Huy</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='image'>
                <Image src='/images/posters/1.png' alt='John' />
              </div>
              <div className='container'>
                <h2>TIến Đỉnh</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container contact'>
        <div className='row'>
          <Image src='/images/posters/map.png' style={{ width: '100%' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Liên hệ với chúng tôi</h2>
        </div>
        <div className='row'>
          <div className='column'>
            <Image
              src='https://econtract.fpt.com.vn/wp-content/themes/Newspaper/fptecontract/img/slides/banner2.png'
              style={{ width: '100%' }}
            />
          </div>
          <div className='column'>
            <Form onSubmitCapture={handleOnSubmit} style={{ width: '100%' }}>
              <label>Your Name</label>
              <input
                type='text'
                name='name'
                onChange={handleOnChange}
                value={formContact.name}
                placeholder='Your name..'
              />
              <label>Your Email</label>
              <input
                type='text'
                name='email'
                onChange={handleOnChange}
                value={formContact.email}
                placeholder='Your Email..'
              />
              <label htmlFor='subject'>Subject</label>
              <textarea
                id='subject'
                name='subject'
                onChange={(e) => handleOnChange(e)}
                placeholder='Write something..'
                style={{ height: '170px' }}
                value={formContact.subject}
              />
              <Button
                style={{ textAlign: 'center', width: '20%', marginLeft: '40%' }}
                type='primary'
                htmlType='submit'
                defaultValue='Submit'>
                Nộp
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactPage
