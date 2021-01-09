import React from 'react'
import summaryStyles from "./summary.module.css"

const Summary = () => (
    <div className={summaryStyles.container}>
        <div className={summaryStyles.header}>
          <h1>Providing professional therapy in a safe setting</h1>
          <h3>Specializing in LGBTQ+ adolescence </h3>
        </div>
        
        <div className={summaryStyles.body}>
          <div className={summaryStyles.description}>
            <p>Hi there, I'm Jenna (she/hers) and I'm a licensed psychologist primarily practicing within an interpersonal and trauma-informed framework with adolescents and adults. I work with individuals and romantic partners from a collaborative, strengths-based, and culturally-informed perspective in effort to meet the client where they are at and give them voice in their treatment hopes. I have a particular passion working with clients around issues related to anxiety, depression, navigating life transitions, sex and sexuality, grief and loss, LGBQ+ and TGNC+ identities, and mindfulness practices.</p>
              <a className={summaryStyles.button} href="mailto:jenna@drjennawieden.com?subject=Let&#39;s have a conversation">Contact Jenna</a>
          </div>
        </div>

    </div>
)

export default Summary