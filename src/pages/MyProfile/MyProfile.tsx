import { useSelector } from 'react-redux'
import { ProfileInterface } from '../../share/interface/profile.interface'
import { AppState } from '../../store/types'

const MyProfile = () => {
  const myProfile = useSelector<AppState, ProfileInterface>((state) => state.profileSuccess.data)

  return (
    <>
      Mã hồ sơ đăng ký: {myProfile?.profileCode}
      hoof
    </>
  )
}
export default MyProfile
