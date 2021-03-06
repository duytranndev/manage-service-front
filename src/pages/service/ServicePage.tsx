import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Logos } from '../../share/common/app.constants'
import { ServiceInterface } from '../../share/interface/service.interface'
import { UnitInterface } from '../../share/interface/unit.interface'
import { fetchServices } from '../../store/reducers/service.reducer'
import { AppState } from '../../store/types'
import Image from '../../ui/atom/image'
import './index.scss'

const Service = (): JSX.Element => {
  const { slug } = useParams<any>()
  const dispatch = useDispatch()
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const unit = units.find((item) => item.slug === slug)
  let services = useSelector<AppState, ServiceInterface[]>((state) => state.service.data)

  useEffect(() => {
    const loadService = async () => {
      dispatch(fetchServices())
    }
    loadService()
  }, [])
  services = services.filter((service) => service.unitId === unit?._id)

  return (
    <div className='section-service'>
      <div className='container'>
        <ul className='breadcrumb'>
          <li>
            <a href='/home'>Trang chủ</a>
          </li>
          <li>
            <a href='/dvc/cong-dan'>Dành cho công dân</a>
          </li>
        </ul>
        <div className='main-title'>
          <div className='icon'>
            <Image src={Logos.find((item) => item.id === slug)?.path} alt='' />
          </div>
          <div className='title'>{unit?.name}</div>
        </div>
        <div className='marb20'>
          Cung cấp thông tin thủ tục hành chính, dịch vụ công trực tuyến liên quan đến thường trú, tạm trú và cấp một số
          loại giấy tờ tùy thân của cá nhân.
        </div>
        <div className='box-cat-cd'>
          <ul className='list-expand'>
            {services &&
              services.map((item) => {
                return (
                  <Link to={`/dvc/chi-tiet-dich-vu/${item.slug}`} key={item._id} className='item'>
                    <div className='title'>{item.name}</div>
                  </Link>
                )
              })}
          </ul>
          <div className='divider-gray'></div>
          <div className='actions mart20 center'>
            <Link to='/home'>
              <button className='btn btn-main' style={{ maxWidth: '300px', width: '100%' }}>
                Xem tất cả thủ tục hành chính
              </button>
            </Link>
          </div>
        </div>
        {/* <div className='box-cat-cd'>
          <div className='main-title-sub'>Câu hỏi thường gặp</div>
          <ul className='list-document -question'>
            <li>
              <a href='dvc-chi-tiet-cau-hoi.html?id=19728&amp;row_limit=1'>
                Con trai tôi năm nay 12 tuổi, muốn được cấp hộ chiếu riêng thì cần phải làm thế nào?
              </a>
            </li>
            <li>
              <a href='dvc-chi-tiet-cau-hoi.html?id=19735&amp;row_limit=1'>
                Trẻ em dưới 14 tuổi khi làm thủ tục cấp hộ chiếu có cần phải trực tiếp đến cơ quan Quản lý xuất nhập
                cảnh để nộp hồ sơ hay không?
              </a>
            </li>
            <li>
              <a href='dvc-chi-tiet-cau-hoi.html?id=19732&amp;row_limit=1'>
                Hộ chiếu có được sử dụng thay thế chứng minh nhân dân không?
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}
export default Service
