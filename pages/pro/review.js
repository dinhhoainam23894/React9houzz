import React from 'react'
import ProviderDetail from '../../components/pro-detail'
import ProviderSidebar from '../../components/provider-sidebar'
import {rating}  from '../../libraries/helpers'
import axios from 'axios'
const APIURL = process.env.DOMAIN + process.env.APIURI + 'provider/'
export default class extends React.Component {
    static async getInitialProps({ query }) {
        const res = await fetch(APIURL+query.id+"?reviews")
        const data = await res.json()
        return { id: query.id 
                , data:data 
                , provider : data.provider 
                , projects : data.projects 
                , slug : query.slug 
                , reviews : data.reviews 
                , review_details : data.review_details}
      } 
      constructor(props){
        super(props)
        this.state = {
          data : {},
          provider : {},
          projects : {},
          reviews : {},
          review_details : []
        }
      } 
    //   async getValue(){
    //     let data;
    //     await axios.get(APIURL+this.props.id+"?reviews")
    //     .then(res => {
    //          data = res.data;
    //          this.setState({data: data , provider:data.provider ,reviews : data.reviews , review_details : data.review_details})
    //     })
    //     return data
    //     }
    //   componentDidMount = async () =>{
    //     await this.getValue()
    //   }
    render() {
        const { provider , id , slug ,reviews , review_details , data} = this.props 
        return (
            // <ProviderDetail id={this.props.id} ref={(e)=>this.ProviderDetail = e}>
            <ProviderDetail id={id} slug={slug} data={data}>

                <div className="container comment mt-3">
                    <div className="row">
                        <div className="col-0 col-md-3 col-lg-3 provider-sidebar p-0 mt-2" id="sidebar">
                            <ProviderSidebar provider={provider}></ProviderSidebar>
                        </div>
                        <div className="col-12 col-md-9 col-lg-9">
                            <RatingComponent reviews={reviews} review_details={review_details}></RatingComponent>
                        </div>
                    </div>
                </div>
            </ProviderDetail>
        );
    }
}

class RatingComponent extends React.PureComponent {
     
    constructor(props){
        super(props)
    }
    render() {
        var review_details = [];
        var config = {
                'danh-gia-chung' : 'Đánh giá chung',
                'chat-luong-hoan-thien' : 'Chất lượng hoàn thiện',
                'thai-do-phuc-vu' : 'Thái độ phục vụ'
        }
        this.props.review_details ? review_details = this.props.review_details : ''
        return(
        <div className="bg-white py-3 px-4 review-content">
            <h1 className="font-weight-light text-dark font-25">Nhận xét</h1>
            <ul className="list-unstyled pb-3">
                <li className="border-dot py-3 border-top-0 border-left-0 border-right-0">
                    <div className="row d-flex">
                        <div className="position-relative col-md-2 col-5">
                            <img src="/static/images/big-star.png" />
                            <h2 className="position-absolute rating-number text-white font-30 font-weight-bold">{this.props.reviews[0] && this.props.reviews[0].rate.toFixed(1)}</h2>
                        </div>
                        <div className="col-md-5 col-6 ml-4 py-3 evaluate">
                        
                            {
                                review_details && Object.keys(review_details).map(function(index){
                                  return  <div className="row" key={index}>
                                         <div className="col-md-6 text-blue-100 font-14 font-weight-normal p-0">{config[index]}</div>
                                         <div className="star-rating font-13 col-md-6 p-0">
                                            {rating(review_details[index]['avg'])}
                                             <span className="text-secondary font-12 font-weight-light ml-2"> {review_details[index]['avg'].toFixed(1)} <span className="text-black">({review_details[index]['count']})</span></span>
                                         </div>
                                     </div>
                                    
                                }) 
                            }
                            
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
        );
    }
}