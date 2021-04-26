import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listLogo } from '../../share/common/app.constants'
import { FieldInterface } from '../../share/interface/field.interface'
import { UnitInterface } from '../../share/interface/unit.interface'
import { AppState } from '../../store/types'
import './index.scss'

const DetailField = (): JSX.Element => {
  const { slug } = useParams<any>()
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  let units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)

  const field = fields.find((item) => item.slug === slug)

  units = units.filter((unit) => unit.fieldId === field?._id)

  console.log('units :>> ', units)

  return (
    <>
      <div className='container cong-dan'>
        <ul className='breadcrumb'>
          <li>
            <Link to='/home'>Trang chủ</Link>
          </li>
          <li>
            <Link to='/dvc-cong-dan'>Dành cho {field?.name}</Link>
          </li>
        </ul>
        <div className='main-title'>Thông tin và dịch vụ dành cho {field?.name}</div>
        <div className='cong-dan-list'>
          {units.map((item, index) => {
            return (
              <div key={item._id} className='item'>
                <a href='' className='wrap'>
                  <div className='head'>
                    <span className='icon'>
                      <img style={{ maxWidth: '100%', height: 'auto' }} src={listLogo[index]} alt='image' />
                    </span>
                    <span className='text'>{item.name}</span>
                  </div>
                  <div className='desc'>{item.description}</div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className='section section-menu-bottom'>
        <div className='container'>
          <div className='pull-left'>
            <Link to='' className='wrap'>
              <div className='icon'>
                <img src='/images/trongdong.png' alt='' />
              </div>
              <div className='text'>Câu hỏi thường gặp</div>
            </Link>
          </div>
          <div className='pull-right'>
            <Link to='' className='wrap'>
              <div className='icon'>
                <img src='/images/trongdong.png' alt='' />
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

export default DetailField
