import React from 'react';
import { Link } from 'react-router-dom';
import { CommentBox } from './CommentBox';
import { WebVR } from './WebVR';
export class SmartProduct extends React.Component{
render(){
    return (
      <div className="container-fluid bg-darkGrey">
        <div className="row mx-0 mb-3">
          {/* <h3>{this.props.page}</h3>
          <h3>{this.props.pageId}</h3>*/}
          <div className="col-sm-3 col-md-3 col-lg-3  mb-2">
            <CommentBox page={this.props.page} pageId={this.props.pageId} />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productWrapper">
            <div className="productVR rounded border" >
            {/*<div id="container123"><WebVR /></div>*/}
            {/*<WebVR />*/}
            </div>
            <div className="productFooter bg-white border p-2 mb-2">
              <h4>Sophia
                <span className="float-right productIcons text-info">
                  <span className="mx-2">
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i>
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-barcode" aria-hidden="true"> 300</i>
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-eye" aria-hidden="true"> 27</i>
                  </span>
                </span>
              </h4>
              <div className="col-sm-12 col-md-12 col-lg-12 noPadding">
                <p className="text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, aspernatur, magni! Iste nihil, eum rem labore modi, incidunt laboriosam eveniet illum cum possimus repudiandae necessitatibus ipsa, quis illo sapiente, nobis.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 noPadding">
                <div className="row mx-0">
                  <div className="col-sm-6 col-md-6 col-lg-6 noPadding">
                    <p className="productLaunchedDate mt-2 text-grey">Uploaded On 5/12/2017</p>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                    <span className="float-right text-secondary shareBtn rounded-circle">
                      <span className="productRating mr-3">
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o " aria-hidden="true"></i>
                      </span>
                      <i className="fa fa-share-alt-square" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 ">
            <div className=" border rounded bg-white">
              <div className="suggestionHeader text-center  border-0">
                <h4 className="px-2">Suggestions</h4>
              </div>
            </div>
            <div className="suggestionSection scrollBar bg-white">
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 border py-2 px-2">
                <div className="col-sm-4 col-md-4 col-lg-4 pr-2 pl-0 ">
                  <img src="../../img/productavatar.jpg" className="rounded" alt="suggestedVR" width="100%" height="70px" />
                </div>
                <div className="userInfo col-sm-8 col-md-8 col-lg-8 noPadding">
                  <h6>Facebook Pixel </h6>
                  <p className="userComment text-grey">Facebook Developers</p>
                  <div className="row mx-0">
                    <div className="col-sm-6 col-md-6 col-lg-6 px-0 ">
                      <span className=" text-grey ">
                        <span className="mr-2">
                          <i className="fa fa-eye" aria-hidden="true"> 27</i>
                        </span>
                        <span className="like">
                          <i className="fa fa-thumbs-o-up" aria-hidden="true"> 45</i>
                        </span>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                      <span className="float-right text-secondary shareBtn rounded-circle">
                        <span className="suggestedProductRating">
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                          <i className="fa fa-star-o " aria-hidden="true"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-0">
           <div className="col-sm-3 col-md-3 col-lg-3  ">
             <div className="col-sm-12 col-md-12 col-lg-12 bg-white pt-3 pb-5 rounded">
              <img src="../../img/productavatar.jpg" alt="" width="100%" height="250px" />
              <h4 className="py-2 mb-0">Sophia</h4>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit  amet expedita iste natus voluptate</p>
              <Link to="/blog" type="button" className="btn btn-info btn-sm float-right">Read More</Link>
              </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productFeatures rounded">
            <div className="bg-white">
              <ul id="productFeaturePane" className="nav nav-pills py-3 text-center" role="tablist">
                <li className="nav-item col-sm-3 col-md-3 col-lg-3">
                  <a className="nav-link active" href="#description" id="description-tab" role="pill" data-toggle="pill" aria-controls="description" aria-expanded="true">Description</a>
                </li>
                <li className="nav-item  col-sm-3 col-md-3 col-lg-3">
                  <a className="nav-link" href="#images" role="pill" id="images-tab" data-toggle="pill" aria-controls="images">Images</a>
                </li>
                <li className="nav-item col-sm-3 col-md-3 col-lg-3">
                  <a className="nav-link " href="#location" id="location-tab" role="pill" data-toggle="pill" aria-controls="location" aria-expanded="true">Location</a>
                </li>
                <li className="nav-item  col-sm-3 col-md-3 col-lg-3">
                  <a className="nav-link" href="#news" role="pill" id="news-tab" data-toggle="pill" aria-controls="news">News</a>
                </li>
              </ul>
              <div className="tab-content px-3">
                <div role="tabpanel" className="tab-pane fade show active" id="description" aria-labelledby="description-tab">
                  <p>Welcome home! Click on the tabs to see the content change.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="images" aria-labelledby="images-tab">
                  <p>A hat is a head covering. It can be worn for protection against the elements, ceremonial reasons, religious reasons, safety, or as a fashion accessory.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="location" aria-labelledby="location-tab">
                  <p>Welcome home! Click on the tabs to see the content change.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="news" aria-labelledby="news-tab">
                  <p>A hat is a head covering. It can be worn for protection against the elements, ceremonial reasons, religious reasons, safety, or as a fashion accessory.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 rounded text-center">
            <div className="col-sm-12 col-md-12 col-lg-12 pt-3 pb-5 bg-white">
              <h4>Call Me Back</h4>
              <form className="form" role="form">
                <div className="form-group">
                  <input type="email" className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <input type="name" className="form-control"
                  aria-describedby="nameHelp"
                  placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input type="phone" className="form-control"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                  />
                </div>
                <div className="form-group">
                  <textarea type="message" className="form-control"
                  aria-describedby="messageHelp" rows="5"
                  placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group pb-4">
                <button type="submit" className="btn btn-info float-right">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mx-0 mt-4 mb-2">
          <div className="col-sm-12 col-md-12 col-lg-12 bg-info py-2 rounded text-center">
            <h5 className="text-white mb-0">You Might Also Like These</h5>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-sm-3 col-md-3 col-lg-3 pl-0">
            <div className="border mb-2 p-3 rounded ">
              <img src="../../img/productavatar.jpg" alt="" width="100%" height="200px" />
                <h5 className="productTitle my-2">Dragon 8</h5>
                <p className="productDescription text-secondary">
                  Lorem ipsum dolor sit amet, asd asdfads consectetur adipisicing elit
                </p>
                <span className="text-grey">
                <span className="mr-2"><i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i></span>
                <i className="fa fa-eye" aria-hidden="true"> 45</i>
                </span>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="border mb-2 p-3 rounded ">
              <img src="../../img/productavatar.jpg" alt="" width="100%" height="200px" />
                <h5 className="productTitle my-2">Dragon 8</h5>
                <p className="productDescription text-secondary">
                  Lorem ipsum dolor sit amet, asd asdfads consectetur adipisicing elit
                </p>
                <span className="text-grey">
                <span className="mr-2"><i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i></span>
                <i className="fa fa-eye" aria-hidden="true"> 45</i>
                </span>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="border mb-2 p-3 rounded ">
              <img src="../../img/productavatar.jpg" alt="" width="100%" height="200px" />
                <h5 className="productTitle my-2">Dragon 8</h5>
                <p className="productDescription text-secondary">
                  Lorem ipsum dolor sit amet, asd asdfads consectetur adipisicing elit
                </p>
                <span className="text-grey">
                <span className="mr-2"><i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i></span>
                <i className="fa fa-eye" aria-hidden="true"> 45</i>
                </span>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 pr-0">
            <div className="border mb-2 p-3 rounded ">
              <img src="../../img/productavatar.jpg" alt="" width="100%" height="200px" />
                <h5 className="productTitle my-2">Dragon 8</h5>
                <p className="productDescription text-secondary">
                  Lorem ipsum dolor sit amet, asd asdfads consectetur adipisicing elit
                </p>
                <span className="text-grey">
                <span className="mr-2"><i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i></span>
                <i className="fa fa-eye" aria-hidden="true"> 45</i>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
