import React from 'react'
import Layout from '../../components/layout'
import ImageDetail from '../../components/image-detail'
export default class Image extends React.Component{
    static async getInitialProps({query}){
        return { id: query.id }    
    }
    render(){
        return(
            <Layout {...this.props} navmenu={false} container={false}>
            <div id="lightbox">
                <ImageDetail id={this.props.id}></ImageDetail>
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