// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import jQuery from 'jquery'
import css from 'styles/style.scss';

export default class MyDocument extends Document {
    componentDidUpdate(){
        var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
        else window.addEventListener('load', loadDeferredStyles);
    }
  render() {
    
    return (
      <html lang="vi">
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <noscript id="deferred-styles">
            <link rel="stylesheet" type="text/css" href="/_next/static/style.css"/>
        </noscript>
        <script dangerouslySetInnerHTML={{__html: `var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
        else window.addEventListener('load', loadDeferredStyles);`}} />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="/vendor/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/slick-theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
       
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120211455-1"></script>*/}
        {/*<script dangerouslySetInnerHTML={{__html : `*/}
            {/*window.dataLayer = window.dataLayer || [];*/}
            {/*function gtag(){dataLayer.push(arguments);}*/}
            {/*gtag('js', new Date());*/}

            {/*gtag('config', 'UA-120211455-1');*/}
        {/*` }}>*/}
        {/*</script>*/}
      </html>
    )
  }
  
}