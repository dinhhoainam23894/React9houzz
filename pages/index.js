import Layout from '../components/layout'
import React from 'react'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'home/'
import css from './home.css'
export default class  extends React.Component {
  static async getInitialProps({ query }) {
    const res = await fetch(APIURL)
    const data = await res.json()
    return { 
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

  render(){
    return(
      <Layout {...this.props} navmenu={false} container={false} css={css}>
          <img src="/static/images/banner-background.png" alt="" className="img-fluid"/>
    </Layout>
    )
  }
}

