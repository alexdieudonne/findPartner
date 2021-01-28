const initialState = { location:[]}

function toggleLocation(state = initialState, action:any){
    let nextState:any;
    switch(action.type){
        case 'TOGGLE_LOCATION':
            const locationIndex = state.location.findIndex((item:any) => item.id == action.value.id)
            if(locationIndex !== -1){
                nextState={
                    ...state,
                    location:state.location.filter((item, index)=> index !== locationIndex)
                }
            }else{
                nextState={
                    ...state,
                    location:[...state.location, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}
export default toggleLocation