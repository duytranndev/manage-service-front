import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Logos } from '../../share/common/app.constants'
import { FieldInterface } from '../../share/interface/field.interface'
import { UnitInterface } from '../../share/interface/unit.interface'
import { AppState } from '../../store/types'
import Image from '../../ui/atom/image'
import './index.scss'

const DetailField = (): JSX.Element => {
  const { slug } = useParams<any>()
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  let units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)

  const field = fields.find((item) => item.slug === slug)

  units = units.filter((unit) => unit.fieldId === field?._id)

  return (
    <>
      <div className='container cong-dan'>
        <ul className='breadcrumb'>
          <li>
            <Link to='/home'>Trang chủ</Link>
          </li>
          <li>
            <Link to='#'>Dành cho {field?.name}</Link>
          </li>
        </ul>
        <div className='main-title'>Thông tin và dịch vụ dành cho {field?.name}</div>

        <div className='cong-dan-list'>
          {units.length === 0 && (
            <div style={{ marginLeft: '20px', fontSize: '110%' }}>
              Hiện tại hệ thống chưa hỗ trợ xử lý dịch vụ công về lĩnh vực Doanh Nghiệp
            </div>
          )}
          {units.map((item, index) => {
            return (
              <LazyLoad height={200} offset={[-100, 0]} key={item._id} scroll={true}>
                <div className='item'>
                  <Link to={`${field?.slug}/${item.slug}`} className='wrap'>
                    <div className='head'>
                      <span className='icon'>
                        <Image
                          style={{ maxWidth: '100%', height: 'auto' }}
                          src={Logos.find((x) => x.id === item.slug)?.path}
                        />
                      </span>
                      <span className='text'>{item.name}</span>
                    </div>
                    <div className='desc'>{item.description}</div>
                  </Link>
                </div>

                {/* <BlockUnit
                  fieldSlug={field?.slug}
                  unitSlug={item.slug}
                  name={item.name}
                  description={item.description}
                  logo={listLogo[index]}
                /> */}
              </LazyLoad>
            )
          })}
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

export default DetailField
