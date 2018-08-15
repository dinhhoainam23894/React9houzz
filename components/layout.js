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
            dataBase
          } = this.props
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || '9houz'}</title>
          {des && <meta name='description' itemProp='description' content={des} />}
          {canonical && <link rel="canonical" href={process.env.CURRENTDOMAIN + canonical} />}
          {title && <meta property="og:title" content={title} />}
          {des && <meta property="og:description" content={des} />}
          {og_url && <meta property="og:url" content={process.env.CURRENTDOMAIN + og_url} />}
          {url_images && <meta property="og:image" content={url_images} />}
          {robots && <meta name="robots" content={robots} />}
          <style dangerouslySetInnerHTML={{__html: css}}/>
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
                  <img src="/static/images/logo9houz.png" alt="Logo" title="9houzz.com" width="114"/>
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
       <script src="/static/jquery-3.2.1.min.js"></script>
       <script src="/static/popper.min.js"></script>
       <script src="/static/bootstrap.min.js"></script>
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

// export class UserMenu extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this)
//   }

//    async handleSignoutSubmit(event) {
//      event.preventDefault()
     
//      // Save current URL so user is redirected back here after signing out
//      const cookies = new Cookies()
//      cookies.set('redirect_url', window.location.pathname, { path: '/' })

//      await NextAuth.signout()
//      Router.push('/')
//    }
   
//   render() {
//     if (this.props.session && this.props.session.user) {
//       // If signed in display user dropdown menu
//       const session = this.props.session
//       return (
//         <Nav className="ml-auto" navbar>
//           {/*<!-- Uses .nojs-dropdown CSS to for a dropdown that works without client side JavaScript ->*/}
//           <div tabIndex="2" className="dropdown nojs-dropdown">
//             <div className="nav-item">
//               <span className="dropdown-toggle nav-link d-none d-md-block">
//                 <span className="icon ion-md-contact" style={{fontSize: '2em', position: 'absolute', top: -5, left: -25}}></span>
//               </span>
//               <span className="dropdown-toggle nav-link d-block d-md-none">
//                 <span className="icon ion-md-contact mr-2"></span>
//                 {session.user.name || session.user.email}
//               </span>
//             </div>
//             <div className="dropdown-menu">
//               <Link prefetch href="/account">
//                 <a href="/account" className="dropdown-item"><span className="icon ion-md-person mr-1"></span> Your Account</a>
//               </Link>
//               <AdminMenuItem {...this.props}/>
//               <div className="dropdown-divider d-none d-md-block"/>
//               <div className="dropdown-item p-0">
//                 <Form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
//                   <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
//                   <Button type="submit" block className="pl-4 rounded-0 text-left dropdown-item"><span className="icon ion-md-log-out mr-1"></span> Sign out</Button>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </Nav>
//       )
//      } if (this.props.signinBtn === false) {
//        // If not signed in, don't display sign in button if disabled
//       return null
//     } else {
//       // If not signed in, display sign in button
//       return (
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             {/**
//               * @TODO Add support for passing current URL path as redirect URL
//               * so that users without JavaScript are also redirected to the page
//               * they were on before they signed in.
//               **/}
//             <a href="/auth?redirect=/" className="btn btn-outline-primary" onClick={this.props.toggleModal}><span className="icon ion-md-log-in mr-1"></span> Sign up / Sign in</a>
//           </NavItem>
//         </Nav>
//       )
//     }
//   }
// }

// export class AdminMenuItem extends React.Component {
//   render() {
//     if (this.props.session.user && this.props.session.user.admin === true) {
//       return (
//         <React.Fragment>
//           <Link prefetch href="/admin">
//             <a href="/admin" className="dropdown-item"><span className="icon ion-md-settings mr-1"></span> Admin</a>
//           </Link>
//         </React.Fragment>
//       )
//     } else {
//       return(<div/>)
//     }
//   }
// }

// export class SigninModal extends React.Component {
//   render() {
//     if (this.props.providers === null) return null
    
//     return (
//       <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} style={{maxWidth: 700}}>
//         <ModalHeader>Sign up / Sign in</ModalHeader>
//         <ModalBody style={{padding: '1em 2em'}}>
//           <Signin session={this.props.session} providers={this.props.providers}/>
//         </ModalBody>
//       </Modal>
//     )
//   }
// }