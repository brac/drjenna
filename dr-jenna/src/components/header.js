import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import HeaderNavList from "./header_list"

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
        <HeaderNavList/>
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