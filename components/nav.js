import {Link} from '../routes'
import {mapObject , ucfirst} from '../libraries/helpers'
import $ from 'jquery'
export default class nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.nav-9houzz .nav-item').hover(function(){
          $('.StoreNavigation-overlay').addClass('is-open');
      },function(){
          $('.StoreNavigation-overlay').removeClass('is-open');
      });
      $('[data-toggle="collapse"]').on('click', function() {
          $(this).toggleClass("rotate-chevron");
      });
    })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const  {headerProjects , headerCategories , dataBase} = this.props
    return (
      <div className="nav-9houzz container-fluid">
        <nav className="navbar navbar-light navbar-expand-md bg-faded container header-menu">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start">
              <li className="offset-0 offset-md-1 nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-lightbulb-o my-auto" aria-hidden="true" style={{"paddingBottom": "1px"}}></i>
                  <Link route='/y-tuong'><a className="nav-link mr-auto">Ý TƯỞNG</a></Link>
                  <a className="navbar-toggler menu-toggle" data-toggle="collapse" data-target="#nav-product-2" aria-controls="collapse-login" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-chevron-right"></span></a>
                </div>
                <div className="collapse navbar-collapse" id="nav-product-2">
                <ul className="nav-child container list-unstyled" role="menu">
                  {
                    dataBase && dataBase.map((value,index) => {
                      return <li key={index}>
                        <Link route={value.uri}>
                        <a ids={value.original} href={value.uri} className={`font-15 font-weight-bold text-uppercase nav-idea ${value.class}`}>
                          {value.name_tag}
                        </a>
                        </Link>
                      </li>
                    })
                  }
                </ul>
                </div>
              </li>
              <li className="nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-briefcase my-auto" aria-hidden="true"></i>
                  <a className="nav-link mr-auto" href="#">DỰ ÁN</a>
                  <a className="navbar-toggler menu-toggle" data-toggle="collapse" data-target="#nav-product" aria-controls="collapse-login" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-chevron-right "></span></a>
                </div>
                <div className="collapse navbar-collapse nav-prof" id="nav-product">
                  <div className="nav-child container" role="menu">
                    <div className="row py-1 px-2 nav-service d-flex">
                      <div className="col-md-12 text-left">
                        <ul className="list-unstyled">
                          {
                              headerProjects && mapObject(headerProjects,function(index,value){
                                return <li className="mt-1" key={value.id}>
                                  <Link route={value.uri}>
                                    <a className="text-dark font-14">{value.name_tag}</a>
                                  </Link>
                                </li>
                              })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-graduation-cap my-auto" aria-hidden="true"></i>
                  <a className="nav-link mr-auto" href="#">PRO</a>
                  <a className="navbar-toggler menu-toggle" data-toggle="collapse" data-target="#nav-product-3" aria-controls="collapse-login" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-chevron-right "></span></a>
                </div>
                <div className="collapse navbar-collapse nav-prof" id="nav-product-3">
                  <div className="nav-child container" role="menu">
                    <div className="row py-1 px-2 nav-service d-flex">
                      <div className="col-md-12 text-left">
                        <ul className="list-unstyled">
                        {
                          headerCategories && mapObject(headerCategories,function(index,value){
                            return <li className="mt-1" key={value.id}>
                              <Link route={value.uri}>
                              <a className="text-dark font-14">{value.name_tag}</a>
                              </Link>
                            </li>
                          })
                        }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
              <li className="nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-pencil-square-o my-auto" aria-hidden="true"></i>
                  <a className="nav-link" href="#">BLOG</a>
                </div>
              </li>
              <li className="nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-rss my-auto" aria-hidden="true"></i>
                  <a className="nav-link" href="#">TIN TỨC</a>
                </div>
              </li>
              <li className="nav-item py-1 px-1 d-block d-md-none">
                <div className="d-flex w-100">
                  <i className="fa fa-info-circle my-auto" aria-hidden="true"></i>
                  <a className="nav-link mr-auto" href="#">VỀ CHÚNG TÔI</a>
                  <a className="navbar-toggler menu-toggle" data-toggle="collapse" data-target="#nav-product-4" aria-controls="collapse-login" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-chevron-right "></span></a>
                </div>
                <div className="collapse navbar-collapse nav-prof" id="nav-product-4">
                  <div className="nav-child container" role="menu">
                    <div className="row py-1 px-2 nav-service d-flex">
                      <div className="col-md-12 text-left">
                        <ul className="list-unstyled">
                          <li><Link route='/about/gioi-thieu'><a target="_blank" title="Giới thiệu">Giới thiệu</a></Link></li>
                          <li><a target="_blank" title="Liên hệ" rel="nofollow">Liên hệ</a></li>
                          <li><Link route='/about/chinh-sach-bao-mat'><a href="#" target="_blank" title="Chính sách bảo mật">Chính sách bảo mật</a></Link></li>
                          <li><Link route='/about/dieu-khoan-su-dung'><a href="#" target="_blank" title="Điều khoản sử dụng">Điều khoản sử dụng</a></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}