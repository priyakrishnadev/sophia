import React from 'react';
import { Field,reduxForm } from 'redux-form';
import validate from './validate'
import {connect} from 'react-redux';
import {categoryLoad,productLoad,EditProductValues} from '../actions/productActions';

class FilterProduct extends React.Component{
  constructor(props){
    super(props);
    this.categories=this.categories.bind(this);
    this.onChangeOption=this.onChangeOption.bind(this);
    this.products=this.products.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.categoryLoad();
  }

  categories() {
    return this.props.category && this.props.category.map((category) =>
    <option key={category.id} value={category.name} className="textTransform">
    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
    </option>
  )
}

products(){
  if(this.props.products){
    if(this.props.products.product.length == 0 ){
      return <option className="textTransform text-danger">
      Sorry, Not available
      </option>
    }else{
      return this.props.products && this.props.products.product.map((product) =>
      <option key={product.id} value={product.id} className="textTransform">
      {product.modelname}
      </option>)
    }
  }
}

onChangeOption(e){
  if (e.detail === 0){
    // console.log(e.target.value);
    this.props.productLoad(e.target.value);
  }
}

onSubmit(values, buttonAction) {
    return this.props.EditProductValues(values);
}

render(){
  const { handleSubmit, productLoad, getProductInfo, pristine, reset, submitting} = this.props
  return(
          <form>
            <div className="row mx-0 my-3 pt-3 rounded text-white bgSmartView">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <h3>Product Information</h3>
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 ">
                  <div className="form-group">
                    <Field name="selectCategory" component="select"
                    className="form-control"
                    onClick={this.onChangeOption}
                    >
                      <option value="0" disabled>Select Category</option>
                      { this.categories() }
                    </Field>
                  </div>
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 ">
                  <div className="form-group">
                    <Field name="selectProduct" component="select"
                    className="form-control">
                      <option value="0" disabled>Select Product</option>
                      { this.products() }
                    </Field>
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-2 ">
                  <button type="submit"  className=" btn btn-primary btn-block" name="EditForm"
                  onClick = {handleSubmit(values =>this.onSubmit({values},'EditForm'))}
                  >
                    {/*onClick={() => getProductInfo(category,product)}*/}
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Product Info
                  </button>
                </div>
            </div>
          </form>
        );
    }
}

FilterProduct = connect(
  state => ({
    category:state.category.category,
    products:state.products.products
    }),
    {
      EditProductValues,
      categoryLoad,
      productLoad}
)(FilterProduct);

export default reduxForm({
    form: 'FilterProduct', // a unique name for this form
    validate
})(FilterProduct);
