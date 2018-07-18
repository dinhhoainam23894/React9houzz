import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Layout from '../components/layout'
import css from './index.scss';

export default () => (
  <Layout>
    <div>
    <h1 className={css.landing}>Landing Page</h1>
        <div className="hero">
          <h1 className="title">Welcome to 9houzz!</h1>
          <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>

          <div className="row">
          <Link href='/pro?id=bar&slug=name' as='/pro/bar-slug' params={{ id: "test" ,slug:'test' }}><a>My first blog post with a query string of foo=bar</a></Link>
            <Link href="https://github.com/zeit/next.js#getting-started">
              <a className="card">
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title, .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9B9B9B;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
    </div>
  </Layout>
  
)

