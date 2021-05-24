/* eslint-disable no-restricted-globals */
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

  const handleOnConfirm = () => {
    var message = confirm(`Bạn có chắc chắn muốn chuyển hướng trang quản lý?`)
    if (message === true) {
      window.location.href = 'https://manage-service-cms.herokuapp.com'
    }
  }

  return (
    <div ref={myRef} className='menu'>
      <div className='navbar'>
        <div style={{ marginTop: '-5px' }}>
          <Link to='' className='vienlogo'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emblem_of_the_Socialist_Republic_of_Vietnam.svg/800px-Emblem_of_the_Socialist_Republic_of_Vietnam.svg.png'
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
        <button className='nutlogin' onClick={handleOnConfirm}>
          đăng nhập
        </button>
      </div>
    </div>
  )
}

// export default HeaderComponent
