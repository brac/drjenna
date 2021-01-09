import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.scss"

const HeaderNavList = () => (
	<ul className={headerStyles.header_nav}>
		<li>
				<p><Link to="/about/">ABOUT</Link></p>
		</li>
		<li>
				<p><Link to="/faqs/">FAQS</Link></p>
		</li>
		<li>
				<p><Link to="/contact/">CONTACT</Link></p>
		</li>
		<li>
				<p><Link to="/lgbtq/">LGBTQ</Link></p>
		</li>
		<li>
				<p><Link to="/rates/">RATES</Link></p>
		</li>
	</ul>
)

export default HeaderNavList