import React from 'react'
import axios from 'axios'
import 'isomorphic-fetch'
import Layout from './layout'
import Sidebar from './sideBar'
import Masonry from 'react-masonry-component'
import InfiniteScroll from 'react-infinite-scroller'
import ImageModal from './image-modal'
import {Link} from '../routes'
import $ from 'jquery';
var currentPath = '/'
var asPath = '/'
import {Router} from '../routes'
import css from 'styles/fscreen_idea.css'
import LazyLoad ,{ forceCheck } from "react-lazyload";
import Placeholder from "./PlaceHolder";
import Pagination from "./pagination";

export default class IdeaComponent extends React.Component {
  state = {
    images: [],
    nextUrl: null,
    hasMoreItems: true,
    h1: null,
    filter_default: [],
    listBadge: []
  }

  constructor(props) {
    super(props)
    currentPath = this.props.path
    asPath = this.props.asPath

  }

  loadItems(page) {
    var self = this;
    var url = '';
    if (this.props.nextUrl) {
      url = this.props.nextUrl;
    }
    if (this.props.nextUrl != null) {
      axios.get(url)
        .then(function (resp) {
          if (resp) {
            var tracks = self.props.images;
            var data = resp.data
            data.images.data.map((track) => {
              tracks.push(track);
            });
            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.props.changeState(tracks, data.images.next_page_url)
            } else {
              self.setState({
                hasMoreItems: false
              });
            }
          }
        });
    }

  }
  getPageUrl(i) {
    let url = "";
    if (this.props.url_path) {
      url = this.props.url_path
    }
    return url + "?page=" + i;
  }
  showPhoto(e, id, slug) {
    e.preventDefault()
    if (this.props.ideaParams) {
      var params = this.props.ideaParams
      if (this.props.subParams) {
        Router.push(`${currentPath}?params=${params}&f=${this.props.subParams}&photoId=${id}&slug=${slug}`, `/anh/${id}-${slug}`)
      } else {
        Router.push(`${currentPath}?params=${params}&photoId=${id}&slug=${slug}`, `/anh/${id}-${slug}`)
      }
    } else {
      Router.push(`${currentPath}?photoId=${id}&slug=${slug}`, `/anh/${id}-${slug}`)
    }
  }
  componentDidMount() {
    var showChar = 150;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Xem thêm >";
    var lesstext = "Rút gọn <";
    const self = this;
    $('.moreDes').each(function (e) {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
      }

    });
    $(".morelink").click(function (e) {
      e.preventDefault()
      if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
      } else {
        $(this).addClass("less");
        $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      self.masonry.performLayout();
      return false;
    });
    $('.sidebar-service ul').each(function (e) {
      if ($(this).find('li').length == $(this).find($('li:visible')).length) {
        $(this).find('.loadmore').hide();
      }
    });
    $('.sidebar-service').on('click', '.loadmore', function () {
      var list = $(this).parent().find($('li'));
      $(this).parent().find($('li:hidden')).show();
      if (list.length == $(this).parent().find($('li:visible')).length) {
        $(this).removeClass('loadmore');
        $(this).addClass('hidemore');
        $(this).html('Thu gọn');
      }
    });
    $('.sidebar-service').on('click', '.hidemore', function () {
      var list = $(this).parent().find($('li'));
      $(this).parent().find($('li:visible')).slice(5, list.length).hide();
      $(this).removeClass('hidemore');
      $(this).addClass('loadmore');
      $(this).html('Xem thêm');
    });
    $(".close").click(function (event) {
      $(this).parent().toggle();
    });
  }
  componentDidUpdate() {
    forceCheck();
    $('.idea-content').find($('.moreDes:visible')).hide();
    $('.idea-content').find($('.moreDes')).slice(0, 20).show();
  }
  dismissModal() {
    if (this.props.ideaParams) {
      var params = this.props.ideaParams
      if (this.props.subParams) {
        Router.pushRoute(`/y-tuong/${params}?f=${this.props.subParams}`)
      } else {
        Router.pushRoute('idea.detail', {params: params})
      }
    } else {
      Router.push('/idea', '/y-tuong')
    }
  }
  render() {
    const datas = this.props.data.images;
    var nextPageLink =  datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined;
    const masonryOptions = {
      gutter: '.grid__gutter-sizer',
      isOriginLeft: true
    };
    const {images, h1, filter_default, colors, listBadge, detail, page} = this.props
    const {photoId, slug} = this.props;
    return (
      <Layout {...this.props} navmenu={false} container={false} css={css}>
        {
          photoId ?
            <ImageModal
              id={photoId}
              slug={slug}
              detail={detail}
              images={images}
              currentPath={currentPath}
              ideaParams={this.props.ideaParams}
              subParams={this.props.subParams}
              nextPageUrl={this.state.nextUrl}
              onDismiss={() => this.dismissModal()}
            /> : ''
        }
        <style jsx global>{
          `
            #lightbox .nav-link:first-child{
                border-left: 1px solid #e2e2e2 !important;
            }
            #lightbox .nav-link {
                display: block;
                padding: 0.4rem 0.7rem !important;
                border-left: none !important;
                border-color: #e2e2e2;
            }
            `
        }
        </style>
        <div className="container-fluid service px-4 bg-gray">
          <div className="row">
            <div className="col-0 col-md-3 col-lg-3 px-3" id="sidebar">
              <Sidebar filter={filter_default} color={colors} page={page} />
            </div>
            <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
              <div className="bg-white px-3 py-4">
                <h1 className="text-dark title ml-1">{h1 && h1}</h1>
                <div className="list-tag">
                  {listBadge && listBadge.map((value, index) => (
                    <Link route={value.uri} key={index}>
                      <a href={value.uri}>
                        <span className="badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">{value.name_tag}
                        <i className="close" /></span></a>
                    </Link>
                  ))
                  }
                </div>
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadItems.bind(this)}
                  hasMore={this.state.hasMoreItems}
                  loader={<div className="loader" key='cx'>Loading ...</div>}>
                  <Masonry
                    className={'.grid are-images-unloaded mt-3'}
                    disableImagesLoaded={false}
                    options={masonryOptions}
                    ref={c => this.masonry = c}
                    updateOnEachImageLoad={false}
                  >
                    <div className="grid__col-sizer" />
                    <div className="grid__gutter-sizer" />
                    {
                      images && images.map((value, index) => (
                        <div className="grid__item rounded" key={index}>
                          <div className="card">
                            <span className="position-absolute rounded d-none upload"> <i className="fa fa-upload"></i> Lưu ảnh</span>
                            <Link route="image" params={{id: value.id, slug: value.slug}}>
                              <a onClick={(e) => this.showPhoto(e, value.id, value.slug)}>
                                <LazyLoad once throttle placeholder={<Placeholder dataSrc={value.medium_path} alt={value.name} width={value.image_infos.width} height={value.image_infos.height}/>}>
                                  <img className="rounded card-img-top" src={value.medium_path}/>
                                </LazyLoad>
                              </a>
                            </Link>
                            <div className="card-body idea-content px-1 pt-1">
                              <h2 className="mt-2 font-15 text-black-100" data-title={value.name}>{value.name}</h2>
                              <p className="mt-2 images-title font-14 text-black-100 moreDes"
                                 dangerouslySetInnerHTML={{__html: value.descriptions}} />
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </Masonry>
                </InfiniteScroll>
              </div>
              <div className="pagi_desktop my-4">
                <Pagination
                  activePage={this.props.data.images.current_page}
                  itemsCountPerPage={this.props.data.images.per_page}
                  totalItemsCount={this.props.data.images.total}
                  pageRangeDisplayed={5}
                  onChange={(e) => this.handlePageChange(e)}
                  getPageUrl={(i) => this.getPageUrl(i)}
                  nextPageLink={nextPageLink}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
