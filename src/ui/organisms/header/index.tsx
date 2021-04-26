import React, { createRef, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

export default function HeaderComponent(): JSX.Element {
  const myRef = createRef<HTMLDivElement>()
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const menu = document.querySelector('.menu') as HTMLDivElement
      if (prevScrollY.current > 100) {
        menu.classList.add('fixed')
      }
      if (prevScrollY.current < 100) {
        menu.classList.remove('fixed')
      }
      prevScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={myRef} className='menu'>
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
            <NavLink to='/home'>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/about'>GIỚI THIỆU</NavLink>
          </li>
          <li>
            <NavLink to='/faq'>ĐIỀU KHOẢN SỬ DỤNG</NavLink>
          </li>
          <li>
            <a href='/news'>TIN TỨC</a>
          </li>
          <li>
            <a href='/how-to-use'>HƯỚNG DẪN SỬ DỤNG</a>
          </li>
          <li>
            <a href='/contact'>Liên hệ</a>
          </li>
        </ul>
        <button className='nutlogin'>DANG NHAP</button>
      </div>
    </div>
  )
}

// export default HeaderComponent
