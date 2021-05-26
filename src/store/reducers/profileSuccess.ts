const initialState = {
  profile: {}
}

export const ProfileSuccessReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload }
    default:
      return { ...state }
  }
}
