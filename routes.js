const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('index')                                       // about  about     /about
.add('test', '/test')                               // blog   blog      /blog/:slug
.add('news', '/news') 
.add('y-tuong', '/y-tuong','idea')                  // y-tuong   idea   /y-tuong
.add('idea.detail' , '/y-tuong/:params','idea-filter')
.add('pro.detail','/pro/:id-:slug','pro/index')
.add('pro.project','/pro/:id-:slug/d%E1%BB%B1-%C3%A1n','pro/project')
.add('pro.review','/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t','pro/review')
.add('project.detail','/du-an/:id-:slug','project/index')
.add('anh.detail','/anh/:id-:slug','pro/index')

               

