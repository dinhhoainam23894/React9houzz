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
        <noscript id="deferred-styles">
            <link rel="stylesheet" type="text/css" href="/_next/static/style.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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

        </Head>
        <body>
          <Main />
          {/*<script dangerouslySetInnerHTML={{__html : `*/}
          {/*var botPattern = "(googlebot\\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";*/}
          {/*var re = new RegExp(botPattern, 'i');*/}
          {/*var userAgent = 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)';*/}
          {/*if (re.test(userAgent)) {*/}
              {/*console.log('the user agent is a crawler!');*/}
          {/*}*/}
         {/*`}} />*/}
          {/*<NextScript />*/}
        </body>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
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