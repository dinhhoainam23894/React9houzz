import React from 'react'
import axios from 'axios'
import 'isomorphic-fetch'
import Layout from './layout';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller'
import ImageModal from './image-modal';
import {mapObject , ucfirst} from '../libraries/helpers'
import {Link} from '../routes'
import $ from 'jquery';
const APIURL = process.env.DOMAIN + process.env.APIURI
var currentPath = '/'
var asPath = '/'
import {Router} from '../routes'
import css from 'styles/fscreen_idea.css'
export default class IdeaComponent extends React.Component{
    state = {
        images: [],
        nextUrl : null,
        hasMoreItems: true,
        h1 : null,
        filter_default : [],
        listBadge : []
    }
    constructor(props){
        super(props)
        currentPath = this.props.path
        asPath = this.props.asPath
    }
    // componentWillMount(){
    //     this.setState({
    //         h1 : this.props.h1,
    //         filter_default : this.props.filter_default,
    //         color : this.props.colors,
    //         images: this.props.images,
    //         nextUrl: this.props.nextUrl,
    //         listBadge : this.props.listBadge ? this.props.listBadge : []
    //     })
    // }
    
    loadItems(page) {
        var self = this;
        var url = '';
        if(this.props.nextUrl) {
            url = this.props.nextUrl;
        }
        if(this.props.nextUrl != null){
            axios.get(url)
            .then(function(resp) {
                if(resp) {
                    var tracks = self.props.images;
                    var data = resp.data
                    data.images.data.map((track) => {
                        tracks.push(track);
                    });
                    if(data.images.next_page_url && data.images.next_page_url != null) {
                        self.props.changeState(tracks,data.images.next_page_url)
                        // self.setState({
                        //     images: tracks,
                        //     nextUrl: data.images.next_page_url,
                        // });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
        }
       
    }
    showPhoto (e, id , slug) {
        e.preventDefault()
        if(this.props.ideaParams){
            var params = this.props.ideaParams
            if(this.props.subParams){
                Router.pushRoute(`/y-tuong/${params}?f=${this.props.subParams}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
            }else{
                Router.push(`${currentPath}?params=${params}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`) 
            }
        }else{
            Router.push(`${currentPath}?photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
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
   
    dismissModal () {
        if(this.props.ideaParams){
            var params = this.props.ideaParams
            if(this.props.subParams){
                Router.pushRoute(`/y-tuong/${params}?f=${this.props.subParams}`)
            }else{
                Router.pushRoute('idea.detail', {params: params})
            }
        }else{
            Router.push('/idea','/y-tuong')
        }
    }
   render(){
        const masonryOptions = {
            gutter: '.grid__gutter-sizer',
            isOriginLeft: true
        };
       const { images , h1 ,filter_default , colors , listBadge , detail} = this.props
       const { photoId , slug } = this.props;
       return(
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
                    <Sidebar filter={filter_default} color={colors}></Sidebar>
                </div>
                <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
                    <div className="bg-white px-3 py-4">
                    <h1 className="text-dark title ml-1">{ h1 && h1 }</h1>
                        <div className="list-tag">
                            {
                                listBadge && listBadge.map((value,index) => (
                                    <Link prefetch route={value.uri} key={index}>
                                        <a href={value.uri} ><span className="badge badge-pill badge-light border border-primary mr-2 my-1 service-tag">{value.name_tag} <i className="close"></i></span></a>
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
                    updateOnEachImageLoad={false}
                    >
                        <div className="grid__col-sizer"></div>
                        <div className="grid__gutter-sizer"></div>
                        {
                            images && images.map((value,index) =>( 
                                <div className="grid__item rounded p-2" key={index}>
                                    <div className="card">
                                        <span className="position-absolute rounded d-none upload"> <i className="fa fa-upload"></i> Lưu ảnh</span>
                                        <Link route="image" params={{ id: value.id , slug : value.slug }}>
                                            <a onClick={(e) =>  this.showPhoto(e, value.id , value.slug)}>
                                            <img className="rounded card-img-top" src={value.medium_path} alt={value.name} />
                                            </a>
                                            </Link>
                                        <div className="card-body idea-content px-0 pt-1">
                                            <h2 className="mt-2 font-13 text-black-100" data-title={value.name}>{value.name}</h2>
                                            <p className="mt-2 images-title font-12 text-black-100 moreDes">{value.descriptions}</p>
                                        </div>
                                    </div>
                                        
                                </div>
                            ))
                        }
                        </Masonry>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
       )
   }
}
class Sidebar extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const { filter , color } = this.props
        return(
            <div className="sidebar-service row bg-white">
                <div className="d-md-block px-2 w-100 sidebar-service-content">
                {
                    filter && filter.map((value,index) => (
                        value.data.length != 0 &&
                        <div className="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0" key={index}>
                            <div className="mt-2 widget p-3">
                            <h3 className="font-15 mb-3">{value.textName}<span className="fa fa-chevron-right d-block d-md-none"  data-toggle="collapse" data-target="#demoTest"></span></h3>
                            <ul className="list-unstyled mb-0 collapse d-md-block" id="demoTest">
                                {
                                    value.data && mapObject(value.data, function (index, value) {
                                        return <li className="py-1 radio" key={index}>
                                            <Link prefetch route={value.uri}>
                                            <a className="font-13 font-weight-light text-gray"><label className="pr-3">{value.name_tag}<span>{value.total_doc}</span></label></a>
                                            </Link>
                                        </li>
                                    })
                                }
                                <span className="more loadmore d-none d-md-block">Xem thêm <i className="la la-arrow-circle-right"></i></span>
                            </ul>
                            </div>
                        </div>
                        
                    ))
                }  
                    <div className="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0">
                        <div className="mt-2 widget p-3">
                            <h3 className="font-15">MÀU SẮC</h3>
                            <span className="expand-list"></span>
                            <div className="service-color mt-3">
                            {
                                color && mapObject(color , function(index,value) {
                                   return  <a href={value.uri} className="text-dark border border-gray" key={index}><span className={"float-left " + value.class} data-toggle="tooltip" title={value.name_tag}></span></a>
                                })
                            }  
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        )
    }
}