import Head from './head'
import {Link} from '../routes'


    export default class header extends React.Component {
      constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <header>
            <div class="header-top">
              <nav class="navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz">
                  <button class="navbar-toggler px-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="fa fa-2x fa-bars text-primary font-22"></span>
                  </button>
                  <div class="header-left">
                    <Link prefetch router="home">
                      <a class="navbar-brand">
                        <img src="/static/images/logo9houz.png" alt="Logo" title="9houzz.com" width="114"/>
                      </a>
                    </Link>
                  </div> 
                      <a href="#" data-toggle="offcanvas" class="d-md-none"><i class="fa fa-user-circle-o font-22  py-3"></i></a>
                  <div class="collapse navbar-collapse header-right my-2 nav-menu" id="collapse-header-login">
                    <div class="header-search d-none d-sm-none d-md-block mr-auto">
                        <div class="input-radius py-0">
                            <form className="mt-1">
                            <input type="" class="badge-pill form-control border-0 font-14 px-3" name="" placeholder="Ý tưởng bạn muốn tìm kiếm..."></input>
                            <button class="fa fa-search icon-search bg-white border-0" data-toggle="offcanvas"></button>
                            </form>
                        </div>
                    </div>
                  </div>
              </nav>
            </div> 
        
          </header>
        );
      }
    }