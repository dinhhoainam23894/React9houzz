import React from 'react'
import ProviderDetail from '../../components/pro-detail'
import {mapObject, ucfirst} from "../../libraries/helpers";
import {Link, Router} from '../../routes'
import ImageModal from '../../components/image-modal';
import 'isomorphic-fetch'
import css from "./index.css";

const APIURL = process.env.DOMAIN + process.env.APIURI
const APIPROJECT = APIURL + 'project/'
const APIPRO = APIURL + 'provider/'

export default class extends React.Component {
  static async getInitialProps({query}) {
    const res = await fetch(APIPROJECT + query.id)
    const data = await res.json()
    const resPro = await fetch(APIPRO + data.project.user_id)
    const dataPro = await resPro.json()
    return {
      id: query.id
      , data: dataPro
      , provider: dataPro.provider
      , project: data.project
      , images: data.project.images
      , slug: query.slug
      , title: data.seo.title
      , des: data.seo.des
      , canonical: data.seo.canonical
      , robots: data.seo.robots
      , og_url: data.seo.url
      , url_images: data.seo.url_image
      , headerProjects: dataPro.headerProjects
      , headerCategories: dataPro.headerCategories
      , dataBase: dataPro.dataBase
    }
  }

  render() {
    const { provider, data, project, images} = this.props
    return (
      <ProviderDetail provider_id={provider.id} provider_slug={provider.slug} data={data} {...this.props}>
        <div className="project-detail-main" id="cat">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb p-0 pl-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-8 col-md-8">
                <div className="about bg-white p-3 border border-gray">
                  <h1 className="font-25 font-weight-normal">{project.name}</h1>
                  <p className="font-weight-normal my-3 project-description"
                     dangerouslySetInnerHTML={{__html: project.descriptions}}/>
                  {project.address &&
                  <p className="font-14 font-weight-normal"><strong>Địa chỉ</strong>{": " + project.address}</p>}
                  {
                    project.more_infos && mapObject(project.more_infos, function (index, value) {
                      if (value != '')
                        return <p className="font-14 font-weight-normal" key={index}>
                          <strong>{ucfirst(index)}</strong>{": " + value}</p>
                    })
                  }
                  <div className="about bg-white py-3">
                    <ul className="list-unstyled">
                      {
                        images && images.map((value, index) => (
                          <li key={index} className="my-3">
                            <div className="project-title text-center mx-auto">
                              <h2 className="font-22 text-black-100 position-relative">
                                <span> {value.name && value.name} </span>
                              </h2>
                            </div>
                            <div className="project-image my-3">
                              {
                                value.status == 1 ?
                                  <Link route='image' params={{id: value.id, slug: `${value.slug}`}}>
                                    <a className='photoLink' onClick={(e) => this.showPhoto(e, value.id, value.slug)}>
                                      <img src={value.large_path} alt={value.name} className="img-fluid"/>
                                    </a>
                                  </Link>
                                  :
                                  <a href="javascript:void(0)" className='photoLink' rel="nofollow">
                                    <img src={value.large_path} alt={value.name} className="img-fluid"/>
                                  </a>
                              }
                            </div>
                            <div className="project-description"
                                 dangerouslySetInnerHTML={{__html: value.descriptions}}/>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="project-keyword bg-white p-3 my-4">
                  <p className="keyword-title font-25">Từ khóa</p>
                  <div className="pt-0 keyword-tags">
                        <span
                          className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                          Thiết kế nội thất chung cư
                        </span>
                    <span
                      className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                          Thiết kế nội thất chung cư
                        </span>
                    <span
                      className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                          Thiết kế nội thất chung cư
                        </span><span
                    className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                          Thiết kế nội thất chung cư
                        </span><span
                    className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                          Thiết kế nội thất chung cư
                        </span>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-4 project-sidebar">
                <div className="bg-white p-3">
                  <p className="sub-title position-relative">Dự án cùng chuyên gia</p>
                  <ul className="list-unstyled mt-3">
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea1.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea2.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội hộ phức hợp đẹp mặt
                            tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea3.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội Khu căn hộ phức hợp
                            đẹp mặt tại Hà N</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea1.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea1.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea1.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="media">
                        <div className="media-image mr-3">
                          <img src="/images/home-idea1.png" alt="Generic placeholder image"/>
                        </div>
                        <div className="media-body">
                          <p className="mt-0 mb-2 font-14">Khu căn hộ phức hợp đẹp mặt tại Hà Nội</p>
                          <div className="d-inline pro-info">
                            <div className="info project-info mr-3 float-left">
                              <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> 20 ảnh
                            </div>
                            <div className="info location-info">
                              <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> Hà nội
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-more">
                <p className="font-25">Mọi người thường xem thêm</p>
                <div className="row">
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro1.png" alt="Card image cap" />
                      </div>
                        <div className="card-body bg-gray px-0 py-2">
                          <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro2.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro3.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro1.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro2.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro3.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro2.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="card border-none">
                      <div className="card-image">
                        <img className="card-img-top" src="/images/home-pro3.png" alt="Card image cap" />
                      </div>
                      <div className="card-body bg-gray px-0 py-2">
                        <p className="card-title">Thiết kế mới nhất năm 2018 cho hạng mục nội thất</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <style global jsx>{`
                    .provider {
                        background-color: #ddd !important;
                    }
                `}</style>
      </ProviderDetail>
    )
  }
}