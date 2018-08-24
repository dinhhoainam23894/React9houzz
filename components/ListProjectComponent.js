import React from 'react'
import Layout from "./layout";
import Sidebar from "./sideBar";

export default class extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
    const { projects , h1 , filterDefault , page} = this.props
    return(
      <Layout {...this.props} navmenu={false} container={false}>
        <div className="container-fluid service px-4 bg-gray">
          <div className="row">
            <div className="col-0 col-md-3 col-lg-3 px-3" id="sidebar">
              <Sidebar filter={filterDefault} page={page}></Sidebar>
            </div>
            <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
              <div className="bg-white px-3 py-4">
                <h1 className="font-25 font-weight-normal text-black-100">{h1}</h1>
                <div className="service-tag pt-0">
                  <span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">mầu tối <i className="close font-weight-normal font-15"></i></span>
                  <span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">Phòng khách <i className="close font-weight-normal font-15"></i></span>
                  <span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">Phòng họp <i className="close font-weight-normal font-15"></i></span>
                </div>
                <ul className="list-unstyled my-3">
                  {
                    projects && projects.map((value , index) => (
                      <li className="media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container" key={index}>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative px-0">
                            <a href=""><img src={value.public_avatar} alt="" className="mr-3" /></a>
                            <div className="position-absolute image-actions py-2">
                                                    <span className="actions-detail font-16">
                                                        <i className="fa fa-picture-o mr-1"></i>{value.total + " ảnh"}
                                                    </span>
                              <span className="actions-detail font-16">
                                                        <i className="fa fa-cog mr-1"></i> cổ điển
                                                    </span>
                            </div>
                          </div>
                          <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                            <h2 className="font-18">{value && value.name}</h2>
                            <div className="media-header my-3 p-2">
                              <div className="rounded-circle logo">
                                <img src={value.providers && value.providers.path_avatar} className="img-fluid h-100 rounded-circle" />
                              </div>

                              <div className="media-title ml-3">
                                <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold" href="">{value.providers && value.providers.name}</a>
                                <div className="star-rating">
                                  <span className="fa fa-star" data-rating="1"></span>
                                  <span className="fa fa-star" data-rating="2"></span>
                                  <span className="fa fa-star" data-rating="3"></span>
                                  <span className="fa fa-star" data-rating="4"></span>
                                  <span className="fa fa-star disable" data-rating="5"></span>
                                  <span className="font-italic">(14 đánh giá)</span>
                                </div>
                              </div>
                            </div>
                            <div className="media-content mt-3">
                                                    <span className="more font-14 font-weight-light">
                                                        {value.descriptions &&  value.descriptions}<a href=""><span> Xem thêm >></span></a>
                                                    </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}