// var initialProductState={
//   products:[],
//   errors:null,
//   productsInfo:[],
//   suggestions:[],
//   rating:false
// }
const productReducer = (state=[],action={}) =>{
    switch (action.type) {
             case 'LOAD_PRODUCT':
             return {
               ...state,
               products: action.data
             };

             case 'LOAD_PRODUCT_INFO':
             action.data.forEach(function(val){val.voteStatus=false;})
             return{
               ...state,
               productsInfo:action.data
             }

             case 'EDIT_PRODUCT_INFO':
             return{
               ...state,
               productsInfo:action.data
             }

             case 'LOAD_PRODUCT_SUGGESTIONS':
             return{
               ...state,
               suggestions:action.data
             }

             case 'TOGGLE_PRODUCT_VOTE':
                let productlikes=state.productsInfo.map(vote =>(vote.id === action.id)
               ? {...vote, voteStatus: !vote.voteStatus,modellikes:action.data}
               : vote)
               return {
                 ...state,
                 productsInfo:productlikes
               };

             case 'VIEWS_COUNT':
                let viewcount=state.productsInfo.map(view =>(view.id === action.id)
               ? {...view, modelviews:action.data}
               : view)
               return {
                 ...state,
                 productsInfo:viewcount
               };

             case 'SET_RATING':return {
               ...state,
               rating:true
             }

            case 'NOT_FOUND':return {
              ...state,
              error:404
            }
             // case 'PRODUCT_UPLOAD_SUCCESS':
             // return{
             //   ...state,
             //   productsInfo:action.data,
             //   loading:
             // }
      default:
        return state;
    }
}

export default productReducer
