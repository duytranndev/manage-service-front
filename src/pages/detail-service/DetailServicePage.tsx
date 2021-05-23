import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ServicePath } from '../../share/common/app.constants'
import Image from '../../ui/atom/image'
import CapGiayChuyenHoKhau from '../../ui/organisms/services/capgiaychuyenhokhau'
import CapLaiSoHoKhau from '../../ui/organisms/services/caplaiso'
import DangKyKetHon from '../../ui/organisms/services/dangkykethon'
import DangKyKhaiSinh from '../../ui/organisms/services/dangkykhaisinh'
import DangKyTamTru from '../../ui/organisms/services/dangkytamtru'
import DangKyThuongTru from '../../ui/organisms/services/dangkythuongtru'
import DieuChinhThayDoi from '../../ui/organisms/services/dieuchinhthaydoi'
import TachSoHoKhau from '../../ui/organisms/services/tacksohokhau'
import './index.scss'

const DetailService = (): JSX.Element => {
  const { slug } = useParams<any>()

  const Service = (slug: string) => {
    switch (slug) {
      case ServicePath.dangKythuongTru:
        return <DangKyThuongTru />
      case ServicePath.tachSoHoKhau:
        return <TachSoHoKhau />
      case ServicePath.capGiayChuyenHoKhau:
        return <CapGiayChuyenHoKhau />
      case ServicePath.dieuChinhNhungThayDoiTrongSoHoKhau:
        return <DieuChinhThayDoi />
      case ServicePath.capLaiSoHoKhau:
        return <CapLaiSoHoKhau />
      case ServicePath.dangKyKhaiSinh:
        return <DangKyKhaiSinh />
      case ServicePath.dangKyKetHon:
        return <DangKyKetHon />
      case ServicePath.dangKyTamTru:
        return <DangKyTamTru />
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
            <Link to='/how-to-use' className='wrap'>
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
