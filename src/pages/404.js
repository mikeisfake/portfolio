import * as React from "react"

import { Emoji } from '../components/Emoji.js'
import Layout from '../components/Layout'

const NotFoundPage = () => (
<Layout>
  <div id="hero">
    <div className="title">
      <h2>
        there's nothing here... &nbsp;
        <Emoji hex='&#x1F914;' description="thinking face emoji"/>
      </h2>
    </div>
  </div>
</Layout>
)

export default NotFoundPage
