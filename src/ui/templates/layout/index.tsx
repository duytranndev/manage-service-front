import React from 'react'
import AppRouting from '../../../share/routing'
import HeaderComponent from '../../organisms/header'

export default function AppLayout() {
  return (
    <>
      <div className='page-header'>
        {/* LỖI Ở ĐÂY => không sử dụng Component này thì không lỗi */} <HeaderComponent />
      </div>
      <div className='page-content'>
        <AppRouting />
      </div>
      <div className='page-footer'></div>
    </>
  )
}
