import React from 'react'
import ListProviderComponent from "../../components/ListProviderComponent";
const path_name = "danh-sach-chuyen-gia/"
import 'isomorphic-fetch'
import css from './list-provider.css';
const APIURL = process.env.DOMAIN + process.env.APIURI;

export default class extends React.Component{
  static async getInitialProps({query , req}){
    let res = null;
    let url_path= "/"+path_name+query.slug;
    if(query.page){
      res = await fetch(APIURL + path_name + encodeURIComponent(query.slug) + `?page=${query.page}`);
    }else{
      res = await fetch(APIURL + path_name + encodeURIComponent(query.slug));
    }
    const data = await res.json();
    return {
      data : data,
      providers : data.datas ? data.datas.data : null,
      title : data.seo ? data.seo.title : null,
      des : data.seo ? data.seo.des : null,
      canonical : data.seo ? data.seo.canonical : null,
      robots : data.seo ? data.seo.robots : null,
      og_url : data.seo ? data.seo.url : null,
      url_images : data.seo ? data.seo.url_image : null,
      headerProjects : data.headerProjects,
      headerCategories : data.headerCategories,
      dataBase : data.dataBase,
      h1 : data.h1,
      filterDefault : data.filter_default,
      page : data.page,
      url_path : url_path,
      breadcrumb : data.breadcumb,
      listBadge : data.listBadge,
      headers : req.headers
    }
  }
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ListProviderComponent
        {...this.props}
        detail={true}
        css={css}
      >
      </ListProviderComponent>
    )
  }
}