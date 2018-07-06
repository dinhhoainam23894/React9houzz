import React from 'react'
import Link from 'next/link'
export default class extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="rounded-2">
            <Link prefetch href={ "/du-an/"+this.props.project.id }>
                <a className="nav-link border-0 font-14 font-weight-bold">
                    <div className="rounded-2 border provider-project">
                        <div className="row project position-relative mx-auto">
                            <div className="col-md-7 col-7 position-relative p-0">
                            <div className="position-absolute h-100 w-100 bg-secondary first-image">
                                <img src={this.props.project.avatar[0]} alt="" className="first-image w-100 h-100" />
                            </div>
                            </div>
                            <div className="col-md-5 col-5 position-relative p-0">
                            <div className="position-absolute h-48 ml-1 mb-1 bg-secondary second-image right-avatar">
                                <img src={this.props.project.avatar[1]} alt="" className="w-100 h-100" />
                            </div>
                            <div className="position-absolute h-50 ml-1 third-image bg-secondary right-avatar">
                                <div className="h-100 project-more text-center position-absolute w-100">
                                    <h3 className="font-weight-light text-white font-30">+ {this.props.project.count_image}</h3>
                                </div>
                                <img src={this.props.project.avatar[2]} className="w-100 h-100" />
                            </div>
                            </div>
                        </div>
                        <div className="mt-3 mb-2 px-2 project-des">
                            <h2 className="font-weight-bold text-black font-15">{this.props.project.name} </h2>
                                <div className="font-13 text-secondary">
                                    <span className="fa fa-map-marker mr-1 text-primary"></span>
                                    {this.props.project.address}
                                </div>
                        </div>
                    </div>
                </a>
                </Link>
            </div>
        );
    }
}