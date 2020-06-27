import React from 'react'
import { Link } from 'gatsby'
import drJennaPic from "../images/drJenna.jpg"
import summarySyles from "./summary.module.css"

const Summary = () => (
    <div className={summarySyles.container}>
        <div className={summarySyles.header}>
          <h4 className={summarySyles.header_identity}>Jenna M. Wieden, Psychologist, PhD, LP</h4>
          <h1>Et ad ad cupidatat consectetur cupidatat proident commodo eu dolore laborum est.</h1>
        </div>
        
        <div className={summarySyles.body}>
          <img className={summarySyles.image} src={drJennaPic} alt="Dr Jenna Image"/>
        
          <div className={summarySyles.description}>
            <p >Hello, I'm Jenna. Fugiat adipisicing eiusmod adipisicing adipisicing velit. Amet dolor sint velit fugiat et veniam aute excepteur reprehenderit officia adipisicing consequat incididunt. Deserunt nisi eu et dolor. Enim excepteur in sit non ea pariatur ea aute nostrud Lorem dolore. Duis excepteur amet id ad voluptate reprehenderit mollit consequat esse proident ullamco irure adipisicing duis. Et anim do sunt sunt. Aute cupidatat dolor et sint dolor amet cupidatat sint nostrud ut incididunt eu. Consectetur nisi ipsum nisi ad elit. Cillum duis aliqua qui nostrud non ea sunt incididunt proident consectetur. Minim officia consequat consectetur proident do ea non.</p>
            
            <div className={summarySyles.button}>
              <Link className={summarySyles.button_text} to="/about/">More About Jenna</Link>
            </div>
          </div>
        </div>

    </div>
)

export default Summary