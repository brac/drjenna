import React from 'react'
import { Link } from 'gatsby'

const Summary = () => (
    <div id="summary" style={{
        height: '400px', 
        border: 'blue dashed 1px',
        width: `60%`,
        margin: `auto`  
      }}>
      <h3>Professional Title</h3>
      <h1>Title line</h1>
      <h2>Jenna Picture</h2>
      <p>Blurb about Jenna and her practice</p>
      <Link to="/about/">Go to About</Link>
    </div>
)

export default Summary