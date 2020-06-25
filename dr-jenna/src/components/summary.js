import React from 'react'
import { Link } from 'gatsby'
import drJennaPic from "../images/drJenna.jpg"

const Summary = () => (
    <div id="summary" style={{
        // border: 'blue dashed 1px',
        maxWidth: `1024px`,
        margin: `auto`,
        paddingBottom: `5em`
      }}>
        
        <div style={{ textAlign: `center` }}>
          <h4 style={{ marginBottom: `0` }}>Jenna M. Wieden, Psychologist, PhD, LP</h4>
          <h1>Et ad ad cupidatat consectetur cupidatat proident commodo eu dolore laborum est.</h1>
        </div>
        
        <div style={{ display: `flex`}}>
          <img src={drJennaPic} alt="Dr Jenna Image" style={{maxWidth: `320px`, marginBottom: `0`}}></img>
        
          <div style={{ paddingLeft: `2em`, display: `flex`, flexDirection: `column`, justifyContent: `space-between`}}>
            <p >Hello, I'm Jenna. Fugiat adipisicing eiusmod adipisicing adipisicing velit. Amet dolor sint velit fugiat et veniam aute excepteur reprehenderit officia adipisicing consequat incididunt. Deserunt nisi eu et dolor. Enim excepteur in sit non ea pariatur ea aute nostrud Lorem dolore. Duis excepteur amet id ad voluptate reprehenderit mollit consequat esse proident ullamco irure adipisicing duis. Et anim do sunt sunt. Aute cupidatat dolor et sint dolor amet cupidatat sint nostrud ut incididunt eu. Consectetur nisi ipsum nisi ad elit. Cillum duis aliqua qui nostrud non ea sunt incididunt proident consectetur. Minim officia consequat consectetur proident do ea non.</p>
            
            <div style={{
              backgroundColor: `#99ccff`,
              padding: `1em`,
              alignSelf: `flex-start`
            }}>
              <Link to="/about/" style={{
                  textDecoration: `none`,
                  fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
                  color: `white`
                }}>More About Jenna</Link>
            </div>
          </div>
        </div>

    </div>
)

export default Summary