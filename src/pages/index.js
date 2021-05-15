import * as React from "react"
import {Link} from 'gatsby'


import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <div id="hero">
        <div className="title">
          <h1><span className="wave" role='img' aria-label='waving emoji'>&#x1F44B;&#x1F3FE; </span>i'm mike</h1>
          <h2>& I love to make beautiful things for the web.</h2>
        </div>
        <span className="cta">
          <Link to='/contact' className="pulse">contact me</Link>
        </span>

      </div>

    </Layout>
  )
}

export default Index
