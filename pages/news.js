import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params = 'posts'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  render () {
    return (
        <div>
        <h1>My {this.props.id} blog post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }
}