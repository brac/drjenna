import { Link } from "gatsby"
import React from "react"
import servicesStyles from "./services_grid.module.scss"

export default function serviceCard (props) {
    return (
        <div className={servicesStyles.card} style={{
            backgroundColor: props.color,
        }}>
            <Link 
                className={servicesStyles.text}
                to="/about/"
            >
                {props.service}
            </Link>
        </div>
    )
}