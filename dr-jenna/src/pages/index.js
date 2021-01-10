import React from "react"
import Layout from "../components/layout"
import ImageBar from "../components/image_bar"
import Summary from "../components/summary"
import SEO from "../components/seo"
import Services from "../components/services_grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <ImageBar/>

    <Summary/>

    <Services/>

  </Layout>
)

export default IndexPage
