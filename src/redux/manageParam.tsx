// import the dependency
import remove from 'lodash.remove'

export const ADD_PARAMS = 'ADD_PARAMS'
export const DELETE_PARAMS = 'DELETE_PARAMS'
// reducer

const initialState = []

function stateReducer(state = initialState, action:any) {
  switch (action.type) {
    case ADD_PARAMS:
      return [
       
        {
          id: action.id,
          note: action.note
        }
      ]

    case DELETE_PARAMS:
      const deletedNewArray = remove(state, (obj:any) => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default stateReducer


let parmID = 0

export function addParams(note: any) {
  return {
    type: ADD_PARAMS,
    id: parmID++,
    note
  }
}

export function deleteParams(id: number) {
  return {
    type: DELETE_PARAMS,
    payload: id
  }
}