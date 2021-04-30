import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Image from '../../ui/atom/image'
import CapGiayChuyenHoKhau from '../../ui/organisms/services/capgiaychuyenhokhau'
import CapLaiSoHoKhau from '../../ui/organisms/services/caplaiso'
import DangKyThuongTru from '../../ui/organisms/services/dangkythuongtru'
import DieuChinhThayDoi from '../../ui/organisms/services/dieuchinhthaydoi'
import TachSoHoKhau from '../../ui/organisms/services/tacksohokhau'
import './index.scss'

const DetailService = (): JSX.Element => {
  const { slug } = useParams<any>()

  const Service = (slug: string) => {
    switch (slug) {
      case 'dang-ky-thuong-tru':
        return <DangKyThuongTru />
      case 'tach-so-ho-khau':
        return <TachSoHoKhau />
      case 'cap-giay-chuyen-ho-khau':
        return <CapGiayChuyenHoKhau />
      case 'dieu-chinh-nhung-thay-doi-trong-so-ho-khau':
        return <DieuChinhThayDoi />
      case 'cap-lai-so-ho-khau':
        return <CapLaiSoHoKhau />
      default:
        break
    }
  }

  return (
    <>
      <div className='section-detail-service'>
        <div className='container'>
          <ul className='breadcrumb'>
            <li>
              <a href='/'>Trang chủ</a>
            </li>
            <li>
              <a href='#'>Chi tiết thủ tục hành chính</a>
            </li>
          </ul>

          {Service(slug)}
        </div>
      </div>
      <div className='section section-menu-bottom'>
        <div className='container'>
          <div className='pull-left'>
            <Link to='' className='wrap'>
              <div className='icon'>
                <Image src='/images/trongdong.png' alt='' />
              </div>
              <div className='text'>Câu hỏi thường gặp</div>
            </Link>
          </div>
          <div className='pull-right'>
            <Link to='' className='wrap'>
              <div className='icon'>
                <Image src='/images/trongdong.png' alt='' />
              </div>
              <div className='text'>Hướng dẫn sử dụng</div>
            </Link>
          </div>
          <div className='clearfix'></div>
        </div>
      </div>
    </>
  )
}
export default DetailService
