import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={headerStyles.header_container}>
      <h1>
        <Link
          className={headerStyles.header_main_text}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      
      
        <ul  
          className={headerStyles.header_nav}
        >
          <li>
            <p><Link to="/about/">About</Link></p>
          </li>
          <li>
            <p>
              FAQS
            </p>
          </li>
          <li>
            <p>
              Contact
            </p>
          </li>
          <li>
            <p>
              LGBTQ
            </p>
          </li>
        </ul>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Dr. Jenna`,
}

export default Header
