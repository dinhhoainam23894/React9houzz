import React from 'react'
import ProviderDetail from '../../components/pro-detail';
import ListProject from '../../components/list-project';
import axios from 'axios'
import 'isomorphic-fetch'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'provider/'
import css from './project.css'
export default class extends React.Component {
    static async getInitialProps ({ query }) {
      const res = await fetch(APIURL+query.id+"?projects&limit=21")
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
        projects : this.props.projects.data,
        page : this.props.projects.next_page_url,
      }
      // this.handlePageChange = this.handlePageChange.bind(this);
    }
    onLoadMore = async(e,page) => {
      e.preventDefault()
      const res = await fetch(page+`&projects&limit=21`)
      const data = await res.json()
      var tracks = this.state.projects
      data.projects.data.map((track) => {
          tracks.push(track);
      });
     this.setState({projects : tracks , page : data.projects.next_page_url})
    }
   
      render () {
        const { provider , projects , id , slug , data} = this.props
        var list_project = [];
          const moreProject = [];
          if(this.state.projects.length > 0){
              this.state.projects.map(function(e,index){
                list_project.push(<div className="col-12 col-md-4 col-lg-4 py-3 px-0" key={index}>
                    <ListProject project={e}></ListProject>
                </div>);
              })
          }
        return (
            <ProviderDetail provider_id={id} provider_slug={slug} data={data} {...this.props} css={css}>
              <div className="container mt-3">
                <h1 className="text-dark font-30 text-center">{data.project_count+" dự án"}</h1>
                <div className="row">{list_project}</div>
                { this.state.page &&
                  <div className="loadmore justify-content-center d-flex"> 
                  <button className="btn btn-primary" onClick={(e) => this.onLoadMore(e,this.state.page)}>Xem thêm</button>
                  </div>
                }
              </div>

            </ProviderDetail>
        );
      }
}