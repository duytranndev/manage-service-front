import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from '../../../share/routing'
import Footer from '../../organisms/footer'
import HeaderComponent from '../../organisms/header'
import SearchComponent from '../../organisms/section-search'

export default function AppLayout() {
  return (
    <BrowserRouter>
      <div className='page-header'>
        <HeaderComponent />
      </div>
      <div className='page-banner'>
        <SearchComponent />
      </div>
      <div className='page-content'>
        <AppRouting />
      </div>
      <div className='page-footer'>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
