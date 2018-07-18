import React from 'react'
import axios from 'axios'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'image/'
import {rating}  from '../libraries/helpers'
import $ from 'jquery';
import Router from 'next/router';
import Link from 'next/link'
import 'isomorphic-fetch'

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
            currentValue: null
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
                      tag : data.tagSeo,
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
        this.setState({ currentImage : $('img.currentImage') })
        var image_thumb = $('.thumb');
        this.setState({image_thumb : image_thumb});
        var image_id = this.state.image.id;
        image_thumb.each(function(){
            if($(this).data('id') == image_id){
                $(this).addClass('project-thumb--current');
            }
        });
    }
    nextImage= async (e ,id , slug) => {
        e.preventDefault()
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
        // Router.push(`/project?photoId=${id}&id=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)
    }
    backImage = async (e) => {
        e.preventDefault()
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
    }
    render(){
        const { id , slug } = this.props
        return(
            <div>
                <div className="lgBg"></div>
                <div id="image-container">
                    <div id="lbMainControls" className="trackMe d-block d-md-none">
                        <div>
                            <a className="lbCloseButton lbClose" aria-label="Close" href="" data-dismiss="modal" compid="lbCloseButton"></a>
                        </div>
                    </div>
                    <div className="image">
                        {
                           this.state.currentValue &&  <img className="image-detail" src={ this.state.currentValue.path_for_size} fallback="image.path_for_size" alt="image.name" />
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
                    <div id="lbActions">
                        <div id="lbActionCenter" className="offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap">
                            <button className="btn btn-primary med save text-white" title="Save To Ideabook" compid="addToIdeabook"><i className="fa fa-plus pr-2"></i>Lưu ảnh</button><button className="btn bg-black-100 med email text-white" title="send email" compid="addToIdeabook"><i className="fa fa-envelope-o pr-2"></i>Gửi Email</button>
                        </div>
                    </div>
                </div>
                <ImageInfo 
                    provider={this.state.provider} 
                    images={this.state.images} 
                    image={this.state.image} 
                    tag={this.state.tag}
                    changeValue = {(data)=>this.setState({currentValue: data})}
                    currentValue={this.state.currentValue}
                    detail={this.props.detail}
                ></ImageInfo>
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
        this.props.changeValue(value)
    }
    render(){
        const { image ,images , provider , project ,tag ,currentValue ,detail } = this.props
        return (
            <div className="lbInfo">
                <div>
                    <div className="lbInfoTab position-relative d-none d-md-block">
                       {
                           detail ? '' : 
                           <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fa fa-home"></i></a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fa fa-tag"></i></a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i className="fa fa-comment"></i></a>
                                </div>
                            </nav>
                       } 
                    </div>
                </div>
                    <div className="content-mask">
                        <div className="content-scroll">
                            <div className="content-detail">
                                <div className="media">
                                    { provider.auth_avatar && <img src={provider.auth_avatar} className="align-self-start mr-2 rounded-circle detail-user mt-1" /> }
                                    <div className="media-body">
                                        <div className="media-content">
                                            <Link prefetch href={ `/pro/${provider.id}-${provider.slug}` }><a className="font-weight-bold font-14 text-black-100">{ provider.name ? provider.name : 'Chưa có tên'  }</a></Link>

                                            <div className="star-rating font-14">
                                                <span className="text-black-100 font-14">{provider.avg_rate && rating(provider.avg_rate)} ({ provider.total_rate ? provider.total_rate : 0 } người đánh giá)</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-detail border-0">
                                <h2 className="font-15 text-black-100">{currentValue && currentValue.name}</h2>
                                <div className="media-content" id="readMore">
                                        <div className="readMoreWrapper">
                                            <p id="readMoreText" className="font-13 normalText">
                                                {currentValue && currentValue.descriptions}
                                            </p>
                                            <div className="readMoreGradient"></div>
                                        </div>
                                        <button id="readMoreBtn"></button>
                                        <span id="readLessBtnText" style={{'display': 'none'}}>Rút gọn </span>
                                        <span id="readMoreBtnText" style={{'display': 'none'}}>Xem thêm ></span>
                                </div>
                            </div>
                            <div className="content-detail border-0">
                                <h2 className="font-14"><a href="project.url_path" className="text-black-100">Các ảnh trong cùng dự án</a></h2>
                                <ul className="list-unstyled clearfix thumb-grid grid-5">
                                   {
                                       images && images.map((value,index) =>(
                                            <li className="thumb project-thumb" data-id={value.id} ref="'image'+image.id" data-slug={value.slug} key={index}>
                                                <a className="link" onClick={(e) =>  this.changeImage(e,value)}>
                                                    <div className="img-responsive-wrapper img-responsive-square progressive">
                                                        {value.small_path && <img src={value.small_path} alt="image.name" className="img-respontive" id="'image-'+image.id" width="71" height="71"></img>}
                                                    </div>
                                                </a>
                                            </li>
                                       ))
                                   }
                                    
                                </ul>
                                <div className="pt-0">
                                {  
                                    tag.breadcrumbs &&
                                    <a href={tag.breadcrumbs.uri} className="mr-2">
                                    <span className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                                        { tag.breadcrumbs.name_tag }
                                    </span></a>
                                }
                                {   tag.other && tag.other.is_seo == 1 && 
                                    <a href={tag.other.uri} className="mr-2">
                                    <span className="text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2">
                                    { tag.other.name_tag }
                                    </span>
                                    </a>
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