import React from 'react'
import Meta from './meta'
import Router from 'next/router'
import Head from 'next/head'
import {Link} from '../routes'
import { Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
         Navbar, NavbarToggler, NavbarBrand, Modal, ModalHeader, ModalBody,
         ModalFooter, ListGroup, ListGroupItem } from 'reactstrap'
import Cookies from 'universal-cookie'
import Package from '../package'
import NavHeader from './nav';
import Footer from './footer';
import css from 'styles/style.scss';

export default class extends React.Component {
  
  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      providers: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
      signinBtn: React.PropTypes.boolean
    }
  }
 
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      modal: false,
      providers: null,
      domain : null
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  componentDidMount() {
    this.setState({domain : window.location.origin})
  }
  async toggleModal(e) {
    if (e) e.preventDefault()

    // Save current URL so user is redirected back here after signing in
    if (this.state.modal !== true) {
      const cookies = new Cookies()
      cookies.set('redirect_url', window.location.pathname, { path: '/' })
    }

    this.setState({
      providers: this.state.providers || await NextAuth.providers(),
      modal: !this.state.modal
    })
  }
  
  render() {
    const { title ,
            des ,
            canonical ,
            og_url , 
            url_images , 
            robots , 
            css , 
            headerProjects ,
            headerCategories , 
            dataBase,
          backPageLink,
      nextPageLink,
      slick
          } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="fragment" content="!" />
          <title>{this.props.title || '9houz'}</title>
          {des && <meta name='description' itemProp='description' content={des} />}
          {canonical && <link rel="canonical" href={process.env.CURRENTDOMAIN + canonical} />}
          {title && <meta property="og:title" content={title} />}
          {des && <meta property="og:description" content={des} />}
          {og_url && <meta property="og:url" content={process.env.CURRENTDOMAIN + og_url} />}
          {url_images && <meta property="og:image" content={url_images} />}
          {robots && <meta name="robots" content={robots} />}
          {nextPageLink && <link rel="next" href={process.env.CURRENTDOMAIN + nextPageLink} />}
          {backPageLink && <link rel="prev" href={process.env.CURRENTDOMAIN + backPageLink} />}
          <style dangerouslySetInnerHTML={{__html: css}}/>
          { slick &&
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="/vendor/slick.min.css"/>
          }
          {
            slick &&
            <link rel="stylesheet" type="text/css" href="/vendor/slick-theme.min.css" />
          }
        </Head>
        <header>
        <div>
          <nav className="navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz">
              <button className="navbar-toggler px-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-2x fa-bars text-primary font-22"></span>
              </button>
              <div className="header-left">
              <Link route="index">
                <a className="navbar-brand">
                  <img src="/images/logo9houz.png" alt="Logo" title="9houzz.com" width="114"/>
                </a>
                </Link>
              </div> 
                  <a href="#" data-toggle="offcanvas" className="d-md-none"><i className="fa fa-user-circle-o font-22  py-3"></i></a>
              <div className="collapse navbar-collapse header-right my-2 nav-menu" id="collapse-header-login">
                <div className="header-search d-none d-sm-none d-md-block mr-auto">
                    <div className="input-radius py-0">
                        <form className="mt-1">
                        <input type="" className="badge-pill form-control border-0 font-14 px-3" name="" placeholder="Ý tưởng bạn muốn tìm kiếm..."></input>
                        <button className="fa fa-search icon-search bg-white border-0" data-toggle="offcanvas"></button>
                        </form>
                    </div>
                </div>
              </div>
          </nav>
        </div> 
        <NavHeader headerProjects={headerProjects} headerCategories={headerCategories} dataBase={dataBase}/>
      </header>
      <Meta />
      <div className="StoreNavigation-overlay" role="button" tabIndex="0" aria-label="Close"></div>
        <MainBody navmenu={this.props.navmenu} fluid={this.props.fluid} container={this.props.container}>
          {this.props.children}
        </MainBody>
       <Footer />
        {/*<script src="/mystatic/jquery-3.2.1.min.js"></script>*/}
        {/*<script src="/mystatic/popper.min.js"></script>*/}
        {/*<script src="/mystatic/bootstrap.min.js"></script>*/}
        {/*<script async src="/mystatic/polyfill.min.js"/>*/}
        <script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
        <script  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"/>
        <script  src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"/>
        {/*<script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async />*/}
      </React.Fragment>
    )
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return (
        <React.Fragment>
          {this.props.children}
          
        </React.Fragment>
      )
    } else if (this.props.navmenu === false) {
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
          {this.props.children}
        </Container>
      )
    } else {
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
              {this.props.children}
        </Container>
      )
    }
  }
}