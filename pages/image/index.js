import React from 'react'
import Layout from '../../components/layout'
import ImageDetail from '../../components/image-detail'
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'image/'
import css from './index.css'
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
                    tag : data.listTag,
                    currentValue: data.image
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
    render(){
        return(
            <Layout {...this.props} navmenu={false} container={false} css={css}>
            <div id="lightbox">
                <ImageDetail tag={this.props.tag} id={this.props.id} slug={this.props.slug} data={this.props} detail={false}></ImageDetail>
                <style global jsx>{`
                    #lightbox {
                        top: 105px !important;
                    }
                    .lbInfoTab #nav-tab {
                       display : none !important;
                    }
                `}</style>
            </div>
            </Layout>
        )
    }
}