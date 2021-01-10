import React from 'react'
import ServiceCard from './services_card'
import servicesStyles from "./services_grid.module.scss"

const ServicesGrid = () => (
  <div className={servicesStyles.container}>
    <h2 className={servicesStyles.title}>
      Services Offered
    </h2>

    <div className={servicesStyles.services6Grid}>
      <div className={servicesStyles.serviceCol}>
        
        <ServiceCard
          color='#41CAA1'
          service='Life Transitions'
        />
        
        <ServiceCard
          color='#3CB5A0'
          service='Anxeity'
        />
        
        <ServiceCard
          color='#34A79F'
          service='Stress'
        />

      </div>

      <div className={servicesStyles.serviceCol}>
        <ServiceCard
          color='#3DBBA1'
          service='Mood Disorders'
        />
        
        <ServiceCard
          color='#32A49F'
          service='Sexuality'
        />
        
        <ServiceCard
          color='#309BA0'
          service='Mindfullness'
        />
      </div>
    </div>
    
  </div>
)

export default ServicesGrid