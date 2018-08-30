import React from 'react'
import Layout from "./layout";
import Sidebar from "./sideBar";
import Pagination from "./pagination";
import { Link } from "../routes"
import $ from "jquery";

export default class extends React.Component{

  constructor(props){
    super(props)
    const datas = this.props.data.datas
    this.state = {
      nextPage : datas.next_page_url ,
      nextPageLink : datas.next_page_url  ? this.props.url_path+"?page="+(datas.current_page+1) : undefined,
      backPageLink : datas.prev_page_url  ? this.props.url_path+"?page="+(datas.current_page-1) : undefined,
      activePage: datas.current_page,
      projects : this.props.projects
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps){
      const datas = nextProps.data.datas
      this.setState({
        nextPage : datas.next_page_url,
        nextPageLink : datas.next_page_url  ? this.props.url_path+"?page="+(datas.current_page+1) : undefined,
        backPageLink : datas.prev_page_url  ? this.props.url_path+"?page="+(datas.current_page-1) : undefined,
        activePage: datas.current_page,
        projects : nextProps.projects
      });
    }
  }
  componentDidMount(){
    $('.sidebar-service ul').each(function(e){
      if ($(this).find('li').length == $(this).find($('li:visible')).length) {
        $(this).find('.loadmore').hide();
      }
    });
    $('.sidebar-service').on('click','.loadmore',function () {
      var list = $(this).parent().find($('li'));
      $(this).parent().find($('li:hidden')).show();
      if (list.length == $(this).parent().find($('li:visible')).length) {
        $(this).removeClass('loadmore');
        $(this).addClass('hidemore');
        $(this).html('Thu gọn');
      }
    });
    $('.sidebar-service').on('click','.hidemore',function () {
      var list = $(this).parent().find($('li'));
      $(this).parent().find($('li:visible')).slice(5, list.length).hide();
      $(this).removeClass('hidemore');
      $(this).addClass('loadmore');
      $(this).html('Xem thêm');
    });
    $(".close").click(function(event) {
      $(this).parent().toggle();
    });


  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
      // this.getData(pageNumber)
  }
  getPageUrl(i){
    let url = "";
    if(this.props.url_path){
      url = this.props.url_path
    }
    return url+"?page="+i;
  }
  getData = async(pageNumber) => {
    const APIURL = process.env.DOMAIN + process.env.APIURI + 'danh-sach-du-an/?page=';
    const res = await fetch(APIURL + pageNumber);
    const data = await res.json();
    this.setState({
      'projects' : data.datas.data
    });
  }
  render(){
    const {  h1 , filterDefault , page } = this.props;
    const { projects , nextPage , nextPageLink , backPageLink} = this.state;
    return(
      <Layout {...this.props} navmenu={false} container={false} nextPageLink={nextPageLink} backPageLink={backPageLink}>
        <div className="container-fluid service px-4 bg-gray">
          <div className="row">
            <div className="col-0 col-md-3 col-lg-3 px-3" id="sidebar">
              <Sidebar filter={filterDefault} page={page}></Sidebar>
            </div>
            <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
              <div className="bg-white px-3 py-4">
                <h1 className="font-25 font-weight-normal text-black-100">{h1}</h1>
                {/*<div className="service-tag pt-0">*/}
                  {/*<span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">mầu tối <i className="close font-weight-normal font-15"></i></span>*/}
                  {/*<span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">Phòng khách <i className="close font-weight-normal font-15"></i></span>*/}
                  {/*<span className="text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">Phòng họp <i className="close font-weight-normal font-15"></i></span>*/}
                {/*</div>*/}
                <ul className="list-unstyled my-3">
                  {
                    projects && projects.map((value , index) => (
                      <li className="media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container" key={index}>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative px-0">
                            <Link route="project.detail" params={{ id : value.id , slug : value.slug }}>
                              <a className="link"><img src={value.public_avatar} alt="" className="mr-3" /></a>
                            </Link>
                            <div className="position-absolute image-actions py-2">
                              <span className="actions-detail font-16">
                                  <i className="fa fa-picture-o mr-1"></i> {value.total_images + " ảnh"}
                              </span>
                              <span className="actions-detail font-16">
                                  <i className="fa fa-cog mr-1"></i> {value.name_tag_style}
                              </span>
                            </div>
                          </div>
                          <div className="media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative">
                            <Link route="project.detail" params={{ id : value.id , slug : value.slug }}>
                              <a className="link">
                                <h2 className="font-18">{value && value.name}</h2>
                              </a>
                            </Link>
                            <div className="media-header my-3 p-2">
                              <div className="rounded-circle logo">
                                <img src={value.providers && value.providers.path_avatar} className="img-fluid h-100 rounded-circle" />
                              </div>

                              <div className="media-title ml-3">
                                <Link route="pro.detail" params={{ id : value.providers.id , slug : value.providers.slug }}>
                                  <a className="mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold">{value.providers && value.providers.name}</a>
                                </Link>
                                {/*<div className="star-rating">*/}
                                  {/*<span className="fa fa-star" data-rating="1"></span>*/}
                                  {/*<span className="fa fa-star" data-rating="2"></span>*/}
                                  {/*<span className="fa fa-star" data-rating="3"></span>*/}
                                  {/*<span className="fa fa-star" data-rating="4"></span>*/}
                                  {/*<span className="fa fa-star disable" data-rating="5"></span>*/}
                                  {/*<span className="font-italic">(14 đánh giá)</span>*/}
                                {/*</div>*/}
                              </div>
                            </div>
                            <div className="media-content mt-3">
                                <span className="more font-14 font-weight-light" dangerouslySetInnerHTML={{__html : value.descriptions &&  value.descriptions}} />
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
                  pageRangeDisplayed={8}
                  onChange={(e ) => this.handlePageChange(e)}
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