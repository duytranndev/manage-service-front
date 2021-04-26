import { UNIT_URL } from '../../share/common/api.constants'
import { moduleApi } from '../../share/handle/api.module'
import { UnitInterface } from '../../share/interface/unit.interface'
import {
  CREATE_UNIT,
  DELETE_UNIT,
  FETCH_UNIT_ERROR,
  FETCH_UNIT_PENDING,
  FETCH_UNIT_SUCCESS
} from '../actions/unit.action'
import { UnitState } from '../types'

const initialState = {
  data: [],
  pending: false
}
export const UnitReducer = (state = initialState, action: any): UnitState => {
  switch (action.type) {
    case FETCH_UNIT_PENDING:
      return {
        ...state,
        pending: true
      }

    case FETCH_UNIT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    case FETCH_UNIT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CREATE_UNIT:
      let list = [...state.data] as UnitInterface[]
      list.push(action.payload)
      return { ...state, data: list }
    case DELETE_UNIT:
      const units = [...state.data].filter((item: UnitInterface) => item._id !== action.id)
      return { ...state, data: units }
    default:
      return state
  }
}

export const fetchUnits = () => {
  return (dispatch: (arg0: { type: string; payload?: any; error?: any }) => void) => {
    dispatch({
      type: FETCH_UNIT_PENDING
    })
    moduleApi
      .get(UNIT_URL)
      .then((res) =>
        dispatch({
          type: FETCH_UNIT_SUCCESS,
          payload: res.data.data
        })
      )
      .catch((error) => {
        dispatch({
          type: FETCH_UNIT_ERROR,
          error: error
        })
      })
  }
}
