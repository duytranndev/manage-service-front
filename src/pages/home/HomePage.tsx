import React, { useMemo } from 'react'
import LazyLoad from 'react-lazyload'
import { useDispatch, useSelector } from 'react-redux'
import { FieldInterface } from '../../share/interface/field.interface'
import { UnitInterface } from '../../share/interface/unit.interface'
import { AppState } from '../../store/types'
import Banner from '../../ui/organisms/banner'
import GroupContent from '../../ui/organisms/content-home'
import './index.scss'

// const GroupContent = React.lazy(() => import('../../ui/organisms/content-home/index'))

const HomePage = (): JSX.Element => {
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const dispatch = useDispatch()

  const convertCategoryField = (FieldArr: FieldInterface[], UnitArr: UnitInterface[]) => {
    return FieldArr.map((field) => {
      const subMenu = UnitArr.filter((unit) => unit.fieldId === field._id)
      return { ...field, subMenu: subMenu }
    })
  }

  const data = useMemo(() => convertCategoryField(fields, units), [fields, units])

  return (
    <>
      <Banner />
      <div className='hot-news'>
        <div className='container'>
          <div className='owl-carousel owl-theme'>
            <div className='item'>
              <h4>1</h4>
            </div>
            <div className='item'>
              <h4>2</h4>
            </div>
            <div className='item'>
              <h4>3</h4>
            </div>
            <div className='item'>
              <h4>4</h4>
            </div>
            <div className='item'>
              <h4>5</h4>
            </div>
            <div className='item'>
              <h4>6</h4>
            </div>
            <div className='item'>
              <h4>7</h4>
            </div>
            <div className='item'>
              <h4>8</h4>
            </div>
            <div className='item'>
              <h4>9</h4>
            </div>
            <div className='item'>
              <h4>10</h4>
            </div>
            <div className='item'>
              <h4>11</h4>
            </div>
            <div className='item'>
              <h4>12</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='container container-content'>
        <LazyLoad height={200} throttle={100} scroll once>
          <GroupContent data={data} />
        </LazyLoad>
      </div>
    </>
  )
}

export default HomePage
