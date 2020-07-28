import React from 'react'
import summaryStyles from "./summary.module.css"

const Summary = () => (
    <div className={summaryStyles.container}>
        <div className={summaryStyles.header}>
          <h1>Everyone falls down sometimes but if you get back up it will be all fine</h1>
          <h3>And I would'nt have it any other way</h3>
        </div>
        
        <div className={summaryStyles.body}>
          <div className={summaryStyles.description}>
            <p>Hello, I'm Jenna. Fugiat adipisicing eiusmod adipisicing adipisicing velit. Amet dolor sint velit fugiat et veniam aute excepteur reprehenderit officia adipisicing consequat incididunt. Deserunt nisi eu et dolor. Enim excepteur in sit non ea pariatur ea aute nostrud Lorem dolore. Duis excepteur amet id ad voluptate reprehenderit mollit consequat esse proident ullamco irure adipisicing duis. Et anim do sunt sunt. Aute cupidatat dolor et sint dolor amet cupidatat sint nostrud ut incididunt eu. Consectetur nisi ipsum nisi ad elit. Cillum duis aliqua qui nostrud non ea sunt incididunt proident consectetur. Minim officia consequat consectetur proident do ea non.</p>
              <a className={summaryStyles.button} href="mailto:emailsforjenna@gmail.com?subject=Let&#39;s have a conversation">Contact Jenna</a>
          </div>
        </div>

    </div>
)

export default Summary