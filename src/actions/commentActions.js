// import { SubmissionError } from 'redux-form'
// import axios from 'axios';
// const uuidv4 = require('uuid/v4');

export const commentLike = (id,payload,enabled) => {
  return {
    type: 'SET_LIKE',
    id,
    payload,
    enabled
  };
}

export default function submit(values) {

// values.like = 0;
console.log(values);
  var like = "like";
  var newVal = 0;
  values[like] = newVal;

  // values.push(like);
    console.log(values);
  //   return dispatch=>{
  //    return axios.post('http://localhost:8000/users',values);
  // }
}
