import React from 'react'
import {mapObject , ucfirst} from '../libraries/helpers'
import {Link} from '../routes'
import classnames from "classnames";
import $ from 'jquery'
export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { filter , color , page} = this.props
        return(
            <div className="sidebar-service row bg-white">
            
                <div className="d-md-block px-2 w-100 sidebar-service-content">
                {
                    this.props.test && 
                    <div class="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0">
                    <div class="mt-2 widget p-3">
                    <h3 class="font-15 mb-3">Locale <span class="fa fa-chevron-right d-block d-md-none"  data-toggle="collapse" data-target="#demoTest"></span></h3>
                    <ul class="list-unstyled mb-0 collapse d-md-block" id="demoTest">
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Hà Nội<span>10</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">TPHCM<span>20</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Đà Nắng<span>11</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Ninh Bình<span>12</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Hà Tĩnh<span>21</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Hà Nam<span>21</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Bắc Ninh<span>23</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"> <label class="px-3">Quãng Ngãi<span>44</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"> <label class="px-3">Nam Định<span>12</span></label></a>
                        </li>
                        <li class="py-1 radio">
                            <a href="" class="font-13 font-weight-light text-gray"><label class="px-3">Thái Bình<span>12</span></label></a>
                        </li>
                        <span class="more loadmore d-none d-md-block">Xem thêm <i class="la la-arrow-circle-right"></i></span>
                    </ul>
                    </div>
                </div>
                }
                {
                    filter && filter.map((value,index) => (
                        value.data.length != 0 &&
                        <div className="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0" key={index}>
                            <div className="mt-2 widget p-3">
                            <h3 className="font-15 mb-3">{value.textName}<span className="fa fa-chevron-right d-block d-md-none"  data-toggle="collapse" data-target={"#demo"+index}></span></h3>
                            
                            <ul className="list-unstyled mb-0 collapse d-md-block" id={"demo"+index}>
                                {
                                    value.data && mapObject(value.data, function (index, value) {
                                        return <li className="py-1 radio" key={index}>
                                            <Link route={value.uri}>
                                            <a className="font-13 font-weight-light text-gray"  rel={value.is_seo == 0 ? "nofollow" : "dofollow"}>
                                                <label className={classnames('pr-3', {active: page.currentsId.includes(value.original)
                                                })}>{value.name_tag}<span>{value.total_doc}</span></label>
                                            </a>
                                            </Link>
                                        </li>
                                    })
                                }
                                <span className="more loadmore d-none d-md-block">Xem thêm <i className="la la-arrow-circle-right"></i></span>
                            </ul>
                            </div>
                        </div>
                        
                    ))
                }  
                    <div className="child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0">
                        {
                            color &&
                            <div className="mt-2 widget p-3">
                                <h3 className="font-15">MÀU SẮC</h3>
                                <span className="expand-list"></span>
                                <div className="service-color mt-3">
                                {
                                    mapObject(color , function(index,value) {
                                    return  <a href={value.uri} className="text-dark border border-gray" key={index}><span className={"float-left " + value.class} data-toggle="tooltip" title={value.name_tag}></span></a>
                                    })
                                }  
                            </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}