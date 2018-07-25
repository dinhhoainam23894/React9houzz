import React from 'react'
import ProviderDetail from '../../components/pro-detail';
import ListProject from '../../components/list-project';
import axios from 'axios'
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'provider/'
import css from './project.css'
export default class extends React.Component {
    static async getInitialProps ({ query }) {
      const res = await fetch(APIURL+query.id+"?projects")
      const data = await res.json()
      return { id: query.id 
              , data:data 
              , provider : data.provider 
              , projects : data.projects 
              , slug : query.slug
              , h1 : data.h1 
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
      this.state = {
        data : {},
        provider : {},
        projects : {},
      }
    } 
      render () {
        const { provider , projects , id , slug , data} = this.props
        var list_project = [];
          const moreProject = [];
          if(projects.length > 0){
              projects.map(function(e){
                list_project.push(<div className="col-12 col-md-4 col-lg-4 p-3" key={e.id}>
                    <ListProject project={e}></ListProject>
                </div>);
              })
          }
        return (
            <ProviderDetail provider_id={id} provider_slug={slug} data={data} {...this.props} css={css}>
              <div className="container mt-3">
                <h2 className="text-dark font-30 text-center">{data.project_count} dự án</h2>
                <div className="row">
                      {list_project}
                </div>
              </div>
            </ProviderDetail>
        );
      }
}