import { Component } from 'react'
import Link from 'next/link'
import ProviderDetail from '../../components/pro-detail';
import ProviderSidebar from '../../components/provider-sidebar';
import ListProject from '../../components/list-project';
import axios from 'axios'
import 'isomorphic-fetch'
import $ from 'jquery';
import css from './provider.css'

const APIURL = process.env.DOMAIN + process.env.APIURI + 'provider/'
export default class Pro extends Component {
    
  static async getInitialProps({ query }) {
    const res  = await fetch(APIURL+query.id)
    const data = await res.json()
    const resProject = await fetch(APIURL+query.id+"?projects")
    const dataProject = await resProject.json()
    return { id: query.id 
            , data:dataProject 
            , provider : dataProject.provider 
            , projects : dataProject.projects.data
            , h1 : data.seo.h1 
            , title : data.seo.title
            , des : data.seo.des
            , canonical : data.seo.canonical
            , robots : data.seo.robots
            , og_url : data.seo.url
            , url_images : data.seo.url_image
            , headerProjects : data.headerProjects
            , headerCategories : data.headerCategories
            , dataBase : data.dataBase
            }
  } 
  constructor(props){
    super(props)
    this.state = {
        data : {},
        provider : {},
        projects : {},
    }

  } 
  componentDidMount = async () =>{
        var $max = 220;
        var $height = $('#readMoreText').css('height','auto').height();
        if($height < $max){
            $("#readMoreBtn").hide();
        }else{
            var $height = $('#readMoreText').css('height','220px');
            var $readMore = $("#readMoreBtnText").text();
            var $readLess = $("#readLessBtnText").text();
            $("#readMoreBtn").text($readMore);
            $("#readMoreBtn").append("<span class=\"fa fa-angle-down font-15\"></span>");
            $('#readMoreBtn').click(function(){
                var $this = $(this);
                $("#readMoreBtn").text($readMore);
                if($this.data('expanded') == "yes"){
                    $this.data('expanded',"no");
                    $("#readMoreBtn").text($readMore);
                    $("#readMoreBtn").append("<span class=\"fa fa-angle-down font-15\" ></span>");
                    $('#readMoreText').animate({height:'220px'});
                }else{
                    $this.data('expanded',"yes");
                    $('#readMoreText').css({height:'auto'});
                    $("#readMoreBtn").text($readLess);
                    $("#readMoreBtn").append("<span class=\"fa fa-angle-up font-15\"></span>");
                }
            });
        }
  }
  
  render() {  
    const {data , provider , projects} = this.props
    const movieItems = [];
    const moreProject = [];
    if(projects.length > 0){
        let i = 0;
        projects.map(function(e){
            if(i< 6){
                movieItems.push(<div className="col-md-6 col-lg-6 col-12 pl-0 pr-4 pb-3 project-image rounded-2" key={e.id}>
                    <ListProject project={e}></ListProject>
                </div>);
            }
            i++;
        })
    }
    if(data.project_count > 6){
        moreProject.push(<div className="col-md-4 offset-md-4 mt-3" key="project_count">
            <Link href={ `/pro/${this.props.id}-${provider.slug}/dự-án` }>
                <a className="btn btn-primary w-100 font-weight-normal text-white">Xem thêm <span className="number-project">({data.project_count - 6})</span> dự án</a>
            </Link>
        </div>);
    }
    
    return (
      <ProviderDetail provider_id={this.props.id} provider_slug={provider.slug} data={data} {...this.props} css={css}>
      <div className="container">
              <div className="row">
                  <div className="col-0 col-md-3 col-lg-3 provider-sidebar p-0 mt-2" id="sidebar">
                      <ProviderSidebar provider={provider}></ProviderSidebar>
                  </div>
                  <div className="col-12 col-md-9 col-lg-9 mt-2">
                    <div className="provider-about">
                        <div className="about pb-3 px-4">
                            <div id="readMore">
                                <div className="readMoreWrapper">
                                    <div id="readMoreText" className="font-14">
                                        <h3 dangerouslySetInnerHTML={{__html: provider.about_content}}></h3>
                                    </div>
                                    <div className="readMoreGradient"></div>
                                </div>
                                <button id="readMoreBtn" className="float-left mt-4"></button>
                                <span id="readLessBtnText" style={ {display: "none" } }>Rút gọn <span className="fa fa-angle-up"></span></span>
                                <span id="readMoreBtnText" style={ {display: "none" } }>Xem thêm <span className="fa fa-angle-down"></span></span>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="provider-moreinfo mt-4 w-100">
                  <div className="float-right left-info">
                      <div className="header-6 top mb-3">
                          <a className="text-dark font-25" href="">
                              {data.project_count+" Dự án"}<span className="fa fa-angle-right font-22"></span>
                          </a>
                      </div>
                      <div className="row m-0">
                        {
                            movieItems
                        }
                        {
                            moreProject
                        }
                      </div>
                  </div>
               
              </div>
              <div className="row mt-3">
              </div>
            </div>
      </ProviderDetail>
     
    )
  }
}