import React from 'react'
import axios from 'axios'
import Layout from '../components/layout';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller'
import ImageModal from '../components/image-modal';
import {mapObject , ucfirst} from '../libraries/helpers'
const APIURL = 'http://9houzz.stag:89/api/'
import Router from 'next/router';

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: [],
            nextUrl : null,
            hasMoreItems: true,
            h1 : null,
            filter_default : []
        }
    }
    loadItems(page) {
        var self = this;
        var url = APIURL + 'y-tuong';
        if(this.state.nextUrl) {
            url = this.state.nextUrl;
        }
        axios.get(url)
            .then(function(resp) {
                if(resp) {
                    var tracks = self.state.images;
                    var data = resp.data
                    data.images.data.map((track) => {
                        tracks.push(track);
                    });
                    if(data.images && data.images.next_page_url) {
                        self.setState({
                            images: tracks,
                            nextUrl: data.images.next_page_url,
                            h1 : data.h1,
                            filter_default : data.filter_default
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }
    showPhoto (e, id) {
        e.preventDefault()
        Router.push(`/idea?photoId=${id}`,`/anh/${id}`)
    }
    dismissModal (id) {
        Router.push(`/y-tuong`)
      }
   render(){
  
        const masonryOptions = {
            gutter: '.grid__gutter-sizer',
            isOriginLeft: true
        };
       const { images , h1 ,filter_default} = this.state
       const { url } = this.props
       return(
        <Layout {...this.props} navmenu={false} container={false}>
        {
            url.query.photoId &&
            <ImageModal
                id={url.query.photoId}
                onDismiss={() => this.dismissModal(url.query.id)}
            />
        }
        <div className="container-fluid service px-4 bg-gray">
            <div className="row">
                <div className="col-0 col-md-3 col-lg-3 px-3" id="sidebar">
                    <Sidebar filter={filter_default}></Sidebar>
                </div>
                <div className="col-12 col-md-9 col-lg-9 px-0" id="cat">
                    <div className="bg-white px-3 py-4">
                    <h1 className="text-dark title ml-1 pt-3">{ h1 && h1 }</h1>
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
                        
                                <div className="grid__item rounded p-1" key={index}>
                                    <div className="grid__images">
                                        <div className="position-relative">
                                            <span className="position-absolute rounded d-none upload"> <i className="fa fa-upload"></i> </span>
                                            
                                            <a  onClick={(e) =>  this.showPhoto(e, value.id)}>
                                                <img className="rounded" src={value.medium_path} alt="{{ $element->name }}" />
                                            </a>
                                            
                                        </div>
                                    </div>
                                    <div className="position-relative idea-content">
                                        <h2 className="mt-2 font-13 text-black-100" data-title="{{ $element->name }}">{value.name}</h2>
                                        <p className="mt-2 images-title font-12 text-black-100 moreDes">{value.descriptions}</p>
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
        const { filter } = this.props
        return(
            <div className="sidebar-service row bg-white">
                <div className="d-md-block px-2 w-100 sidebar-service-content">
                {
                    filter && filter.map((value,index) => (
                        <div className="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0" key={index}>
                            <div className="mt-2 widget p-3">
                            <h3 className="font-15 mb-3">{value.textName}<span className="fa fa-chevron-right d-block d-md-none"  data-toggle="collapse" data-target="#demoTest"></span></h3>
                            <ul className="list-unstyled mb-0 collapse d-md-block" id="demoTest">
                                {
                                    value.data && mapObject(value.data, function (index, value) {
                                        return <li className="py-1 radio" key={index}>
                                            <a href={value.uri} className="font-13 font-weight-light text-gray"><label className="px-3">{value.name_tag}<span>{value.total_doc}</span></label></a>
                                        </li>
                                    })
                                }
                                
                                <span className="more loadmore d-none d-md-block">Xem thêm <i className="la la-arrow-circle-right"></i></span>
                            </ul>
                            </div>
                        </div>
                    ))
                }    
              
                </div>
            </div>
        )
    }
}