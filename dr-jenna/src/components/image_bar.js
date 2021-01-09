import React from "react"

import imageBarStyles from "./imageBar.module.scss"

const ImageBar = () => (
 
    <div className={imageBarStyles.container}>
      <div className={imageBarStyles.main_image}>
      </div>
      <h2 className={imageBarStyles.image_text}>
        dr Jenna
      </h2>
    </div>
)
  
  export default ImageBar