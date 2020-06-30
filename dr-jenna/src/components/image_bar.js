import React from "react"
// import { Link } from "gatsby"
import poppies from "../images/poppies_cropped.jpg"

const ImageBar = () => (
 
    <div
      style={{
        marginBottom: `0`,
    }}>
      <img 
        style={{
          width: `100%`,
          maxHeight: `500px`,
          overflow: `hidden`,
          padding: `0 0 5rem`,
        }}  
        src={poppies} alt="poppie flowers"/>
        <h2
          style={{
            top: `270px`,
            left: `100px`,
            fontSize : `6em`,
            position: `absolute`,
            zIndex: `100`,
            color: `white`,
          }}
        >I love Dogs</h2>
    </div>
)
  
  export default ImageBar
  