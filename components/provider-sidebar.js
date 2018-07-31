import React from 'react'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            social_links : []
        }
    }
    componentWillReceiveProps = async(nextProps) => {
        if(this.props.provider.id == undefined && nextProps.provider.id){
            if(nextProps.provider.social.facebook){
                await this.state.social_links.push({ url:nextProps.provider.social.facebook , icon:'fa fa-facebook'})
            }else if(nextProps.provider.social.youtube){
                await this.state.social_links.push({ url:nextProps.provider.social.youtube , icon:'fa fa-youtube'})
            }else if(nextProps.provider.social.google_plus){
                await this.state.social_links.push({ url:nextProps.provider.social.google_plus , icon:'fa fa-google-plus'})
            }
        }
    }
    render(){
        return (
            <div className="bg-white py-2 px-3 border border-gray">
                <div className="provider-statistic row border-dot">
                    <div className="col-md-3 col-3 p-0 text-center">
                        <p className="text-primary font-weight-normal sidebar-count mb-0">{this.props.provider.total_like ? this.props.provider.total_like : 0}</p>
                        <p className="font-12 sidebar-label">Cảm ơn</p>
                    </div>
                    <div className="col-md-3 col-3 p-0 text-center">
                        <p className="text-primary font-weight-normal sidebar-count mb-0">{this.props.provider.total_rate ? this.props.provider.total_rate : 0}</p>
                        <p className="font-12 sidebar-label">Nhận xét</p>
                    </div>
                    <div className="col-md-3 col-3 p-0 text-center">
                        <p className="text-primary font-weight-normal sidebar-count mb-0">{this.props.provider.total_page_view ? this.props.provider.total_page_view : 0}</p>
                        <p className="font-12 sidebar-label">Lượt xem</p>
                    </div>
                    <div className="col-md-3 col-3 p-0 text-center">
                        <p className="text-primary font-weight-normal sidebar-count mb-0">{this.props.provider.total_follow ? this.props.provider.total_follow : 0}</p>
                        <p className="font-12 sidebar-label">Theo dõi</p>
                    </div>
                </div>
                    <div className="provider-contact">
                        <ul className="list-unstyled pb-3 my-2">
                            <li className="info-special">
                                <i className="fa fa-phone text-secondary"></i>
                                <span itemProp="telephone">{this.props.provider.phone}</span>
                            </li>
                            <li itemScope itemType="http://schema.org/PostalAddress" itemProp="address">
                                <i className="fa fa-map-marker text-secondary"></i>
                                <span itemProp="streetAddress">{this.props.provider.address}</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope-o text-secondary"></i>
                                <span>{this.props.provider.email}</span>
                            </li>
                            <li>
                                <i className="fa fa-clock-o text-secondary"></i>
                                <span>{this.props.provider.work_time}</span>
                            </li>
                                <li>
                                    <i className=" fa fa-globe text-secondary"></i>
                                    <span><a target="_blank" rel="nofollow"  href={this.props.provider.website} className="text-white">{this.props.provider.website}</a></span>
                                </li>
                            <li>
                                <i className="fa fa-pencil text-secondary"></i>
                                <a href="javascript:void(0)" className="text-primary">Quản lý trang này</a>
                            </li>
                            <li className="text-center social">
                                <a target="_blank" rel="nofollow"  href={this.props.provider.website} className="text-white fa fa-globe website"></a>
                                {
                                    this.state.social_links.map(function(value,index){
                                        return <a target="_blank" rel="nofollow"  href={value.url} className={"text-white "+value.icon+" website"} key={index}></a>
                                    })
                                }
                            </li>
                            </ul>
                    </div>
            </div>
        );
    }
}