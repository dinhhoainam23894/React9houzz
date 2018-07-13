import React from 'react'
import IdeaComponent from '../components/IdeaComponent'
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI

export default class extends React.Component{
    static async getInitialProps({query}){
        const res = await fetch(APIURL+"y-tuong")
        const data = await res.json()
        return {    h1 : data.h1,
                    filter_default : data.filter_default,
                    colors : data.colors,
                    images: data.images.data,
                    nextUrl: data.images.next_page_url,
                }
    }
    constructor(props){
        super(props)
    }
    
   render(){
       const { url } = this.props
       return(
            <IdeaComponent 
                {...this.props}
                photoId={this.props.url.query && this.props.url.query.photoId}
                asPath={url.asPath} 
                path={url.pathname}
                ></IdeaComponent>
       )
   }
}
