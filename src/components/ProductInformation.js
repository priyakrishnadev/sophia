import React from 'react';
import FileInput from './FileInput';
import {connect} from 'react-redux';
import ModelForm from './ModelForm';
import FilterProduct from './FilterProduct';
import {getProductInfo} from '../actions/productActions';
class ProductInformation extends React.Component{
render(){
  return(
    <div className="row mx-0">
         <div className="container-fluid productInfoForm bg-darkGrey">
              <FilterProduct />
              <ModelForm initialValues={this.props.initialValues}
               />
         </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      initialValues:state.products.productsInfo
  };
}

export default connect(mapStateToProps,null)(ProductInformation);
