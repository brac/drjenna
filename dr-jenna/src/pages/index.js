import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageBar from "../components/image_bar"
import Summary from "../components/summary"
import ServicesGrid from "../components/services_grid"
import SignUp from "../components/sign_up"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <ImageBar/>

    <Summary/>

    <ServicesGrid/>

    <SignUp/>

  </Layout>
)

export default IndexPage
