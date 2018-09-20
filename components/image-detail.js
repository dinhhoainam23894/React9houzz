import React from 'react'
import axios from 'axios'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'image/'
import {rating}  from '../libraries/helpers'
import $ from 'jquery';
import Router from 'next/router'
import {Link} from '../routes'
import 'isomorphic-fetch'
import { throws } from 'assert';
import LazyLoad from "react-lazyload";
import Placeholder from "./PlaceHolder";

export default class Image extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : {},
            provider: {},
            project: {},
            image:{},
            images: [],
            tag : [],
            currentImage : {},
            image_thumb: {},
            idActive: null,
            currentValue: null,
            detail : false,
            listIdea : [],
            nextPageUrl : null,
            backPageUrl : null,
        }
    }
    async getValue(id) {
        let data;
        await axios.get(APIURL + id)
            .then(res => {
                data = res.data;
                this.setState(
                    { image: data.image ,
                      project: data.project,
                      images: data.list_images ,
                      provider: data.provider,
                      tag : data.listTag,
                      currentValue: data.image
                    }
                )
            })
    }
    componentWillMount(){
        if(this.props.data){
            this.setState(
                { 
                  image: this.props.data.image ,
                  project: this.props.data.project,
                  images: this.props.data.images ,
                  provider: this.props.data.provider,
                  tag : this.props.data.tag,
                  currentValue: this.props.data.image
                }
            )
        }
    }
    componentDidMount = async () => {
        if(!this.props.data){
            await this.getValue(this.props.id)
        }
        this.setState({
            detail : this.props.detail,
            listIdea : this.props.images,
            nextPageUrl : this.props.nextPageUrl
        })
        this.setState({ currentImage : $('img.currentImage') })
        var image_thumb = $('.thumb');
        this.setState({image_thumb : image_thumb});
        var image_id = this.state.image.id;
        if(this.state.detail == false){
            image_thumb.each(function(){
                if($(this).data('id') == image_id){
                    $(this).addClass('project-thumb--current');
                }
            });
        }
    }
    nextImage = async (e ,id , slug) => {
        e.preventDefault()
        if(this.state.detail == false){
            this.nextProject(this.state.currentValue.id,this.state.currentValue.slug)
        }else{
            this.nextIdea(this.state.currentValue.id)
        }
    }
    nextIdea = async (id) => {
        var startIndex = 0 ;
        var currentIndex = 0;
        $.each(this.state.listIdea,($key,$value) => {
                if($value.id  == id){
                    startIndex = $key;
                }
        }); 
        if (startIndex == this.state.listIdea.length - 1) {
            this.getFullImage(this.state.nextPageUrl, 'next');
        }else{
            currentIndex = startIndex + 1;
            var nextImage = this.state.listIdea[currentIndex];
            await this.pushStateUrl(nextImage.id,nextImage.slug)
            await this.getValue(nextImage.id)
        }
        
    }
    nextProject = async (id,slug) => {
        var image_size = this.state.image_thumb.length - 1;
        var currentIndex = this.state.currentImage;
        var lastIndex = 0;
        this.state.image_thumb.each(function () {
            if ($(this).hasClass('project-thumb--current')) {
                currentIndex  = $(this).index()
                if (currentIndex < image_size) {
                    lastIndex = currentIndex + 1;
                } else {
                    lastIndex = 0;
                }
                $(this).removeClass('project-thumb--current');

            }
        });
        this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');
        var lastImage = this.state.image_thumb.eq(lastIndex);
        var nextId = lastImage.data('id');
        var nextSlug  = lastImage.data('slug');
        this.setState({currentImage : $('img.currentImage')});
        this.setState({currentValue : this.state.images[lastIndex]})
        if(this.props.popup == false){
            this.pushStateProject(id,slug,nextId,nextSlug)
            // Router.push(`/project?photoId=${id}&id=${this.state.project.id}`,`/anh/${nextId}-${nextSlug}`)
        }else{
            await this.pushStateUrl(nextId,nextSlug)
        }
    }
    backImage = async (e) => {
        e.preventDefault()
       if(this.state.detail == false){
           this.backProject(this.state.currentValue.id,this.state.currentValue.slug)
       }else{
           this.backIdea(this.state.currentValue.id)
       }
    }
    backProject = async (id , slug) => {
        var image_size = this.state.image_thumb.length - 1;
        var currentIndex = this.state.currentImage;
        var lastIndex = 0;
        this.state.image_thumb.each(function () {
            if ($(this).hasClass('project-thumb--current')) {
                currentIndex  = $(this).index()
                if (currentIndex > 0 ) {
                    lastIndex = currentIndex - 1;
                } else {
                    lastIndex = image_size;
                }
                $(this).removeClass('project-thumb--current');

            }
        });
        this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');
        var lastImage = this.state.image_thumb.eq(lastIndex);
        var nextId = lastImage.data('id');
        var nextSlug  = lastImage.data('slug');
        this.setState({currentImage : $('img.currentImage')});
        this.setState({currentValue : this.state.images[lastIndex]})
        if(this.props.popup == false){
            this.pushStateProject(id,slug,nextId,nextSlug)
            // Router.pushRoute(`/anh/${id}-${slug}`,`/anh/${nextId}-${nextSlug}`)
        }else{
            await this.pushStateUrl(nextId,nextSlug)
        }
    }
    backIdea = async (id) => {
        var startIndex = 0 ;
        var currentIndex = 0;
        $.each(this.state.listIdea,function($key,$value){
                if($value.id  == id){
                    startIndex = $key;
                }
        }); 
        if (startIndex == 0 && this.state.backPageUrl != null) {
            this.getFullImage(this.state.backPageUrl, 'back');
        }else{
            currentIndex = startIndex - 1;
            var backImage = this.state.listIdea[currentIndex];
            await this.pushStateUrl(backImage.id,backImage.slug)
            await this.getValue(backImage.id)
        }
        
    }
    pushStateUrl(id , slug){
        if(this.props.ideaParams){
            var params = this.props.ideaParams
            if(this.props.subParams){
                Router.push(`${this.props.currentPath}?params=${params}&f=${this.props.subParams}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
            }else{
                Router.push(`${this.props.currentPath}?params=${params}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
            }
        }else{
            Router.push(`${this.props.currentPath}?photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
        }
    }
    pushStateProject(id,slug , nextId , nextSlug){
        if(this.props.isImage==true && this.props.isImage){
            Router.push(`/image?id=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)
        }else{
          if(this.props.ideaParams){
            var params = this.props.ideaParams
            if(this.props.subParams){
              Router.push(`${this.props.currentPath}?params=${params}&f=${this.props.subParams}&photoId=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)
            }else{
              Router.push(`${this.props.currentPath}?params=${params}&photoId=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)
            }
          }else{
            Router.push(`${this.props.currentPath}?photoId=${id}&id=${this.state.project.id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)
          }
        }
    }
    getFullImage = async (url, func) => {
        switch (func) {
            case 'next' :
                await axios.get(url).then(response => {
                    var data = response.data;
                    this.setState({
                        listIdea : data.images.data,
                        nextPageUrl : data.images.next_page_url,
                        backPageUrl : data.images.prev_page_url
                    })
                    var currentIndex = 0;
                    let nextImage = this.state.listIdea[currentIndex];
                    this.pushStateUrl(nextImage.id,nextImage.slug)
                    this.getValue(nextImage.id)
                });
                break;
            case 'back' :
                axios.get(url).then(response => {
                    var data = response.data;
                    this.setState({
                        listIdea : data.images.data,
                        nextPageUrl : data.images.next_page_url,
                        backPageUrl : data.images.prev_page_url
                    })
                    var currentIndex = this.state.listIdea.length - 1
                    let backImage = this.state.listIdea[currentIndex];
                    this.pushStateUrl(backImage.id,backImage.slug)
                    this.getValue(backImage.id)
                });
                break;
        }
    }
    render(){
        const { id , slug } = this.props
        return(
            <div>
                <div id="image-container">
                    <div className="image">
                        {
                           this.state.currentValue &&
                           <LazyLoad once offset={[-200, 0]} placeholder={<Placeholder />} debounce={0}>
                            <img className="image-detail" src={ this.state.currentValue.path_for_size} alt={this.state.currentValue.name} />
                           </LazyLoad>
                        }
                    </div>
                    <div className="lb-navDiv">
                        <a className="link next lbNavigation nav-arrow" onClick={(e) =>  this.nextImage(e,id,slug)}>
                            <div className="">
                                <span className="fa fa-angle-right"></span>
                            </div>
                        </a>
                        <a className="link back lbNavigation nav-arrow" onClick={(e) =>  this.backImage(e)}>
                            <div className="">
                                <span className="fa fa-angle-left"></span>
                            </div>
                        </a>
                    </div>
                    <div id="lbActions" className="d-none d-md-block">
                        <div id="lbActionCenter" className="offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap">
                            <button className="btn btn-primary med save text-white mr-3" title="Save To Ideabook" compid="addToIdeabook"><i className="fa fa-plus pr-2"></i>Lưu ảnh</button>
                            <button className="btn bg-black-100 med email text-white" title="send email" compid="addToIdeabook"><i className="fa fa-envelope-o pr-2"></i>Gửi Email</button>
                        </div>
                    </div>
                </div>
                <ImageInfo 
                    provider={this.state.provider} 
                    images={this.state.images} 
                    image={this.state.image} 
                    tag={this.state.tag}
                    project={this.state.project}
                    changeValue = {(data)=>this.setState({currentValue: data , detail : false})}
                    currentValue={this.state.currentValue}
                    detail={this.props.detail}
                    pushStateProject={(id,slug,nextId,nextSlug)=>{this.pushStateProject(id,slug,nextId,nextSlug)}}
                />
            </div>
        )
    }
}

class ImageInfo extends React.PureComponent{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var $readMore = $("#readMoreBtnText").text();
            var $readLess = $("#readLessBtnText").text();

            $("#readMoreBtn").text($readMore);
            $('#readMoreBtn').click(function(){
                var $this = $(this);
                $("#readMoreBtn").text($readMore);
                if($this.data('expanded') == "yes"){
                    $this.data('expanded',"no");
                    $("#readMoreBtn").text($readMore);
                    $('#readMoreText').animate({height:'100px'});
                }else{
                    $this.data('expanded',"yes");
                    $('#readMoreText').css({height:'auto'});
                    $("#readMoreBtn").text($readLess);

                }
            });
    }
    changeImage (e , value) {
        e.preventDefault()
        var $this = $(e.target).parents('li');
        var thumb = $('.thumb');
        thumb.removeClass('project-thumb--current');
        $this.addClass('project-thumb--current');
        this.props.pushStateProject(this.props.image.id,this.props.image.slug, value.id , value.slug)
        this.props.changeValue(value)
    }
    render(){
        const { image ,images , provider , project ,tag ,currentValue ,detail } = this.props
        return (
            <div className="lbInfo">
                <div>
                    <div className="lbInfoTab position-relative d-none d-md-block">
                           <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fa fa-home"></i></a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fa fa-tag"></i></a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i className="fa fa-comment"></i></a>
                                </div>
                            </nav>
                    </div>
                </div>
                    <div className="content-mask">
                        <div className="content-scroll">
                            <div className="content-detail">
                                <div className="media">
                                    { provider &&
                                    <LazyLoad once offset={[-200, 0]} placeholder={<Placeholder />} debounce={0}>
                                      <img src={provider.auth_avatar} className="align-self-start mr-2 rounded-circle detail-user mt-1" />
                                    </LazyLoad>}
                                    <div className="media-body">
                                        <div className="media-content">
                                          {
                                              provider &&
                                              <Link route={ `/pro/${provider.id}-${provider.slug}` }>
                                                <a className="font-weight-bold font-14 text-black-100">{ provider ? provider.name : 'Chưa có tên'  }</a>
                                              </Link>
                                          }
                                            <div className="star-rating font-14">
                                                <span className="text-black-100 font-14">{provider && rating(provider.avg_rate)}{provider ? "("+provider.total_rate+" người đánh giá"+")" : "(0 người đánh giá)"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-detail border-0">
                            <ol className="breadcrumb bg-white pl-0 mb-0 pt-0 mt-0">
                                <li className="breadcrumb-item" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                    <Link route={'y-tuong'}><a  itemProp="url"><span itemProp="title" className="font-13">Tất cả</span></a></Link>
                                </li>
                                {tag.breadcrumbs && <li className="breadcrumb-item" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                                    <Link route={tag.breadcrumbs.uri}><a  itemProp="url"><span itemProp="title" className="font-13">{tag.breadcrumbs.name_tag}</span></a></Link>
                                </li>}
                            </ol>
                                <h1 className="font-16 text-black-100">{currentValue && currentValue.name}</h1>
                                <div className="media-content" id="readMore">
                                        <div className="readMoreWrapper">
                                            {currentValue &&
                                                <p id="readMoreText" className="font-14 normalText" dangerouslySetInnerHTML={{__html: currentValue.descriptions}}/>
                                            }
                                            <div className="readMoreGradient" />
                                        </div>
                                        <button id="readMoreBtn" className="pl-0"/>
                                        <span id="readLessBtnText" style={{'display': 'none'}}>Rút gọn </span>
                                        <span id="readMoreBtnText" style={{'display': 'none'}}>Xem thêm ></span>
                                </div>
                            </div>
                            <div className="content-detail border-0">
                                <h2 className="font-14">
                                Ảnh trong "<Link route={ `/du-an/${project.id}-${project.slug}` }>
                                 <a className="text-black-100">{project.name}</a>
                                </Link>"
                                </h2>
                                <ul className="list-unstyled clearfix thumb-grid grid-5">
                                   {
                                       images && images.map((value,index) =>(
                                            <li className="thumb project-thumb" data-id={value.id} ref="'image'+image.id" data-slug={value.slug} key={index}>
                                                <a className="link" href={`/anh/${value.id}-${value.slug}`} onClick={(e) =>  this.changeImage(e,value)}>
                                                    <div className="img-responsive-wrapper img-responsive-square">
                                                        {
                                                            value.small_path &&
                                                            <LazyLoad once={value.once} offset={200}  placeholder={<Placeholder />} debounce={0}>
                                                                <img src={value.small_path} className="img-respontive" id={"image-"+value.id} width="71" height="71"/>
                                                            </LazyLoad>
                                                        }
                                                    </div>
                                                </a>
                                            </li>
                                       ))
                                   }
                                </ul>
                                <div className="pt-0">
                                {  
                                    tag.breadcrumbs &&
                                    <Link route={tag.breadcrumbs.uri}><a href={tag.breadcrumbs.uri} className="mr-2">
                                    <span className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                                        { tag.breadcrumbs.name_tag }
                                    </span></a></Link>
                                }
                                {   tag.other  && tag.other.map((value,index) => (
                                        value.is_seo == 1 ?
                                        <Link route={value.uri} key={index}><a href={value.uri} className="mr-2" key={index}>
                                            <span className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                                            { value.name_tag }
                                            </span>
                                        </a></Link> : ''
                                    ))
                                    
                                }
                                </div>  
                            </div>
                            <div className="content-detail border-0">
                                <div className="header row m-0">
                                    <h2 className="font-14 text-black-100">Hỏi đáp về hình ảnh</h2>
                                    <span className="col-xs-12 col-md-12 px-0"><button id="askQuestionButton" className="btn border-primary btn-block text-primary font-13" compid="lbAsk">Đặt câu hỏi của bạn</button></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           
        )
    }
} 