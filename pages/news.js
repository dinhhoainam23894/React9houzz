import React from 'react'
import 'isomorphic-fetch'
// import Link from 'next/link'
import {Link} from '../routes'
import Layout from '../components/layout'
export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = 'posts'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  render () {
    const { data } = this.props
    return (
      <Layout {...this.props} navmenu={false} container={false}>
      <div>
        <ul>
          <Item name="test">test</Item>
          <Item name="index">index</Item>
          <Item name="y-tuong">ý tưởng</Item>
        </ul>
      </div>
      </Layout>
    )
  }
}
const Item = ({ name,params, children }) => (
  <li>
    <Link route={name}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)