import React from 'react'
import {Link} from '../routes'
import Layout from './layout'
import {rating, activePath} from '../libraries/helpers'
import classnames from "classnames";
import {withRouter} from 'next/router'
import LazyLoad from "react-lazyload";
import Placeholder from "./PlaceHolder";

class ProDetail extends React.Component {
  state = {
    data: {},
    provider: {}
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {provider_id, provider_slug, router} = this.props
    const {pathname} = router;
    const itemStar = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? "itemScope itemType='http://schema.org/AggregateRating'" : ''
    const itemStarProp = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? `<meta  itemProp="ratingValue" content=${this.props.data.provider.avg_rate}>` : null
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div className="container-fluid px-4 bg-gray provider-main">
          <div className="bg-white" itemScope itemType="http://schema.org/localbusiness">
            <div className="border border-right-0 border-left-0 border-gray provider-details">
              <div className="banner position-relative p-0">
                <LazyLoad once placeholder={<Placeholder dataSrc={this.props.data.cover && this.props.data.cover} alt={this.props.data && this.props.data.name}/>}>
                  <img src={this.props.data.cover && this.props.data.cover} className="w-100"/>
                </LazyLoad>
                <div className="position-absolute gradient-animate w-100" />
              </div>
              <div className="container position-relative">
                <div className="position-absolute provider-info">
                  <Link route='pro.detail' params={{id: provider_id, slug: `${provider_slug}`}}>
                    <a className="provider-name text-white font-weight-bold">
                      {activePath(pathname, `/pro`, {strict: true}) ?
                        <h1 className="font-22 mb-1"
                            itemProp="name">{this.props.data.provider && this.props.data.provider.name}</h1>
                        :
                        <p className="font-22 mb-1"
                           itemProp="name">{this.props.data.provider && this.props.data.provider.name}</p>
                      }
                    </a>
                  </Link>
                  <div className={"star-rating " + itemStar}>
                    {this.props.data.provider && rating(this.props.data.provider.avg_rate)}
                    {itemStarProp}
                    <span className="text-yellow font-weight-bold"> 0(0) đánh giá) </span>
                    <a className="text-gray-200"><span> Đánh giá chi tiết ></span></a>
                  </div>
                </div>
                <div className="row position-relative justify-content-end">
                  <div className="position-absolute provider-avatar rounded-circle">
                    <LazyLoad once placeholder={<Placeholder dataSrc={this.props.data.avatar && this.props.data.avatar} alt={this.props.data && this.props.data.name}/>}>
                    <img itemProp="image" src={this.props.data.avatar} className="img-thumbnail rounded-circle h-100"
                         alt=""/>
                    </LazyLoad>
                  </div>
                  <div className="col-md-9 col-lg-9 provider-nav">
                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                      <li
                        className={classnames("nav-item position-relative", {active: activePath(pathname, `/pro`, {strict: true})})}>
                        <Link route='pro.detail' params={{id: provider_id, slug: `${provider_slug}`}}><a
                          className="nav-link border-0 font-14 font-weight-bold">Tổng quan</a></Link>
                      </li>
                      <li
                        className={classnames("nav-item position-relative", {active: activePath(pathname, [`/pro/project`, '/project/detail'], {strict: true})})}>
                        <Link route='pro.project' params={{id: provider_id, slug: `${provider_slug}`}}><a
                          className="nav-link border-0 font-14 font-weight-bold">Dự án</a></Link>
                      </li>
                      <li
                        className={classnames("nav-item position-relative", {active: activePath(pathname, `/pro/review`, {strict: true})})}>
                       <a href="#" className="nav-link border-0 font-14 font-weight-bold">Nhận xét</a>
                      </li>
                      {/*<li*/}
                        {/*className={classnames("nav-item position-relative", {active: activePath(pathname, `/pro/review`, {strict: true})})}>*/}
                        {/*<Link route='pro.review' params={{id: provider_id, slug: `${provider_slug}`}}><a*/}
                          {/*className="nav-link border-0 font-14 font-weight-bold">Nhận xét</a></Link>*/}
                      {/*</li>*/}
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

export default withRouter(ProDetail)