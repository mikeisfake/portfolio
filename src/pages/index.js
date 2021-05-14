import * as React from "react"
import {Link} from 'gatsby'


import Layout from '../components/layout'
import EmailForm from '../components/email'

const Index = () => {
  return (
    <Layout>
      <div id="hero">
        <div className="title">
          <h1>i'm mike</h1>
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
