// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import jQuery from 'jquery'
import css from 'styles/style.scss';

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="vi">
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/_next/static/style.css"/>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="/vendor/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/slick-theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
       
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120211455-1" />*/}
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