import React from 'react'
import Layout from "./layout";
import Sidebar from "./sideBar";
import Breadcrumbs from './Breadcrumbs'

import Pagination from "./pagination";
import {Link} from "../routes"
import $ from "jquery";

export default class extends React.Component {

  constructor(props) {
    super(props)
    const datas = this.props.data.datas
    this.state = {
      nextPage: datas.next_page_url,
      nextPageLink: datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined,
      backPageLink: datas.prev_page_url ? this.props.url_path + "?page=" + (datas.current_page - 1) : undefined,
      activePage: datas.current_page,
      providers: this.props.providers
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const datas = nextProps.data.datas
      this.setState({
        nextPage: datas.next_page_url,
        nextPageLink: datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined,
        backPageLink: datas.prev_page_url ? this.props.url_path + "?page=" + (datas.current_page - 1) : undefined,
        activePage: datas.current_page,
        providers: nextProps.providers
      });
    }
  }
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  getPageUrl(i) {
    let url = "";
    if (this.props.url_path) {
      url = this.props.url_path
    }
    return url + "?page=" + i;
  }

  getData = async (pageNumber) => {
    const APIURL = process.env.DOMAIN + process.env.APIURI + 'danh-sach-chuyen-gia/?page=';
    const res = await fetch(APIURL + pageNumber);
    const data = await res.json();
    this.setState({
      'providers': data.datas.data
    });
  }

  render() {
    const {h1, filterDefault, page , breadcrumb , listBadge} = this.props;
    const {providers, nextPage, nextPageLink, backPageLink} = this.state;
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div className="container-fluid provider-list px-4 bg-gray">
          <div className="row">
            <div className="col-0 col-md-3 col-lg-3 px-3 mt-3" id="sidebar">
              <Sidebar filter={filterDefault} page={page}></Sidebar>
            </div>
            <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">

              <div className="px-3 py-2">
                <div className="bg-white py-2">
                  {
                    breadcrumb &&
                    <Breadcrumbs breadcrumb={breadcrumb}></Breadcrumbs>
                  }
                  <h1 className="text-dark title ml-3">{ h1 && h1 }</h1>
                  <div className="list-tag service ml-3">
                    {  listBadge && listBadge.map((value,index) => (
                      <Link prefetch route={value.uri} key={index}>
                        <a href={value.uri} ><span className="badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">{value.name_tag} <i className="close"></i></span></a>
                      </Link>
                    ))
                    }
                  </div>
                </div>
                <ul className="list-unstyled">
                  {
                    providers && providers.map((value,index) => (
                      <li className=" bg-white media border px-3 py-2 position-relative my-2 mb-4 container" key={index}>
                        <div className="row w-100 provider-content mx-0">
                          <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                            <div className="media-body position-relative">
                              <div className="media-header mt-2">
                                <div className="rounded-circle logo">
                                  <img src={value.auth_avatar} className="img-fluid h-100 rounded-circle" />
                                </div>
                                <div className="media-title ml-3">
                                  <Link route="pro.detail" params={{id: value.id, slug: value.slug}}>
                                    <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold">{value.name}</a>
                                  </Link>
                                </div>
                              </div>
                              <div className="media-content mt-3">
                                <div className="d-flex pro-info my-2">
                                  <div className="info project-info mr-4">
                                    <i className="fa fa-briefcase my-auto" aria-hidden="true"></i> {value.total_project} dự án
                                  </div>
                                  {/*<div className="info contact-info mr-4">*/}
                                  {/*<i className="fa fa-phone my-auto" aria-hidden="true"></i> Liên hệ*/}
                                  {/*</div>*/}
                                  {
                                    value.address &&
                                    <div className="info location-info">
                                      <i className="fa fa-map-marker my-auto" aria-hidden="true"></i> {value.address}
                                    </div>
                                  }
                                </div>
                                <div className="text ellipsis">
                              <span className="text-concat more font-13 font-weight-light" dangerouslySetInnerHTML={{__html:value.descriptions}}>
                              </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2">

                              {
                                value.projects_intro.length > 0 ?
                                  <ul className="list-unstyled d-flex project-list">
                                    {
                                      value.projects_intro.map((value,index) => (
                                      <li key={index}>
                                        <Link route="project.detail" params={{id: value.id, slug: value.slug}}>
                                          <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold">
                                            <img src={value.public_avatar} className="img-fluid"/>
                                          </a>
                                        </Link>
                                      </li>
                                     ))
                                    }
                                  </ul>
                                  :
                                  <ul className="list-unstyled d-flex project-list">
                                    <li/>
                                    <li/>
                                    <li/>
                                  </ul>
                              }
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="pagi_desktop my-4">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.props.data.datas.per_page}
                  totalItemsCount={this.props.data.datas.total}
                  pageRangeDisplayed={5}
                  onChange={(e) => this.handlePageChange(e)}
                  getPageUrl={(i) => this.getPageUrl(i)}
                  nextPageLink={nextPageLink}
                  backPageLink={backPageLink}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}