import React from 'react'
import {Link} from '../routes'
import LazyLoad from "react-lazyload";
import Placeholder from "./PlaceHolder";

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {project} = this.props
    return (
      <div className="rounded-2">
        <Link route='project.detail' params={{id: project.id, slug: `${project.slug}`}}>
          <a className="nav-link border-0 font-14 font-weight-bold">
            <div className="rounded-2 border provider-project">
              <div className="row project position-relative mx-auto">
                <div className="col-md-7 col-7 position-relative p-0">
                  <div className="position-absolute h-100 w-100 bg-secondary first-image">
                    <LazyLoad once placeholder={<Placeholder
                      dataSrc={this.props.project.avatar && this.props.project.avatar[0]}
                      alt={this.props.project && this.props.project.name}/>}>
                      <img src={this.props.project.avatar[0]} alt="" className="first-image w-100 h-100"/>
                    </LazyLoad>
                  </div>
                </div>
                <div className="col-md-5 col-5 position-relative p-0">
                  <div className="position-absolute h-48 ml-1 mb-1 bg-secondary second-image right-avatar">
                    <LazyLoad once placeholder={<Placeholder
                      dataSrc={this.props.project.avatar && this.props.project.avatar[1]}
                      alt={this.props.project && this.props.project.name}/>}>
                      <img src={this.props.project.avatar[1]} alt="" className="w-100 h-100"/>
                    </LazyLoad>
                  </div>
                  <div className="position-absolute h-50 ml-1 third-image bg-secondary right-avatar">
                    <div className="h-100 project-more text-center position-absolute w-100">
                      <p
                        className="font-weight-light text-white font-30">{project.count_image ? "+ " + project.count_image : ''}</p>
                    </div>
                    <LazyLoad once placeholder={<Placeholder
                      dataSrc={this.props.project.avatar && this.props.project.avatar[2]}
                      alt={this.props.project && this.props.project.name}/>}>
                      <img src={this.props.project.avatar[2]} className="w-100 h-100"/>
                    </LazyLoad>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-2 px-2 project-des">
                <h2 className="font-weight-bold text-black font-15">{project.name}</h2>
                {this.props.project.address &&
                <div className="font-13 text-secondary">
                  <span className="fa fa-map-marker mr-1 text-primary"/>
                  {this.props.project.address}
                </div>
                }
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}