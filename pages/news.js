import Layout from '../components/layout'
import React from 'react'
import Error from './_error';
import 'isomorphic-fetch'

export  default  class Example extends React.Component {
  static async getInitialProps({ res }) {
    const data = await fetch("https://api.9houz.com/api/y-tuong/mẫu-thiết-kế-Ban-công-sân-vườn");
    const errorCode = data.status > 200 ? data.status : false;
    return { data  , errorCode , test : res.statusCode};
  }
  render() {
    const { data } = this.props;
    console.log(this.props)
    if (this.props.errorCode) {
      return <Error errorCode={this.props.errorCode} />
    }

    return(
      <div>
        <div>data: 1111</div>
      </div>
    )
  }
}