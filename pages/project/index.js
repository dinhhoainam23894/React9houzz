import { Component } from 'react'
import Link from 'next/link'
import ProviderDetail from '../../components/pro-detail';
import ImageModal from '../../components/image-modal';
import axios from 'axios'
import {mapObject , ucfirst} from '../../libraries/helpers'
const APIURL = process.env.DOMAIN + process.env.APIURI

const APIPROJECT = APIURL + 'project/'
const APIPRO = APIURL + 'provider/'
import Router from 'next/router';


export default class Project extends Component {
    static async getInitialProps({ query }) {
        return { id: query.id }
    }
    constructor(props) {
        super(props)
        this.state = {
            data : {},
            provider: {},
            project: {},
            images: []
        }
    }
    async getValue() {
        let data;
        await axios.get(APIPROJECT + this.props.id)
            .then(res => {
                data = res.data;
                this.setState({ project: data.project, images: data.project.images  })
            })
        await axios.get(APIPRO + this.state.project.user_id)
        .then(res => {
            data = res.data;
            this.setState({ data: data , provider: data.provider })
        })
    }
    componentDidMount = async () => {
        await this.getValue()
    }
    showPhoto (e, id , slug) {
        e.preventDefault()
        Router.push(`/project?id=${this.props.id}&photoId=${id}&slug=${slug}`,`/anh/${id}-${slug}`)
    }
    dismissModal (id) {
        Router.push(`/du-an/${id}-${slug}`)
      }
    render() { 
        const { provider } = this.state
        const { url } = this.props
        return (
            <ProviderDetail id={provider.id} slug={provider.slug} data={this.state.data}>
                {
                    url.query.photoId &&
                    <ImageModal
                        id={url.query.photoId}
                        onDismiss={() => this.dismissModal(url.query.id,url.query.slug)}
                    />
                }
                <div className="mt-3 project-detail" id="cat">
                    <div className="row m-0">
                        <div className="offset-md-1 col-12 col-md-10 col-lg-10 offset-md-1">
                            <div className="px-4 bg-white idea-content">
                                <div className="about">
                                    <h1 className="font-25 font-weight-normal">{this.state.project.name}</h1>
                                    <h3 className="font-14 font-weight-normal mb-3">{this.state.project.descriptions}</h3>
                                    <h3 className="font-14 font-weight-normal"><strong>Địa chỉ</strong>: {this.state.project.address}</h3>
                                    <h3 className="font-14 font-weight-normal"><strong>Nguồn dự án</strong>:<a href={this.state.project.source_url} rel="nofollow" target="_blank" className="text-dark"> {this.state.project.source_url}</a></h3>
                                    {
                                        this.state.project.more_infos && mapObject(this.state.project.more_infos, function (index, value) {
                                            if(value != '')
                                            return <h3 className="font-14 font-weight-normal" key={index}><strong>{ucfirst(index)} </strong> : { value }</h3>

                                          })
                                    }
                                    <h3 className="font-14 font-weight-normal"></h3>
                                </div>
                                <div className="about bg-white py-3">
                                    <ul className="list-unstyled">
                                        {
                                            this.state.images && this.state.images.map((value,index) => (
                                                <li className="media border border-bottom-0 border-right-0 border-left-0 border-gray py-3 position-relative container w-100 mb-2 px-0" key={index}>
                                                        <div className="row w-100 m-0">
                                                            <div className="px-0">
                                                                <div className="project-image position-relative">
                                                                    <Link href={`/anh/?id=${value.id}`}>
                                                                        <a className='photoLink' onClick={(e) =>  this.showPhoto(e, value.id , value.slug)}>
                                                                            <picture>
                                                                                <source srcSet={value.large_path} media="(max-width: 768px)" />
                                                                                <source srcSet={value.large_path} media="(min-width: 768px)" />
                                                                                <img srcSet={value.large_path} alt={value.name} />
                                                                            </picture>
                                                                        </a>
                                                                    </Link>
                                                                    <div className="project-action">
                                                                        <button className="btn btn-primary med save text-white" title="Save To Ideabook" compid="addToIdeabook"><i className="fa fa-plus pr-2"></i>Lưu ảnh</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="project-mobile-action d-block d-md-none w-100 my-2 text-center">
                                                                <button className="btn btn-primary med save text-white" title="Save To Ideabook" compid="addToIdeabook"><i className="fa fa-plus pr-2"></i>Lưu ảnh</button>
                                                            </div>
            
                                                            <div className="media-body pl-3 position-relative">
                                                                <div className="media-header">
                                                                    <div className="media-title">
                                                                        <h2 className="font-22 text-black-100"><a className="mt-0 mb-1 font-22 text-black-100" href="{{ route('image.detail',['id' => $image->id , 'name' => standardText($image->name)]) }}">{value.name}</a></h2>
                                                                    </div>
                                                                </div>
                                                                <div className="media-content mt-1">
                                                                    <span className="font-15 text-gray" dangerouslySetInnerHTML={{__html: value.descriptions}}>
                                                                        
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                            ))
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProviderDetail>
        )
    }
}