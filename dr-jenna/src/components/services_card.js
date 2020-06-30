// import { Link } from "gatsby"
import React from "react"

export default function serviceCard (props) {
    return (
        <div style={{
            backgroundColor: props.color,
            flex: `1`
        }}>
            <p>{props.service}</p>
        </div>
    )
}