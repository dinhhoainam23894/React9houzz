import React from 'react'
import IdeaComponent from '../components/IdeaComponent'
const APIURL = process.env.DOMAIN + process.env.APIURI
import { withRouter } from 'next/router'

class IdeaFilter extends React.Component{
    static async getInitialProps({query , req}){
        let res = null;
      let url_path= '/y-tuong/'+query.params;
        if(query.f){
          if(query.page){
            res = await fetch(APIURL+'y-tuong/'+ encodeURIComponent(query.params) + `?f=${query.f}` + `&page=${query.page}`)
          }else{
            res = await fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + `?f=${query.f}`)
          }
          url_path = '/y-tuong/'+query.slug + `?f=${query.f}`;
        }else{
          if(query.page){
            res = await fetch(APIURL+'y-tuong/'+ encodeURIComponent(query.params) + `?page=${query.page}`)
          }else{
            res = await fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params))
          }
        }

        const data = await res.json()
        return {
                    data : data,
                    url_path : url_path,
                    h1 : data.h1,
                    filter_default : data.filter_default,
                    colors : data.colors,
                    images: data.images.data,
                    page : data.page,
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
                    , dataBase : data.dataBase,
                     headers :  req && req.headers
        }
    }
    constructor(props){
        super(props)
        this.state = {
            nextUrl : this.props.nextUrl,
            images : this.props.images
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState({
                nextUrl : nextProps.nextUrl,
                images : nextProps.images
            })
        }
    }
    render(){
        const { params , router ,subParams} = this.props
        return(
            <IdeaComponent 
                {...this.props}
                photoId={this.props.router.query && this.props.router.query.photoId}
                ideaParams={params}
                subParams={subParams}
                asPath={router.asPath}
                nextUrl={this.state.nextUrl}
                images={this.state.images}
                detail={true}
                changeState={(images,nextPage)=>{this.setState({images : images , nextUrl : nextPage})}}
                path={router.pathname}>
            </IdeaComponent>
        )
    }
}

export default withRouter(IdeaFilter)