import { Link } from 'react-router-dom'
import './index.scss'

const DetailField = (): JSX.Element => {
  return (
    <div className='container cong-dan'>
      <ul className='breadcrumb'>
        <li>
          <Link to='/home'>Trang chủ</Link>
        </li>
        <li>
          <Link to='/dvc-cong-dan'>Dành cho công dân</Link>
        </li>
      </ul>
      <div className='main-title'>Thông tin và dịch vụ dành cho công dân</div>
      <div className='cong-dan-list'>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img style={{ maxWidth: '100%', height: 'auto' }} src='../../public/images/dihoc.svg' alt='image' />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus maxime illum quaerat
              corporis, iure deserunt ea itaque dolorem, facilis, repudiandae sequi delectus! Nesciunt laborum doloribus
              fugit ex quam reiciendis.
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
        <div className='item'>
          <a href='' className='wrap'>
            <div className='head'>
              <span className='icon'>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src='https://dichvucong.gov.vn/p/home/theme/img/congdan/khaisinh.svg'
                  alt=''
                />
              </span>
              <span className='text'>Có con nhỏ</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo nam vitae dolore nihil laboriosam
              ipsa dignissimos numquam amet nisi. Quam nisi enim iste minima ab doloribus repellat excepturi adipisci!
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DetailField
