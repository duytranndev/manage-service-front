import { useParams } from 'react-router'

const DetailEventUnit = (): JSX.Element => {
  const { slug } = useParams<any>()
  return (
    <div>
      <h3>slug: {slug}</h3>
    </div>
  )
}
export default DetailEventUnit
