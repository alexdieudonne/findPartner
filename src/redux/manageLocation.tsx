// import the dependency
import remove from 'lodash.remove'

export const ADD_LOCATION = 'ADD_LOCATION'
export const DELETE_LOCATION = 'DELETE_LOCATION'
// reducer

const initialState = []

function notesReducer(state = initialState, action:any) {
  switch (action.type) {
    case ADD_LOCATION:
      return [
       
        {
          id: action.id,
          note: action.note
        }
      ]

    case DELETE_LOCATION:
      const deletedNewArray = remove(state, (obj:any) => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default notesReducer


let noteID = 0

export function addLocation(note: any) {
  return {
    type: ADD_LOCATION,
    id: noteID,
    note
  }
}

export function deleteLocation(id: number) {
  return {
    type: DELETE_LOCATION,
    payload: id
  }
}