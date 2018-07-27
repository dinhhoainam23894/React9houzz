/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'reactstrap'
// import Styles from './css/index.scss'
import { withRouter } from 'next/router'

class ErrorPage extends React.Component {

  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    }
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { errorCode }
  }

  render() {
    var response
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          
          <div class="container">
          <div class="row mt-5">
            <div class="col-12 text-center title mt-3 mb-3">
              <img src="/static/images/404.png" />
            </div> 
            <div class="col-12 text-center font-25 mt-3" style={{color: "#d5d8f3"}}>
              Chúng tôi xin lỗi. Trang bạn tìm kiếm không tồn tại
            </div>
            <div class="col-6 offset-md-3 mt-3 text-center explain font-14">
              Thật không may là trang bạn đang tìm kiếm không thể tìm thấy. Nó có thể tạm thời không có, di chuyển hoặc không còn tồn tại. Kiểm tra Url mà bạn đã nhập cho bất kỳ lỗi nào và thử lại.
            </div>
            <div class="col-12 text-center mt-3">
              <a href="/" class="btn btn-primary font-weight-bold">
                Về trang chủ
              </a>
            </div>
          </div>
          <style global jsx>{`
            body {
              margin: 0;
              padding: 0;
              background: url("/static/images/background404.jpg");
              display: table;
              width: 100% !important;
              height: 100%;
              min-height : 100%;
              color: #ffffff !important;
              background-repeat:   no-repeat;
              background-position: center center;
              font-family: helvetica-ttf;
            }
            .container {
              padding-top: 11rem !important;
              padding-bottom: 9rem !important;
              max-width:100% !important;
              text-align: center;
              display: table-cell;
              background-color: rgba(185, 83, 164, 0.6) !important;
              background-size: cover;
              height : 100%;
            }
        
            .container{
              max-width: 400px;
            }
        
            .title{
              font-size: 100px;
            }`}
            </style>
        </div>
        )
        break
      case 500:
        response = (
          <div>
            <Head>
            </Head>
            <Container className="pt-5 text-center">
              <h1 className="display-4">Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </Container>
          </div>
        )
        break
      default:
        response = (
          <div>
            <Head>
            </Head>
            <Container className="pt-5 text-center">
              <h1 className="display-4">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred while
                trying to access <strong>{this.props.router.pathname}</strong>
              </p>
            </Container>
          </div>
        )
    }

    return response
  }

}

export default withRouter(ErrorPage)