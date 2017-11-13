import React from "react";
import AddComment from './AddComment';
import CommentList from './CommentList';

export class CommentBox extends React.Component{
constructor(props){
  super(props);
  this.state={
    comments:[{
                "id":1,
                "name": "Leanne Graham",
                "comment": "lorem Ipsum asdf asdfasdfasdf",
                "likes":10,
                "time":"10 minutes ago"
            },
            {
                "id":2,
                "name": "Sundar Pichai",
                "comment": "Google CEO",
                "likes":80,
                "time":"1 minute ago"
            },
            {
                "id":3,
                "name": "karthik ",
                "comment": "developer",
                "likes":80,
                "time":"1 minute ago"
            }]
      }
}
  render(){
    // let initialValues = {
    //     initialValues: {
    //       modelname: this.props.pageId
    //     }
    // };

    var routeParams = {};
    routeParams.category = this.props.page;
    routeParams.modelname = this.props.pageId;
    return(
      <div className="col-sm-12 col-md-12 col-lg-12 bg-white">
        <div className=" rounded pb-4 bg-white">
            <div className="commentHeader bg-white border-0 text-center">
              <h4 className="px-2">450 Comments</h4>
              {/*<h3>{this.props.page}</h3>
             <h3>{this.props.pageId}</h3>*/}
            </div>
{/*            <ul className="text-info">
            { this.state.comments.map( (comment, key) =>
              <li key={comment.name}>{comment.name}</li>)
            }
            </ul>*/}

            <CommentList comment={this.state.comments} />
            <AddComment initialValues={routeParams} />
        </div>
      </div>
    );
  }
}
