import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.css"

const HeaderNavList = () => (
    <ul className={headerStyles.header_nav}>
        <li>
            <p><Link to="/about/">About</Link></p>
        </li>
        <li>
            <p><Link to="/faqs/">FAQS</Link></p>
        </li>
        <li>
            <p><Link to="/contact/">Contact</Link></p>
        </li>
        <li>
            <p>
                <p><Link to="/lgbtq/">LGBTQ</Link></p>
            </p>
        </li>
        <li>
            <p>
                <p><Link to="/rates/">Rates</Link></p>
            </p>
        </li>
    </ul>
)

export default HeaderNavList