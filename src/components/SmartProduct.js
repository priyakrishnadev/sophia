import React from 'react';
import {CommentBox} from './CommentBox';
import SuggestionBox from './SuggestionBox';
// import {ProductBlog} from './ProductBlog';
import ProductBlog from './ProductBlog';
// import {FeaturesList} from './FeaturesList';
import FeaturesList from './FeaturesList';
import {ContactForm} from './ContactForm';
import WebVRSuggestion from './WebVRSuggestion';
// import {ModelFooter} from './ModelFooter';
import ModelFooter from './ModelFooter';
import WebVR from './WebVR';
import {connect} from 'react-redux';
import {getProductInfo} from '../actions/productActions';
import {getComments} from '../actions/commentActions';
// import {withRouter} from 'react-router-dom';

class SmartProduct extends React.Component{

//To execute the parent before the child
componentWillMount(){
  this.props.getProductInfo(this.props.page,this.props.pageId);
}

componentWillReceiveProps(nextProps){
   if(nextProps.page !== this.props.page || nextProps.pageId !== this.props.pageId){
       this.props.getProductInfo(nextProps.page,nextProps.pageId);
       this.props.getComments(nextProps.page,nextProps.pageId);
     }
}

render(){
  // var containerStyle={
  //   width:"100%",
  //   height:"450px"
  // }
    return (
      <div className="container-fluid bg-darkGrey">
        <div className="row mx-0 mb-3">
          {/* <h3>{this.props.page}</h3>
          <h3>{this.props.pageId}</h3>*/}
          <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
            <CommentBox page={this.props.page}
            pageId={this.props.pageId}
            comments={this.props.comments}
             />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productWrapper">
            <div className="productVR rounded border" >
            <WebVR width={625} height={405} />
             {/* <WebVR /> <div id="container123"></div>
              <div id="container123" style={containerStyle}></div>
             */}
            </div>
            <ModelFooter page={this.props.page}
              pageId={this.props.pageId}
              productInfo={this.props.productInfo}
             />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 ">
            <SuggestionBox page={this.props.page} pageId={this.props.pageId} />
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-sm-3 col-md-3 col-lg-3">
             <ProductBlog page={this.props.page}
             pageId={this.props.pageId}
              productInfo={this.props.productInfo}
              />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productFeatures rounded">
              <FeaturesList page={this.props.page}
              pageId={this.props.pageId}
              productInfo={this.props.productInfo}
              />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 rounded text-center">
            <ContactForm page={this.props.page} pageId={this.props.pageId} />
          </div>
        </div>
        <div className="row mx-0 mt-4 mb-2">
          <div className="col-sm-12 col-md-12 col-lg-12 bg-info py-2 rounded text-center">
            <h5 className="text-white mb-0">You Might Also Like These</h5>
          </div>
        </div>
        <WebVRSuggestion page={this.props.page} pageId={this.props.pageId} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    productInfo:state.products.productsInfo,
    comments:state.comments.comments,
  }
}

export default connect(mapStateToProps,{getProductInfo,getComments})(SmartProduct);
