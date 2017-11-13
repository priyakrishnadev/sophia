import React from "react";
import classnames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {commentLike} from '../actions/commentActions';
import axios from 'axios';

class CommentList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      like:0
    }
  }

  render(){
    return(
      <div className="commentSection scrollBar bg-white">
        <ul>
          {this.props.comment.map( (comment, key) =>
            <li key={comment.id}>
            <div className="row mx-0 border py-2 px-2">
              <div className="userComments col-sm-3 col-md-3 col-lg-3 noPadding">
              <img src="../../img/useravatar.png" className="img-circle rounded-circle border" alt="" width="100%" height="64px" />
              </div>
              <div className="userInfo col-sm-9 col-md-9 col-lg-9 noPadding">
                <h6>{comment.name}<span className="float-right text-grey commentedTime">{comment.time}</span></h6>
                <p className="userComment">{comment.comment}</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 pr-0">
                {/*<span className={classnames('float-right text-grey like', comment.likes > 0 && 'text-info' )} onClick={this.onClick}>*/}
                <span className={classnames('float-right text-grey like', this.props.commentHit.enabled === true && 'text-info' )}
                  onClick={()=>this.props.commentLike(comment.id,comment.likes)}>
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  {(comment.id == this.props.commentHit.id)?
                    this.props.commentHit.payload :
                    comment.likes
                  }
                </span>
              </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  // console.log(state.commentsHits);
  return {
    commentHit: state.commentsHits
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({commentLike}, dispatch);
}

// function mapDispatchToProps (dispatch) {
//   return {
//     onClick: (id) => dispatch(commentLike(id))
//   }
// }
export default connect(mapStateToProps,mapDispatchToProps)(CommentList);
