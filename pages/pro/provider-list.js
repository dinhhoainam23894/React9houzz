import React from 'react'
import Layout from '../../components/layout'
import Sidebar from '../../components/sideBar'
import 'isomorphic-fetch'
export default class extends React.Component{
    // static async getInitialProps({query}){
    //     const res = await fetch(APIURL)
    //     const data = await res.json()
    //     return {
    //         data : data,
    //         projects : data.projects.data,
    //         title : data.seo ? data.seo.title : null, 
    //         des : data.seo ? data.seo.des : null, 
    //         canonical : data.seo ? data.seo.canonical : null, 
    //         robots : data.seo ? data.seo.robots : null, 
    //         og_url : data.seo ? data.seo.url : null, 
    //         url_images : data.seo ? data.seo.url_images : null,
    //         headerProjects : data.headerProjects,
    //         headerCategories : data.headerCategories,
    //         dataBase : data.dataBase,
    //         h1 : data.h1
    //     }
    // }
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout {...this.props} navmenu={false} container={false}>
                <div className="container-fluid provider-list px-4 bg-gray">
                    <div className="row">
                        <div className="col-0 col-md-3 col-lg-3 px-3 mt-3" id="sidebar">
                            <Sidebar test={true}></Sidebar>
                        </div>
                        <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
                            <div className="px-3 py-2">
                                <ul className="list-unstyled">
                                <li className=" bg-white media border px-3 py-2 position-relative my-2 mb-4 container">
                                    <div className="row">
                                        <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                                                <div className="media-header mt-2">
                                                    <div className="rounded-circle logo">
                                                        <img src="/images/avatar.png" className="img-fluid h-100 rounded-circle" />
                                                    </div>
                    
                                                    <div className="media-title ml-3">
                                                        <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold" href="">Nội thất sáng tạo việt</a>
                                                        <p>Chuyên gia thiết kế nội ngoại thất</p>
                                                    </div>
                                                </div>
                                            <div className="media-content mt-3">
                                                <div className="d-flex pro-info my-2">
                                                    <div className="info project-info mr-4">
                                                        <i class="fa fa-briefcase my-auto" aria-hidden="true"></i> 20 dự án
                                                    </div>
                                                    <div className="info contact-info mr-4">
                                                        <i class="fa fa-phone my-auto" aria-hidden="true"></i> Liên hệ
                                                    </div>
                                                    <div className="info location-info">
                                                        <i class="fa fa-map-marker my-auto" aria-hidden="true"></i> 102 thái thịnh , đống đa , hà nội
                                                    </div>
                                                </div>
                                                <div className="text ellipsis">
                                                    <span className="text-concat more font-13 font-weight-light">
                                                    Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2">
                                            <ul className="list-unstyled d-flex project-list">
                                                <li>
                                                    <img src="/images/home-blog1.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-blog3.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-blog1.png" className="img-fluid"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className=" bg-white media border px-3 py-2 position-relative my-2 mb-4 container">
                                    <div className="row">
                                        <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                                                <div className="media-header mt-2">
                                                    <div className="rounded-circle logo">
                                                        <img src="/images/avatar.png" className="img-fluid h-100 rounded-circle" />
                                                    </div>
                    
                                                    <div className="media-title ml-3">
                                                        <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold" href="">Nội thất sáng tạo việt</a>
                                                        <p>Chuyên gia thiết kế nội ngoại thất</p>
                                                    </div>
                                                </div>
                                            <div className="media-content mt-3">
                                                <div className="d-flex pro-info my-2">
                                                    <div className="info project-info mr-4">
                                                        <i class="fa fa-briefcase my-auto" aria-hidden="true"></i> 20 dự án
                                                    </div>
                                                    <div className="info contact-info mr-4">
                                                        <i class="fa fa-phone my-auto" aria-hidden="true"></i> Liên hệ
                                                    </div>
                                                    <div className="info location-info">
                                                        <i class="fa fa-map-marker my-auto" aria-hidden="true"></i> 102 thái thịnh , đống đa , hà nội
                                                    </div>
                                                </div>
                                                <div className="text ellipsis">
                                                    <span className="text-concat more font-14 font-weight-light">
                                                    Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2">
                                            <ul className="list-unstyled d-flex project-list">
                                                <li>
                                                    <img src="/images/home-idea1.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-blog3.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-pro2.png" className="img-fluid"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className=" bg-white media border px-3 py-2 position-relative my-2 mb-4 container">
                                    <div className="row">
                                        <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                                                <div className="media-header mt-2">
                                                    <div className="rounded-circle logo">
                                                        <img src="/images/avatar.png" className="img-fluid h-100 rounded-circle" />
                                                    </div>
                    
                                                    <div className="media-title ml-3">
                                                        <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold" href="">Nội thất sáng tạo việt</a>
                                                        <p>Chuyên gia thiết kế nội ngoại thất</p>
                                                    </div>
                                                </div>
                                            <div className="media-content mt-3">
                                                <div className="d-flex pro-info my-2">
                                                    <div className="info project-info mr-4">
                                                        <i class="fa fa-briefcase my-auto" aria-hidden="true"></i> 20 dự án
                                                    </div>
                                                    <div className="info contact-info mr-4">
                                                        <i class="fa fa-phone my-auto" aria-hidden="true"></i> Liên hệ
                                                    </div>
                                                    <div className="info location-info">
                                                        <i class="fa fa-map-marker my-auto" aria-hidden="true"></i> 102 thái thịnh , đống đa , hà nội
                                                    </div>
                                                </div>
                                                <div className="text ellipsis">
                                                    <span className="text-concat more font-14 font-weight-light">
                                                    Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2">
                                            <ul className="list-unstyled d-flex project-list">
                                                <li>
                                                    <img src="/images/home-idea1.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-idea2.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-idea3.png" className="img-fluid"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className=" bg-white media border px-3 py-2 position-relative my-2 mb-4 container">
                                    <div className="row">
                                        <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                                                <div className="media-header mt-2">
                                                    <div className="rounded-circle logo">
                                                        <img src="/images/avatar.png" className="img-fluid h-100 rounded-circle" />
                                                    </div>
                    
                                                    <div className="media-title ml-3">
                                                        <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold" href="">Nội thất sáng tạo việt</a>
                                                        <p>Chuyên gia thiết kế nội ngoại thất</p>
                                                    </div>
                                                </div>
                                            <div className="media-content mt-3">
                                                <div className="d-flex pro-info my-2">
                                                    <div className="info project-info mr-4">
                                                        <i class="fa fa-briefcase my-auto" aria-hidden="true"></i> 20 dự án
                                                    </div>
                                                    <div className="info contact-info mr-4">
                                                        <i class="fa fa-phone my-auto" aria-hidden="true"></i> Liên hệ
                                                    </div>
                                                    <div className="info location-info">
                                                        <i class="fa fa-map-marker my-auto" aria-hidden="true"></i> 102 thái thịnh , đống đa , hà nội
                                                    </div>
                                                </div>
                                                <div className="text ellipsis">
                                                    <span className="text-concat more font-14 font-weight-light">
                                                    Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà Công Ty TNHH Thiết Kế Kiến Trúc Nội Thất Sáng Tạo Việt được thà
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2">
                                            <ul className="list-unstyled d-flex project-list">
                                                <li>
                                                    <img src="/images/home-pro1.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-pro2.png" className="img-fluid"/>
                                                </li>
                                                <li>
                                                    <img src="/images/home-pro3.png" className="img-fluid"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}