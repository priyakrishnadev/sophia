import SET_LIKE from '../actions/commentActions';
// const initialState = {
//   enabled: false
// }
const commentsHits = (state=[],action={}) =>{
  switch (action.type) {
          case 'SET_LIKE': return (action.enabled === false)
          ? [{...state,
             id:action.id,
             enabled: !action.enabled,
             payload:action.payload+1,
           }]
          : [{...state,
             id:action.id,
             enabled: !action.enabled,
             payload:action.payload-1,
           }]


    default:
      return state;
  }
}

export default commentsHits
