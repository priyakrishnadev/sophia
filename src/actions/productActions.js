import axios from 'axios';
import ip from 'ip';
 import FormData from 'form-data';
export const handleProductValues=(values)=>{
  var featuresImagesarray=[];
  var productBlogImage;
  var featureImageLength=values.values.featureimages1.length;
  for (var i = 0; i < featureImageLength; i++) {
    getBase64(values.values.featureimages1[i]);
    // values.values.featureimages1.splice(i, 1); //to remove converted file object/element
  }
  //
  function getBase64(file) {
     var reader = new FileReader();
     reader.onload = function () {
       // values.values.featureimages1.push(reader.result);
       featuresImagesarray.push(reader.result);
     };
     reader.readAsDataURL(file);
     reader.onerror = function (error) {
       console.log('Error: ', error);
     };
  }
  function getImageBase64(file,image) {
    if(image === 'thumbnailImage'){
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
           values.values.thumbnailImage=reader.result;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
    if(image === 'blogImage'){
      var reader = new FileReader();
      reader.onload = function () {
         values.values.productBlogImage=reader.result;
      };
      reader.readAsDataURL(file);
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }
  for (var i = 0; i < featureImageLength; i++) {
      featuresImagesarray.splice(i, 1); //to remove converted file object/element
    }
    values.values.featuresImagesarray=featuresImagesarray;
  if(values.values.thumbnailimage1){
    for (var i = 0; i < values.values.thumbnailimage1.length; i++) {
      getImageBase64(values.values.thumbnailimage1[i],'thumbnailImage')
    }
  }
  if(values.values.blogimage1){
    for (var i = 0; i < values.values.blogimage1.length; i++) {
      getImageBase64(values.values.blogimage1[i],'blogImage')
    }
  }
return dispatch=>{
    setTimeout(function(){
      return axios.post('http://127.0.0.1:8000/addProduct',values)
      .then(res=>console.log(res))
    }, 20000);
  }
}

export const EditProductValues=(values)=>{
  const {values:{selectCategory,selectProduct}} = values;
  const productData={selectCategory,selectProduct}
  return dispatch=>{
    return axios.post('http://127.0.0.1:8000/editProduct',productData)
    .then(res=>dispatch({type:'EDIT_PRODUCT_INFO',data:res.data}))
    .catch(err=>dispatch({type:'FAIL_PRODUCT_INFO'}))
  }
}

export const categoryLoad = () => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/getCategory')
    .then(res=>dispatch({
      type:'LOAD_CATEGORY',
      data:res.data
      }))
  }
}

export const productLoad = (category) => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/getProduct/' + category)
    .then(res=>dispatch({
      type:'LOAD_PRODUCT',
      data:res.data
    }))
  }
}

export const getProductInfo = (category,product) => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/getModel/' + category + '/' + product)
   //  .then(res=>{return axios.post('http://127.0.0.1:8000/product/views',{
   //   params: {
   //     category: category,
   //     product: product
   //   }}
   // )})

    .then(res=>dispatch({
      type:'LOAD_PRODUCT_INFO',
      data:res.data.data
    }))
  }
}

export const getSuggestions = (category,product) => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/' + category + '/' + product + '/suggestion')
    .then(res=>dispatch({
      type:'LOAD_PRODUCT_SUGGESTIONS',
      data:res.data
    }))
  }
}

export const getCategoryInfo = (category) => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/getProduct/' + category)
    .then(res=>dispatch({
      type:'LOAD_PRODUCT',
      data:res.data
    })).catch(err=> err.response.status == '404' && dispatch(notFound()) )
  }
}

export const downVotePollModel = (id,voteStatus,like) => {
  const values={id,voteStatus,like}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/product/unlike',values)
   .then(res=>{return axios.get('http://127.0.0.1:8000/product/hits/' + id)})
    .then(res=>dispatch(productvote(id,res.data.likes)))
  }
}

export const upVotePollModel = (id,voteStatus,like) => {
  const values={id,voteStatus,like}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/product/like',values)
    .then(res=>{return axios.get('http://127.0.0.1:8000/product/hits/' + id)})
    .then(res=>dispatch(productvote(id,res.data.likes)))
 }
}

export const productvote = (id,data) => {
  return{
    type:"TOGGLE_PRODUCT_VOTE",
    id,
    data
  };
}

export const modelviewhits=(product)=>{
  const values={product}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/product/views',values)
    .then(res=>dispatch({
      type:'VIEWS_COUNT',
      data:res.data
    }))
  }
}

export const modelrating=(value,product)=>{
  const ip_address=ip.address();
  const values={value,product,ip_address}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/product/rating',values)
   .then(res=>dispatch(setrating()))
  }
}

export const setrating=()=>{
  return {
    type:'SET_RATING'
  };
}

export const notFound=()=>{
  return {
    type:'NOT_FOUND'
  }
}
