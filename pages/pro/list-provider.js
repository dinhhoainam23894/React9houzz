import React from 'react'
import Layout from '../../components/layout'
import Sidebar from '../../components/sideBar'
import 'isomorphic-fetch'
import ListProviderComponent from "../../components/ListProviderComponent";
const APIURL = process.env.DOMAIN + process.env.APIURI + 'danh-sach-chuyen-gia/'
import css from './list-provider.css';
export default class extends React.Component{
  static async getInitialProps({query , req}){
    let res = null;
    if(query.page){
      res = await fetch(APIURL + `?page=${query.page}`)
    }else{
      res = await fetch(APIURL)
    }
    const data = await res.json()
    let url_path= '/danh-sach-chuyen-gia/';
    return {
      data : data,
      providers : data.datas.data,
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
      />
    )
  }
}