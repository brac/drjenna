import React from "react"
import { Link } from "gatsby"
import poppies  from "../images/poppies.jpg"

const ImageBar = () => (
 
    <div
      style={{
        // margin: `0 auto`,
        // width: `100%`,
        // padding: `0 1rem 1.5rem`,
        border: `1px red dashed`,
        
      }}
      >
        <img 
          style={{
            height: `300px`
          }}
          src={poppies} alt="poppie flowers"></img>
    </div>
)
  
  export default ImageBar
  