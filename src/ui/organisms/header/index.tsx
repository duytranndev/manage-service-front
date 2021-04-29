import React, { createRef, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header'
import './index.scss'

export default function HeaderComponent(): JSX.Element {
  const myRef = createRef<HTMLDivElement>()
  const prevScrollY = useRef(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY
  //     const menu = document.querySelector('.menu') as HTMLDivElement
  //     if (prevScrollY.current > 100) {
  //       menu.classList.add('fixed')
  //     }
  //     if (prevScrollY.current < 100) {
  //       menu.classList.remove('fixed')
  //     }
  //     prevScrollY.current = currentScrollY
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

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
            <NavLink to='/home' activeClassName='active'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>
              GIỚI THIỆU
            </NavLink>
          </li>
          <li>
            <NavLink to='/faq' activeClassName='active'>
              ĐIỀU KHOẢN SỬ DỤNG
            </NavLink>
          </li>
          <li>
            <NavLink to='/news' activeClassName='active'>
              TIN TỨC
            </NavLink>
          </li>
          <li>
            <NavLink to='/how-to-use' activeClassName='active'>
              HƯỚNG DẪN SỬ DỤNG
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              Liên hệ
            </NavLink>
          </li>
        </ul>
        <button className='nutlogin'>DANG NHAP</button>
      </div>
    </div>
  )
}

// export default HeaderComponent
