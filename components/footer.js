import {Link} from '../routes'
export default class footer extends React.Component{
    
    render(){
        return (
        <footer className="footer text-dark">
            <div className="container py-3">
                <div className="row footer-content mt-2 mx-0 flex-wrap-reverse">
                        <div className="col-lg-3 column pr-1 footer-logo pl-5">
                            <div className="widget">
                                <div className="about_widget">
                                    <div className="logo d-none d-md-block">
                                        <a href="/" title="Trở về trang chủ">
                                            <img src="/images/logo9houz.png" alt="9HOUZ.COM - Nguồn cảm hứng thiết kế nội thất, trang hoàng nhà cửa | 9houz.com" title="9houzz.com" width="140"/>
                                        </a>
                                    </div>
                                    <p className="font-13">Copyright &copy; 2018 9houz Inc.</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-9 row d-md-flex d-none">
                        <div className="col-lg-4 column footer-menu pr-1">
                            <div className="widget">
                                <p className="footer-title"> VỀ CHÚNG TÔI </p>
                                <div className="link_widgets">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Link prefetch route='/about/gioi-thieu'><a href="#" target="_blank" title="Giới thiệu">Giới thiệu</a></Link>
                                            <a href="#" title="Liên hệ" rel="nofollow">Liên hệ</a>
                                            <Link prefetch route='/about/chinh-sach-bao-mat'><a href="#" target="_blank" title="Chính sách bảo mật">Chính sách bảo mật</a></Link>
                                            <Link prefetch route='/about/dieu-khoan-su-dung'><a href="#" target="_blank" title="Điều khoản sử dụng">Điều khoản sử dụng</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-lg-4 column footer-menu pr-1">
                                <div className="widget">
                                    <p className="footer-title">KHÁM PHÁ</p>
                                    <div className="link_widgets">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <a href="#" title="Câu hỏi thường gặp" rel="nofollow"> Câu hỏi thường gặp </a>
                                                <a href="#" target="_blank" title="Hướng dẫn thanh toán" rel="nofollow"> Blog </a>
                                                <a href="#" target="_blank" title="Hướng dẫn thanh toán" rel="nofollow"> Tin tức </a>
                                                <a href="#" target="_blank" title="Hướng dẫn thanh toán" rel="nofollow"> Hỏi đáp </a>
                                                <a href="#" target="_blank" title="Hướng dẫn thanh toán" rel="nofollow"> Rao vặt </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-lg-4 column footer-menu">
                            <div className="widget">
                                <p className="footer-title">LIÊN HỆ</p>
                                <div className="d-block social-links">
                                    <div className="row">
                                        <div className="col-lg-12 d-block">
                                            <a target="_blank" rel="nofollow"  href="#" className="facebook d-block"><span className="fa fa-facebook"></span>Facebook</a>
                                            <a target="_blank" rel="nofollow" href="#" className="google d-block"><span className="fa fa-google-plus"></span>Google+</a>
                                            <a target="_blank" rel="nofollow"  href="#" className="website d-block"><span className="fa fa-youtube "></span>Youtube</a>
                                            <a target="_blank" rel="nofollow"  href="#" className="website d-block"><span className="fa fa-envelope-o "></span>Support@9houz.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );

    } 
}