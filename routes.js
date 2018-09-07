const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('index','/','index')                                       // about  about     /about
.add('news', '/news') 
.add('image','/anh/:id-:slug','image/index')
.add('y-tuong', '/y-tuong','idea')                  // y-tuong   idea   /y-tuong
.add('idea.detail' , '/y-tuong/:params','idea-filter')
.add('pro.detail','/pro/:id-:slug','pro/index')
.add('pro.project','/pro/:id-:slug/d%E1%BB%B1-%C3%A1n','pro/project')
.add('pro.review','/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t','pro/review')
.add('project.detail','/du-an/:id-:slug','project/detail')
.add('static','/about/:slug','static-page')
.add('list-project','/danh-sach-du-an','project/list-project')
.add('list-project.detail','/danh-sach-du-an/:slug','project/list-project-filter')
.add('list-provider','/danh-sach-chuyen-gia','pro/list-provider')
.add('list-provider.detail','/danh-sach-chuyen-gia/:slug','pro/list-provider-filter')






               

