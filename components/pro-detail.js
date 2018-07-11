import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import axios from 'axios'
import {rating}  from '../libraries/helpers'
const APIURL = 'http://9houzz.stag:89/api/provider/'
export default class extends React.Component {
	state = {
		data: {},
		provider: {}
	  }
	
	constructor(props){
		super(props);
		// this.getValue = this.getValue.bind(this);
	}
    // componentWillReceiveProps = async(nextProps) => {
	// 	if(this.props.data.provider == undefined && nextProps.data.provider){
	// 		await this.setState({data : nextProps.data , provider: nextProps.data.provider})
	// 	}
	// }
	// async getValue(){
	// 	let data;
	// 	await axios.get(APIURL+this.props.id)
	// 	.then(res => {
	// 		 data = res.data;
	// 		 this.setState({data: data , provider:data.provider})
	// 	})
	// 	return data
	// }
  render() {
	  const { id,slug } = this.props
      return(
		<Layout {...this.props} navmenu={false} container={false}>
        <div className="container-fluid px-4 bg-gray provider-main">
		<div className="bg-white">
			<div className="border border-right-0 border-left-0 border-gray provider-details">
				<div className="banner position-relative p-0">
					<img src={this.props.data.cover && this.props.data.cover} className="w-100"/>
					<div className="position-absolute gradient-animate w-100"></div>
				</div>
				<div className="container position-relative">
					<div className="position-absolute provider-info">
						<Link prefetch href={ `/pro/${id}-${slug}` }>
							<a className="provider-name text-white font-weight-bold">
								<h1 className="font-22 mb-1">{ this.props.data.provider && this.props.data.provider.name }</h1>	
							</a>
						</Link>
						<div className="star-rating">
							{this.props.data.provider && rating(this.props.data.provider.avg_rate)}
							<span className="text-yellow font-weight-bold"> 0(0) đánh giá) </span>
                            <a href="{{ route('login') }}" className="text-gray-200"><span> Đánh giá chi tiết ></span></a>
						</div>
					</div>
					<div className="row position-relative justify-content-end">
						<div className="position-absolute provider-avatar rounded-circle">
							<img src={this.props.data.avatar} className="img-thumbnail rounded-circle h-100" alt=""/>
						</div>
						<div className="col-md-9 col-lg-9 provider-nav">
							<ul className="nav nav-tabs border-0" id="myTab" role="tablist">
								<li className="nav-item position-relative {{ active_if('provider-about') }}">
									<Link prefetch href={ `/pro/${id}-${slug}` }><a className="nav-link border-0 font-14 font-weight-bold">Tổng quan</a></Link>
								</li>
								<li className="nav-item mx-1 position-relative {{ active_if('provider-project') }} {{ Request::is('du-an/*') ? 'active' : '' }}">
                                <Link prefetch href={ `/pro/${id}-${slug}/dự-án` }><a className="nav-link border-0 font-14 font-weight-bold">Dự án</a></Link>
								</li>
								<li className="nav-item mx-1 position-relative {{ active_if('provider-comment') }}">
                                <Link prefetch href={`/pro/${id}-${slug}/nhận-xét`}><a className="nav-link border-0 font-14 font-weight-bold">Nhận xét</a></Link>
								</li>
								<li className="nav-item mx-1 position-relative">
									<a className="nav-link border-0 font-14 font-weight-bold" href="#">Sổ tay ý tưởng</a>
								</li>
								<li className="nav-item mx-1 position-relative">
									<a className="nav-link border-0 font-14 font-weight-bold" href="#">Hỏi đáp</a>
								</li>
								<li className="nav-item mx-1 position-relative">
									<a className="nav-link border-0 font-14 font-weight-bold" href="#">Hoạt động</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="w-100 py-3 provider">
				<React.Fragment>
					{this.props.children}
                </React.Fragment>
			</div>
		</div>

	    </div>
        
      </Layout>
      );
  }

}
