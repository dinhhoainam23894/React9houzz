import React from 'react'
import Layout from '../components/layout';
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'about/'
export default class extends React.Component{
    static async getInitialProps({ query }) {
        console.log(query)
        const res = await fetch(APIURL+query.slug)
        const data = await res.json();
        return { 
            data : data.data,
            title : data.seo.title
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
        const { data } = this.props
        return (
            <Layout {...this.props} navmenu={false} container={false}>  
                <div className="row bg-gray pt-3 pb-3">
                    <div className="col-10 col-md-8 offset-1 offset-md-2 text-left bg-white pt-4 pb-3 static-page">
                        <h1 className="font-28">{data.name}</h1>
                        <div className="text-justify pt-3 font-14" dangerouslySetInnerHTML={{__html : data.content }} />
                    </div>
                    <style global jsx>{`
                        .static-page ul{
                            list-style : none;
                            padding-left : 15px ;
                        }
                    `}
                    </style>
                </div>
            </Layout>
        )
    }
}