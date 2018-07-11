import React from 'react'
import IdeaComponent from '../components/IdeaComponent'
export default class extends React.Component{
    
    constructor(props){
        super(props)
    }
    
   render(){
       const { url } = this.props
       return(
            <IdeaComponent 
                photoId={this.props.url.query && this.props.url.query.photoId}
                asPath={url.asPath} 
                path={url.pathname}
                ></IdeaComponent>
       )
   }
}
