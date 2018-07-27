import React from 'react'
import ImageDetail from './image-detail'
import Layout from './layout'
export default class extends React.Component{
    static async getInitialProps({ query }) {
        return { id: query.id ,slug : query.slug}
    }
    dismiss (e) {

        e.preventDefault()
        if (this._lbClose === e.target) {
            e.preventDefault()

          if (this.props.onDismiss) {
            this.props.onDismiss()
          }
        }
      }
    render(){
        const { id , slug } = this.props
        return(
            <div id="lightbox" className="modal Ifade show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div id="lbMainControls" className="trackMe">
                    <div>
                        <a ref={el => (this._lbClose = el)} className="lbCloseButton lbClose" href=""  onClick={(e) => this.dismiss(e)}></a>
                    </div>
                    <style global jsx>
                        {`
                        #lightbox
                            {
                            overflow-x: scroll !important;
                            }

                            html
                            {
                                height: 100%;
                                overflow: hidden;
                            }`}
                    </style>
                </div>
                <ImageDetail {...this.props} id={this.props.id} slug={slug}></ImageDetail>
            </div>
        )
    }

}