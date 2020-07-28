import React from "react"

import imageBarStyles from "./imageBar.module.css"

const ImageBar = () => (
 
    <div className={imageBarStyles.container}>
      <div className={imageBarStyles.main_image}>
      </div>
      <h2 className={imageBarStyles.image_text}>
        Try It
      </h2>
    </div>
)
  
  export default ImageBar