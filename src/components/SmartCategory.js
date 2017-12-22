import React from 'react';
import {connect} from 'react-redux';
import {getCategoryInfo} from '../actions/productActions';
import {Link} from 'react-router-dom';

 class SmartCategory extends React.Component{

   componentDidMount(){
     this.props.getCategoryInfo(this.props.page,this.props.pageId);
   }

   componentWillReceiveProps(nextProps){
      if(nextProps.page !== this.props.page || nextProps.pageId !== this.props.pageId){
          this.props.getCategoryInfo(nextProps.page,nextProps.pageId);
        }
   }

render(){
    return (
      <div className="container-fluid">
        <div className="row mx-0 my-3">
          {/*<h3>{this.props.page}</h3>
            <h3>{this.props.pageId}</h3>*/}
            {this.props.products && this.props.products.product.map((product,i)=>
                <div className="col-sm-3 col-md-3 col-lg-3" key={product.id}>
                  <Link to={`/SmartView/${this.props.page}/${product.modelname}`} className="routeDecorator">
                  <div className="border mb-2 p-3 rounded ">
                    <img src={`http://127.0.0.1:8000${product.thumbnailimage}`} alt="" width="100%" height="200px" />
                      <h5 className="productTitle my-2">{product.modelname}</h5>
                      <p className="productDescription text-secondary">
                        {product.modelsubtitle}
                      </p>
                      <span className="text-grey">
                      <span className="mr-2">
                      <i className="fa fa-thumbs-o-up" aria-hidden="true"> {product.modellikes}</i>
                      </span>
                      <span className="float-right">
                      <i className="fa fa-eye" aria-hidden="true"> {product.modelviews} views</i>
                      </span>
                      </span>
                  </div>
                  </Link>
                </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products:state.products.products
  }
}

export default connect(mapStateToProps,{getCategoryInfo})(SmartCategory);
