import React from 'react'
import Layout from "./layout";
import Sidebar from "./sideBar";
import Breadcrumbs from './Breadcrumbs'
import Pagination from "./pagination";
import {Link} from "../routes"
import css from "../pages/project/list-project.css"
import LazyLoad, {forceCheck} from "react-lazyload";
import Placeholder from "./PlaceHolder";

export default class extends React.Component {

  constructor(props) {
    super(props);
    const datas = this.props.data.datas;
    this.state = {
      nextPage: datas.next_page_url,
      nextPageLink: datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined,
      backPageLink: datas.prev_page_url ? this.props.url_path + "?page=" + (datas.current_page - 1) : undefined,
      activePage: datas.current_page,
      projects: this.props.projects
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
        projects: nextProps.projects
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
    const APIURL = process.env.DOMAIN + process.env.APIURI + 'danh-sach-du-an/?page=';
    const res = await fetch(APIURL + pageNumber);
    const data = await res.json();
    this.setState({
      'projects': data.datas.data
    });
  }

  render() {
    const {h1, filterDefault, page, breadcrumb , listBadge} = this.props;
    const {projects, nextPage, nextPageLink, backPageLink} = this.state;
    return (
      <Layout {...this.props} navmenu={false} container={false} nextPageLink={nextPageLink} backPageLink={backPageLink} css={css}>
        <div className="container-fluid service project-list px-4 bg-gray">
          <div className="row project-list-container">
            <div className="col-0 col-md-3 col-lg-3 px-3" id="sidebar">
              <Sidebar filter={filterDefault} page={page} />
            </div>
            <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
              {
                breadcrumb &&
                <Breadcrumbs breadcrumb={breadcrumb} />
              }
              <div className="bg-white px-3 py-3">
                <h1 className="font-25 font-weight-normal text-black-100">{h1}</h1>
                <div className="list-tag service ml-3">
                  {  listBadge && listBadge.map((value,index) => (
                    <Link route={value.uri} key={index}>
                      <a href={value.uri} ><span className="badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">{value.name_tag} <i className="close" /></span></a>
                    </Link>
                  ))
                  }
                </div>
                <ul className="list-unstyled my-3">
                  {
                    projects && projects.map((value, index) => (
                      <li className="media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container"
                          key={index}>
                        <div className="row">
                          <div className="project-relate col-md-5 col-lg-5 col-12 col-sm-12 images-service position-relative px-0">
                            <Link route="project.detail" params={{id: value.id, slug: value.slug}}>
                              <a className="link">
                                <LazyLoad once placeholder={<Placeholder dataSrc={value.public_avatar} alt={value.name} />}  debounce={0}>
                                  <img src={value.public_avatar} alt={value.name} className="mr-3"/>
                                </LazyLoad>
                              </a>
                            </Link>
                            <div className="position-absolute image-actions py-4">
                              <span className="actions-detail font-16 d-flex justify-content-center">
                                  <p className="mb-0 d-none d-md-block">
                                    <i className="fa fa-picture-o mr-2" /> {value.total_images + " ảnh"}
                                  </p>
                              </span>
                              {/*<span className="actions-detail font-16">*/}
                              {/*<i className="fa fa-cog mr-1"></i> {value.name_tag_style}*/}
                              {/*</span>*/}
                            </div>
                          </div>
                          <div className="media-body col-md-7 col-lg-7 col-12 col-sm-12 position-relative">
                            <Link route="project.detail" params={{id: value.id, slug: value.slug}}>
                              <a className="link">
                                <h2 className="font-18">{value && value.name}</h2>
                              </a>
                            </Link>
                            <div className="media-header my-3 p-2">
                              <div className="rounded-circle logo">
                                <LazyLoad once  placeholder={<Placeholder dataSrc={value.providers && value.providers.auth_avatar}/>} debounce={0}>
                                  <img src={value.providers && value.providers.auth_avatar} className="img-fluid h-100 rounded-circle"/>
                                </LazyLoad>
                              </div>

                              <div className="media-title pl-3 d-flex align-items-center">
                                <Link route="pro.detail" params={{id: value.providers.id, slug: value.providers.slug}}>
                                  <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold">{value.providers && value.providers.name}</a>
                                </Link>
                              </div>
                            </div>
                            <div className="media-content mt-3">
                              <span className="more font-14 font-weight-light"
                                    dangerouslySetInnerHTML={{__html: value.descriptions && value.descriptions}}/>
                            </div>
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