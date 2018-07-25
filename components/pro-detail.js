import React from 'react'
import {Link} from '../routes'
import Layout from './layout'
import {rating  ,activePath}  from '../libraries/helpers'
import classnames from "classnames";
export default class extends React.Component {
	state = {
		data: {},
		provider: {}
	  }
	
	constructor(props){
		super(props);
	}
   
  render() {
	  const { provider_id,provider_slug ,url } = this.props
	  const { pathname } = url;
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
						<Link prefetch route='pro.detail' params={{id: provider_id , slug : `${provider_slug}`}}>
							<a className="provider-name text-white font-weight-bold">
								<h1 className="font-22 mb-1">{ this.props.data.provider && this.props.data.provider.name }</h1>	
							</a>
						</Link>
						<div className="star-rating">
							{this.props.data.provider && rating(this.props.data.provider.avg_rate)}
							<span className="text-yellow font-weight-bold"> 0(0) đánh giá) </span>
                            <a className="text-gray-200"><span> Đánh giá chi tiết ></span></a>
						</div>
					</div>
					<div className="row position-relative justify-content-end">
						<div className="position-absolute provider-avatar rounded-circle">
							<img src={this.props.data.avatar} className="img-thumbnail rounded-circle h-100" alt=""/>
						</div>
						<div className="col-md-9 col-lg-9 provider-nav">
							<ul className="nav nav-tabs border-0" id="myTab" role="tablist">
								<li className={classnames("nav-item position-relative", { active: activePath(pathname, `/pro`, { strict: true }) })}>
									<Link prefetch route='pro.detail' params={{id: provider_id , slug : `${provider_slug}`}}><a className="nav-link border-0 font-14 font-weight-bold">Tổng quan</a></Link>
								</li>
								<li className={classnames("nav-item position-relative", { active: activePath(pathname, [`/pro/project` , '/project'], { strict: true }) })}>
                                <Link prefetch route='pro.project' params={{id: provider_id , slug : `${provider_slug}`}}><a className="nav-link border-0 font-14 font-weight-bold">Dự án</a></Link>
								</li>
								<li className={classnames("nav-item position-relative", { active: activePath(pathname, `/pro/review`, { strict: true }) })}>
                                <Link prefetch  route='pro.review' params={{id: provider_id , slug : `${provider_slug}`}}><a className="nav-link border-0 font-14 font-weight-bold">Nhận xét</a></Link>
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