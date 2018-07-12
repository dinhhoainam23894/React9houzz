import React from 'react'
import IdeaComponent from '../components/IdeaComponent'

export default class IdeaFilter extends React.Component{
    static async getInitialProps({query}){
        return { params: query.params }
    }
    constructor(props){
        super(props)
    }
    render(){
        const { params  , url } = this.props        
        return(
            <IdeaComponent 
                photoId={this.props.url.query && this.props.url.query.photoId}
                ideaParams={params}
                asPath={url.asPath}
                path={url.pathname}>
            </IdeaComponent>
        )
    }
}