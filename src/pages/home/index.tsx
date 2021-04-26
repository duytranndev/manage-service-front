import { lazy, Suspense, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FieldInterface } from '../../share/interface/field.interface'
import { UnitInterface } from '../../share/interface/unit.interface'
import { fetchFields } from '../../store/reducers/field.reducer'
import { fetchUnits } from '../../store/reducers/unit.reducer'
import { AppState } from '../../store/types'
import Banner from '../../ui/organisms/banner'
import './index.scss'

const GroupContent = lazy(() => import('../../ui/organisms/content-home/index'))

const HomePage = (): JSX.Element => {
  const fields = useSelector<AppState, FieldInterface[]>((state) => state.field.data)
  const units = useSelector<AppState, UnitInterface[]>((state) => state.unit.data)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadUnit = async () => {
      await dispatch(fetchUnits())
    }
    loadUnit()
  }, [])

  useEffect(() => {
    const loadField = async () => {
      await dispatch(fetchFields())
    }
    loadField()
  }, [])

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
        <div className='container'></div>
      </div>
      <div className='container container-content'>
        <Suspense fallback={<div>Loading...</div>}>{data.length > 0 && <GroupContent data={data} />}</Suspense>
      </div>
    </>
  )
}

export default HomePage
