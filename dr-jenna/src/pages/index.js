import React from "react"
import Layout from "../components/layout"
import ImageBar from "../components/image_bar"
import Summary from "../components/summary"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <ImageBar/>

    <Summary/>

  </Layout>
)

export default IndexPage
