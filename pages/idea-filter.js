import React from 'react'
import IdeaComponent from '../components/IdeaComponent'
const APIURL = process.env.DOMAIN + process.env.APIURI

export default class IdeaFilter extends React.Component{
    static async getInitialProps({query}){
        let res = null;
        if(query.f){
             res = await fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + `?f=${query.f}`)
        }else{
            res = await fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params))
        }
        const data = await res.json()
        return {    h1 : data.h1,
                    filter_default : data.filter_default,
                    colors : data.colors,
                    images: data.images.data,
                    nextUrl: data.images.next_page_url,
                    params: query.params,
                    subParams : query.f,
                    listBadge : data.listBadge
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
    }
    render(){
        const { params , url ,subParams} = this.props   
        return(
            <IdeaComponent 
                {...this.props}
                photoId={this.props.url.query && this.props.url.query.photoId}
                ideaParams={params}
                subParams={subParams}
                asPath={url.asPath}
                detail={true}
                changeState={(images,nextPage)=>{this.setState({images : images , nextUrl : nextPage})}}
                path={url.pathname}>
            </IdeaComponent>
        )
    }
}