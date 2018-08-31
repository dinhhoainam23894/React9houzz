import React from 'react'
import ProviderDetail from '../../components/pro-detail'
import {mapObject, ucfirst} from "../../libraries/helpers";
import {Link, Router} from '../../routes'
import ImageModal from '../../components/image-modal';
import 'isomorphic-fetch'
import css from "./detail.css";

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
      , images: data.images.data
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
      , relateData : data.relateData
      , listProjects : data.listProjects
    }
  }
  showPhoto (e, id , slug) {
    e.preventDefault()
    Router.push(`/project?id=${this.props.id}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
  }
  dismissModal (id , slug) {
    Router.pushRoute('project.detail', {id: id , slug : `${slug}`})
  }
  render() {
    const {url , provider, data, project, images ,relateData , listProjects} = this.props
    return (
      <ProviderDetail provider_id={provider.id} provider_slug={provider.slug} data={data} {...this.props} css={css}>
        {
          url.query.photoId &&
          <ImageModal
            id={url.query.photoId}
            slug={url.query.slug}
            detail={false}
            popup={false}
            currentPath={url.pathname}
            onDismiss={() => this.dismissModal(url.query.id,url.query.slug)}
          />
        }
        <div className="project-detail-main" id="cat">
          <div className="project-detail-container">
            {/*<nav aria-label="breadcrumb">*/}
              {/*<ol className="breadcrumb p-0 pl-0">*/}
                {/*<li className="breadcrumb-item"><a href="#">Home</a></li>*/}
                {/*<li className="breadcrumb-item active" aria-current="page">Library</li>*/}
              {/*</ol>*/}
            {/*</nav>*/}
            <div className="row">
              <div className="col-12 col-md-8">
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
                {/*<div className="project-keyword bg-white p-3 my-4">*/}
                  {/*<p className="keyword-title font-25">Từ khóa</p>*/}
                  {/*<div className="pt-0 keyword-tags">*/}
                        {/*<span*/}
                          {/*className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">*/}
                          {/*Thiết kế nội thất chung cư*/}
                        {/*</span>*/}
                    {/*<span*/}
                      {/*className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">*/}
                          {/*Thiết kế nội thất chung cư*/}
                        {/*</span>*/}
                    {/*<span*/}
                      {/*className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">*/}
                          {/*Thiết kế nội thất chung cư*/}
                        {/*</span><span*/}
                    {/*className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">*/}
                          {/*Thiết kế nội thất chung cư*/}
                        {/*</span><span*/}
                    {/*className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">*/}
                          {/*Thiết kế nội thất chung cư*/}
                        {/*</span>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </div>
              <div className="col-12 col-md-4 project-sidebar">
                <div className="bg-white p-3">
                  <p className="sub-title position-relative">Dự án cùng chuyên gia</p>
                  <ul className="list-unstyled mt-3">
                    {
                      listProjects && listProjects.map((value,index) => (
                        <li className="my-3 listProject" key={index}>
                          <Link route='project.detail' params={{id: value.id , slug: value.slug }}>
                            <a className="nav-link border-0 font-14 font-weight-bold">
                                 <div className="media">
                                <div className="media-image mr-3">
                                  <img src={value.avatar} alt="Generic placeholder image"/>
                                </div>
                                <div className="media-body">
                                  <p className="mt-0 mb-2 font-14 text-black">{value.name}</p>
                                  <div className="d-inline pro-info">
                                    <div className="info project-info mr-3 float-left">
                                      <i className="fa fa-picture-o my-auto" aria-hidden="true"></i> {value.total + ' ảnh'}
                                    </div>
                                    {value.address &&
                                      <div className="info location-info">
                                        <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> {value.address}
                                      </div>
                                    }
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))
                    }
                    <li className="text-right border border-bottom-0 border-left-0 border-right-0 pt-3">
                      <Link route="pro.project" params={{ id: provider.id , slug : provider.slug }} >
                        <a href="" className="text-primary"> Xem thêm </a>
                     </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-more mt-3">
                <p className="font-25">Mọi người thường xem thêm</p>
                <div className="row">
                  {
                    relateData && mapObject(relateData,(index,value) => (
                      <div className="col-12 col-md-3" key={index}>
                        <Link route='project.detail' params={{id: index , slug: `${value.slug}`}}>
                          <a className="nav-link border-0 font-14 font-weight-bold px-0">
                          <div className="card border-none">
                            <div className="card-image">
                              <img className="card-img-top" src={value.avatar} alt="Card image cap" />
                            </div>
                            <div className="card-body bg-gray px-0 py-2">
                              <p className="card-title text-black">{value.name}</p>
                            </div>
                          </div>
                          </a>
                        </Link>
                      </div>
                    ))
                  }
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