import React from 'react';
import {connect} from 'react-redux';
import {getSuggestions} from '../actions/productActions';
import {Link,withRouter} from 'react-router-dom';

class WebVRSuggestion extends React.Component{

  componentDidMount(){
    this.props.getSuggestions(this.props.page,this.props.pageId);
  }

  componentWillReceiveProps(nextProps){
   if(nextProps.page !== this.props.page || nextProps.pageId !== this.props.pageId){
      this.props.getSuggestions(nextProps.page,nextProps.pageId);
    }
  }

render(){
    return (
            <div>
                {/* this.suggestionBox() */}
                <div className="componentMap">
                   <ul className="row mx-0 mb-0">
                    {this.props.suggestions && this.props.suggestions.map((suggestion,i)=>
                            <li key={suggestion.id} className="col-sm-3 col-md-3 col-lg-3 pl-0">
                            <Link to={`/SmartView/${this.props.page}/${suggestion.modelname}`} className="routeDecorator">
                                <div className="border mb-2 p-3 rounded bg-white">
                                  <img src={`http://127.0.0.1:8000${suggestion.blogimage}`} alt="" width="100%" height="200px" />
                                    <h5 className="productTitle my-2">{suggestion.modelname}</h5>
                                    <p className="productDescription text-secondary">
                                      {suggestion.modeldescription}
                                    </p>
                                    <span className="text-grey">
                                    {/*<span className="mr-2">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> {suggestion.modellikes}</i>
                                    </span>*/}
                                    <i className="fa fa-eye" aria-hidden="true"> {suggestion.modelviews} views</i>
                                    </span>
                                </div>
                              </Link>
                            </li>
                        )
                    }
                    </ul>
                </div>
            </div>
            );
        }
  }


  function mapStateToProps(state){
    return {
      suggestions:state.products.suggestions
    }
  }

  export default withRouter(connect(mapStateToProps,{getSuggestions})(WebVRSuggestion));
