import React from 'react'
import Layout from '../../components/layout'
import Sidebar from '../../components/sideBar'
import 'isomorphic-fetch'
import ListProjectComponent from "../../components/ListProjectComponent";
const APIURL = process.env.DOMAIN + process.env.APIURI + 'danh-sach-du-an/'
import css from "./list-project.css";

export default class extends React.Component{
    static async getInitialProps({query}){
        let res = null;
      if(query.page){
        res = await fetch(APIURL + `?page=${query.page}`)
      }else{
        res = await fetch(APIURL)
      }
        const data = await res.json()
        let url_path= '/danh-sach-du-an/';
        return {
            data : data,
            projects : data.datas ? data.datas.data : null,
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
            breadcrumbs : data.breadcrumb
        }
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var showChar = 200;  // How many characters are shown by default
		    var ellipsestext = "";
		    var moretext = "Xem thêm >";
		    var lesstext = "Rút gọn <";
		    $('.more').each(function() {
		        var content = $(this).html();
		 
		        if(content.length > showChar) {
		 
		            var c = content.substr(0, showChar);
		            var h = content.substr(showChar, content.length - showChar);
		 
		            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink font-14">' + moretext + '</a></span>';
		 
		            $(this).html(html);
		        }
		 
		    });
		 
		    $(".morelink").click(function(){
		        if($(this).hasClass("less")) {
		            $(this).removeClass("less");
		            $(this).html(moretext);
		        } else {
		            $(this).addClass("less");
		            $(this).html(lesstext);
		        }
		        $(this).parent().prev().toggle();
		        $(this).prev().toggle();
		        return false;
		    });
    }
    render(){
        return(
          <ListProjectComponent
            {...this.props}
            detail={true}
            css = {css}
          >
          </ListProjectComponent>
        )
    }
}