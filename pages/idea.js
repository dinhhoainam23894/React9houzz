import React from 'react'
import IdeaComponent from '../components/IdeaComponent'
import 'isomorphic-fetch'
import { withRouter } from 'next/router'
import { checkbot } from "../libraries/helpers";

const APIURL = process.env.DOMAIN + process.env.APIURI

class Idea extends React.Component{
    static async getInitialProps({req , query}){
      let res = "";
      if(query.page){
         res = await fetch(APIURL+`y-tuong?page=${query.page}`)
      }else{
         res = await fetch(APIURL+"y-tuong")
      }

        const data = await res.json()
      let url_path= '/y-tuong/';
        return {    data : data,
                    h1 : data.h1,
                    filter_default : data.filter_default,
                    colors : data.colors,
                    images: data.images.data,
                    page : data.page,
                    nextUrl: data.images.next_page_url
                    , title : data.seo.title
                    , des : data.seo.des
                    , canonical : data.seo.canonical
                    , robots : data.seo.robots
                    , og_url : data.seo.url
                    , url_images : data.seo.url_image
                    , headerProjects : data.headerProjects
                    , headerCategories : data.headerCategories
                    , dataBase : data.dataBase
                    , headers : req && req.headers,
                    url_path : url_path,
        }
    }
    constructor(props){
        super(props)
        this.state = {
            nextUrl : this.props.nextUrl,
            images : this.props.images
        }
    }
    
   render(){
       const { router } = this.props
       return(
            <IdeaComponent 
                {...this.props}
                photoId={this.props.router.query && this.props.router.query.photoId}
                asPath={router.asPath}
                path={router.pathname}
                nextUrl={this.state.nextUrl}
                images={this.state.images}
                detail={true}
                changeState={(images,nextPage)=>{this.setState({images : images , nextUrl : nextPage})}}
                >
            </IdeaComponent>
       )
   }
}

export  default withRouter(Idea)