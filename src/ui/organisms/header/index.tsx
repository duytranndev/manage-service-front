import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent(): JSX.Element {
  return (
    <div className='menu'>
      <div className='navbar'>
        <div>
          <Link to='' className='vienlogo'>
            <img
              src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png'
              style={{ width: '100%', height: '100%' }}
              alt=''
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>GIỚI THIỆU</Link>
          </li>
          <li>
            <Link to='/faq'>ĐIỀU KHOẢN SỬ DỤNG</Link>
          </li>
          <li>
            <a href='#'>TIN TỨC</a>
          </li>
          <li>
            <a href='#'>HƯỚNG DẪN SỬ DỤNG</a>
          </li>
          <li>
            <a href='#'>Liên hệ</a>
          </li>
        </ul>
        <button className='nutlogin'>DANG NHAP</button>
      </div>
    </div>
  )
}

// export default HeaderComponent
