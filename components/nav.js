import Link from 'next/link'

export default class nav extends React.Component {
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
      <div className="nav-9houzz container-fluid">
        <nav className="navbar navbar-light navbar-expand-md bg-faded container header-menu">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start">
              <li className="offset-0 offset-md-1 nav-item py-1 px-1">
                <div className="d-flex w-100">
                  <i className="fa fa-lightbulb-o my-auto" aria-hidden="true"></i>
                  <Link prefetch  href='/y-tuong'><a className="nav-link mr-auto">Ý TƯỞNG</a></Link>
                  <a className="navbar-toggler menu-toggle" data-toggle="collapse" data-target="#nav-product-2" aria-controls="collapse-login" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-chevron-right"></span></a>
                </div>
                <div className="collapse navbar-collapse" id="nav-product-2">
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
                          <li className="mt-1"><a href="#" className="text-dark font-14">aaaa</a></li>
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
                          <li className="mt-1"><a href="#" className="text-dark font-14">Cate</a></li>
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
                          <li><a href="{{ route('static_page',['page' => str_slug('giới thiệu')]) }}" target="_blank" title="Giới thiệu">Giới thiệu</a></li>
                          <li><a href="#" target="_blank" title="Liên hệ" rel="nofollow">Liên hệ</a></li>
                          <li><a href="{{ route('static_page',['page' => str_slug('Chính sách bảo mật')]) }}" target="_blank" title="Chính sách bảo mật">Chính sách bảo mật</a></li>
                          <li><a href="{{ route('static_page',['page' => str_slug('Điều khoản sử dụng')]) }}" target="_blank" title="Điều khoản sử dụng">Điều khoản sử dụng</a></li>
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