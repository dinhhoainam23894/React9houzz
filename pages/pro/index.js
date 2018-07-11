import { Component } from 'react'
import Link from 'next/link'
import ProviderDetail from '../../components/pro-detail';
import ProviderSidebar from '../../components/provider-sidebar';
import ListProject from '../../components/list-project';
import axios from 'axios'
import {standardText} from '../../libraries/helpers'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'provider/'
export default class Pro extends Component {
  static async getInitialProps({ query }) {
    return { id: query.id}
  } 
  constructor(props){
    super(props)
    this.state = {
      data : {},
      provider : {},
      projects : {},
    }
  } 
  async getValue(){
    let data;
    await axios.get(APIURL+this.props.id+"?projects")
    .then(res => {
         data = res.data;
         this.setState({data: data , provider:data.provider ,projects : data.projects})
    })
    return data
    }
  componentDidMount = async () =>{
    await this.getValue()
  }
  
  render() {  

    const { provider } = this.state
    const movieItems = [];
    const moreProject = [];
    if(this.state.projects.length > 0){
        let i = 0;
        this.state.projects.map(function(e){
            if(i< 6){
                movieItems.push(<div className="col-md-6 col-lg-6 col-12 pl-0 pr-4 pb-3 project-image rounded-2" key={e.id}>
                    <ListProject project={e}></ListProject>
                </div>);
            }
            i++;
        })
    }
    if(this.state.data.project_count > 6){
        moreProject.push(<div className="col-md-4 offset-md-4 mt-3" key="project_count">
            <Link href={ `/pro/${this.props.id}-${provider.slug}/dự-án` }><button className="btn btn-outline-primary w-100 font-weight-normal bg-white">Xem thêm <span className="number-project">({this.state.data.project_count - 6})</span> dự án</button></Link>
        </div>);
    }
    return (
      <ProviderDetail id={this.props.id} slug={provider.slug} data={this.state.data}>
      <div className="container">
              <div className="row">
                  <div className="col-0 col-md-3 col-lg-3 provider-sidebar p-0 mt-2" id="sidebar">
                      <ProviderSidebar provider={this.state.provider}></ProviderSidebar>
                  </div>
                  <div className="col-12 col-md-9 col-lg-9 mt-2">
                    <div className="provider-about">
                        <div className="about pb-3 px-4">
                            <div id="readMore">
                                <div className="readMoreWrapper">
                                    <div id="readMoreText" className="font-14">
                                        <h3 dangerouslySetInnerHTML={{__html: this.state.provider.about_content}}></h3>
                                    </div>
                                    <div className="readMoreGradient"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="provider-moreinfo mt-4 w-100">
                  <div className="float-right left-info">
                      <div className="header-6 top mb-3">
                          <a className="text-dark font-25" href="">
                              {this.state.data.project_count} Dự án <span className="fa fa-angle-right font-22"></span>
                          </a>
                      </div>
                      <div className="row m-0">
                        {
                            movieItems
                        }
                        {
                            moreProject
                        }
                      </div>
                  </div>
               
              </div>
              <div className="row mt-3">
              </div>
            </div>
      </ProviderDetail>
     
    )
  }
}