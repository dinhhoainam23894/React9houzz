import React from 'react'
import Layout from '../../components/layout'
import ImageDetail from '../../components/image-detail'
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'image/'

export default class Image extends React.Component{
    static async getInitialProps({query}){
        const res = await fetch(APIURL+query.id)
        const data = await res.json()
        return {
                    id: query.id , 
                    slug : query.slug ,   
                    image: data.image ,
                    project: data.project,
                    images: data.list_images ,
                    provider: data.provider,
                    tag : data.tagSeo,
                    currentValue: data.image
                    , title : data.seo.title
                    , des : data.seo.des
                    , canonical : data.seo.canonical
                    , robots : data.seo.robots
                    , og_url : data.seo.url
                    , url_images : data.seo.url_images
                }
    }
    render(){
        return(
            <Layout {...this.props} navmenu={false} container={false}>
            <div id="lightbox">
                <ImageDetail id={this.props.id} slug={this.props.slug} data={this.props} detail={true}></ImageDetail>
                <style jsx>{`
                    #lightbox {
                        top: 105px !important;
                    }
                `}</style>
            </div>
            </Layout>
        )
    }
}