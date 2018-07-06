import React from 'react'
import ProviderDetail from '../../components/pro-detail';
import ListProject from '../../components/list-project';
import axios from 'axios'
const APIURL = 'http://9houzz.stag:89/api/provider/'

export default class extends React.Component {
    static getInitialProps ({ query: { id } }) {
        return { id }
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
      render () {

        var list_project = [];
          const moreProject = [];
          if(this.state.projects.length > 0){
              this.state.projects.map(function(e){
                list_project.push(<div className="col-12 col-md-4 col-lg-4 p-3" key={e.id}>
                    <ListProject project={e}></ListProject>
                </div>);
              })
          }
        return (
            <ProviderDetail id={this.props.id} data={this.state.data}>
            <div className="container mt-3">
              <h2 className="text-dark font-30 text-center">{this.state.data.project_count} dự án</h2>
              <div className="row">
                    {list_project}
              </div>
          </div>
            </ProviderDetail>
        );
      }
}