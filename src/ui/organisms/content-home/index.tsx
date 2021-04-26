import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FieldInterface } from '../../../share/interface/field.interface'

type GroupContentProps = {
  data: FieldInterface[]
}

const listLogo = [
  '/images/khaisinh.svg',
  '/images/dihoc.svg',
  '/images/vieclam.svg',
  '/images/cutru.svg',
  '/images/honnhangiadinh.svg',
  '/images/nhao.svg',
  '/images/chamsoc-sk.svg',
  '/images/laixe.svg',
  '/images/huutri.svg',
  '/images/khaitu.svg',
  '/images/balance.svg',
  '/images/khoi-su-kd.svg',
  '/images/ldbhxh.svg',
  '/images/tcdn.svg',
  '/images/datdaixaydung.svg',
  '/images/qc.svg',
  '/images/sohuutritue.svg',
  '/images/tlcn.svg',
  '/images/dauthau.svg',
  '/images/tccdn.svg',
  '/images/balance.svg',
  '/images/tamdung.svg'
]

const GroupContent = ({ data }: GroupContentProps): JSX.Element => {
  return (
    <div className='content-title'>
      <Grid container spacing={0} className='row-title'>
        <Grid item xs={1}></Grid>
        {data.map((item, index) => {
          return (
            <Grid key={item._id} item xs={5} className='col-xs-6'>
              <Link to={`/dvc/${item.slug}`}>
                <p className='text'>{item.name}</p>
              </Link>
            </Grid>
          )
        })}
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container spacing={5} className='row-content'>
        <Grid item xs={1}></Grid>
        {data.map((field) => {
          return (
            <Grid key={field._id} item xs={5} className='col-xs-6'>
              {field.subMenu?.map((unit, index) => {
                return (
                  <Link key={unit._id} to={`/dvc/${field.slug}/${unit.slug}`}>
                    <span className='icon'>
                      <img src={listLogo[index]} alt='' />
                    </span>
                    <p className='text'>{unit.name}</p>
                  </Link>
                )
              })}
            </Grid>
          )
        })}

        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}
export default GroupContent
