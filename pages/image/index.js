import React from 'react'
import Layout from '../../components/layout'
import ImageDetail from '../../components/image-detail'
export default class Image extends React.Component{
    static async getInitialProps({query}){
        return { id: query.id ,slug: query.slug}    
    }
    render(){
        return(
            <Layout {...this.props} navmenu={false} container={false}>
            <div id="lightbox">
                <ImageDetail id={this.props.id} slug={this.props.slug}></ImageDetail>
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