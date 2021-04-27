import { Link } from 'react-router-dom'

type BlockUnitProps = {
  fieldSlug: string | undefined
  unitSlug: string | undefined
  name: string | undefined
  description: string | undefined
  logo: string
}

const BlockUnit = ({ fieldSlug, unitSlug, name, description, logo }: BlockUnitProps): JSX.Element => {
  return (
    <div className='item'>
      <Link to={`${fieldSlug}/${unitSlug}`} className='wrap'>
        <div className='head'>
          <span className='icon'>
            <img style={{ maxWidth: '100%', height: 'auto' }} src={logo} />
          </span>
          <span className='text'>{name}</span>
        </div>
        <div className='desc'>{description}</div>
      </Link>
    </div>
  )
}
export default BlockUnit
