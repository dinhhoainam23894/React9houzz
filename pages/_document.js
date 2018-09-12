// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
// import jQuery from 'jquery'
// import css from 'styles/style.scss';
import React from "react";
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="vi">
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/*<noscript id="deferred-styles">*/}
            {/*<link rel="stylesheet" type="text/css" href="https://9houz.com/_next/static/style.css"/>*/}
            {/*<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}
        {/*</noscript>*/}
        {/*<script dangerouslySetInnerHTML={{__html: `var loadDeferredStyles = function() {*/}
            {/*var addStylesNode = document.getElementById("deferred-styles");*/}
            {/*var replacement = document.createElement("div");*/}
            {/*replacement.innerHTML = addStylesNode.textContent;*/}
            {/*document.body.appendChild(replacement)*/}
            {/*addStylesNode.parentElement.removeChild(addStylesNode);*/}
        {/*};*/}
        {/*var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||*/}
            {/*window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;*/}
        {/*if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });*/}
        {/*else window.addEventListener('load', loadDeferredStyles);`}} />*/}
        </Head>
        {/*<script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async />*/}
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120211455-1" />
        <script dangerouslySetInnerHTML={{__html : `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-120211455-1');
        ` }}>
        </script>
      </html>
    )
  }
  
}