import Layout from '../components/layout'
import React from 'react'

const APIURL = process.env.DOMAIN + process.env.APIURI + 'home/'
import css from './home.css'
import 'isomorphic-fetch'
import Slider from "react-slick";
import { mapObject } from "../libraries/helpers";
import {Link} from "../routes";

export default class  extends React.Component {
  static async getInitialProps({query}) {
    const res = await fetch(APIURL)
    const data = await res.json()
    return {
      title: data.seo ? data.seo.title : null
      , des: data.seo ? data.seo.des : null
      , canonical: data.seo ? data.seo.canonical : null
      , robots: data.seo ? data.seo.robots : null
      , og_url: data.seo ? data.seo.url : null
      , url_images: data.seo ? data.seo.url_images : null
      , headerProjects: data.headerProjects
      , headerCategories: data.headerCategories
      , dataBase: data.dataBase,
      providers: data.providers,
      listType: data.listType,
      images : data.images.data
    }
  }

  render() {
    var banner = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: "linear",
      swipeToSlide: true,
      pauseOnHover: false
    }
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      cssEase: "linear",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const {providers, listType , images} = this.props
    return (
      <Layout {...this.props} navmenu={false} container={false} css={css}>
        <div className="homepage">
          <Slider {...banner}>
            <div className="slide d-flex">
              <div className="overlay"></div>
              <img src="/images/home-banner1.png" alt="" className="img-fluid"/>
              <div className="caption d-flex justify-content-center">
                <div className="container py-3">
                  <p>1000+ ý tưởng đẹp cho ngôi nhà của bạn</p>
                  <p className="font-20 d-none d-md-block">9houz cung cấp một kho ý tưởng khổng lồ với hơn 1000 bức ảnh đẹp cho ngôi nhà
                    của bạn</p>
                  <Link route='y-tuong'>
                    <a className="btn btn-primary mt-3 px-4">Tìm ý tưởng</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slide d-flex">
              <div className="overlay"></div>
              <img src="/images/home-banner2.png" alt="" className="img-fluid"/>
              <div className="caption d-flex justify-content-center">
                <div className="container py-3">
                  <p>Chuyên gia trong lĩnh vực nội thất trên 63 tỉnh thành</p>
                  <p className="font-20 d-none d-md-block">9Houz sẽ giúp bạn kết nối với hơn 1000 Chuyên gia trong lĩnh vực Thiết kế & thi
                    công nội thất trên 63 tỉnh thành</p>
                  <a className="btn btn-primary mt-3 px-4">Tìm chuyên gia</a>
                </div>
              </div>
            </div>
          </Slider>
          <div className="home-content">
            <div className="professional container py-3">
              <h2 className="text-center my-3 position-relative title">Chuyên gia tiêu biểu</h2>
              <Slider {...settings}>
                {
                  providers && providers.map((value, index) => (
                    <div className="card-professional card p-3" key={index}>
                      <div className="embed-responsive embed-responsive-1by1 image-pro rounded-circle">
                        <img src={value.avatar_cover} alt="" className="embed-responsive-item rounded-circle"/>
                      </div>
                      <div className="card-contend mt-3 text-center">
                        <p>{value.name}</p>
                        <Link route='pro.detail' params={{id:  value.id  , slug : value.slug}}>
                          <a className='photoLink'>
                            <button className="btn btn-primary badge-pill badge-primary">
                              Xem thêm
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className="main-content">
              <div className="blog">
                <div className="container">
                  <div className="row">
                    {
                      listType && mapObject(listType,(index, value) => (
                        <div className="col-12 col-md-4" key={index}>
                          <h2 className="my-4 position-relative sub-title">{index}</h2>
                          <div className="card my-4">
                            {/*<div className="calendar">*/}
                            {/*<p className="font-20 mb-0">27</p>*/}
                            {/*T2*/}
                            {/*</div>*/}
                            <div className="folding-edge"></div>
                            <Link route='project.detail' params={{id:  value.main_project && value.main_project.id  , slug : value.main_project && value.main_project.slug}}>
                              <a className='photoLink'>
                                <div className="card-img-top">
                                  <img className="img-fluid" src={value.main_project && value.main_project.avatar} alt="Card image cap"/>
                                </div>
                              </a>
                            </Link>
                            <div className="card-body">
                              <Link route='project.detail' params={{id:  value.main_project && value.main_project.id  , slug : value.main_project && value.main_project.slug}}>
                                <a className='photoLink'>
                                  <p className="card-title font-15">{value.main_project && value.main_project.name}</p>
                                </a>
                              </Link>
                              <div className="text ellipsis position-relative">
                                <p className="card-text font-14" dangerouslySetInnerHTML={{__html: value.main_project && value.main_project.descriptions}}/>
                              </div>
                              <ul className="list-unstyled">
                                {
                                  value.projects && value.projects.map((value,index) => (
                                    <Link route='project.detail' params={{id:  value.id  , slug : value.slug}} key={index}>
                                      <a className='photoLink'>
                                        <li className="media py-3">
                                          <div className="img-project mr-3">
                                            <img src={value.avatar && value.avatar} alt="Generic placeholder image"/>
                                          </div>
                                          <div className="media-body">
                                            <p className="mt-0 mb-1 text-black font-14 media-title">{value.name && value.name}</p>
                                          </div>
                                        </li>
                                      </a>
                                    </Link>
                                  ))
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <h2 className="text-center my-5 position-relative title">Ý tưởng mới nhất</h2>
              <div className="new-idea position-relative">
                <div className="overlay"></div>
                <div className="container py-5">
                  <Slider {...settings}>
                    {
                      images && images.map((value,index) => (
                        <div className="p-2 idea-slide-items" key={index}>
                          <Link route='image' params={{id:  value.id  , slug : value.slug}}>
                            <a className='photoLink'>
                              <img src={value.large_path} className="img-fluid"/>
                            </a>
                          </Link>
                        </div>
                      ))
                    }
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

