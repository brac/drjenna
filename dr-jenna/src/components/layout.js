/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import footerStyles from "./footer.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0 1rem 1.5rem`,
        }}
      >
        <main>{children}</main>
        
        <footer className={footerStyles.container}>
          
          <div id="footer" className={footerStyles.footer_main_text} >
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="http://www.benbracamonte.com">Ben</a>
          </div>
        
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
