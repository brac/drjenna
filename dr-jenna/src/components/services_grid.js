import React from 'react'
import ServiceCard from './services_card'

const ServicesGrid = () => (
    <div style={{
      border: 'purple dashed 1px',
      marginBottom: `3em`
    }}>
      <div style={{ 
        display: `flex`, 
        height: `300px`, 
      }}>
        
        <ServiceCard
          color='teal'
          service='LGBTQ'
        />
        
        <ServiceCard
          color='aqua'
          service=''
        />
        
        <ServiceCard
          color='pink'
          service='Couples Thereapy'
        />

      </div>

      <div style={{
        display: `flex`, 
        height: `300px`, 
      }}>
        <ServiceCard
          color='yellow'
          service='Assessment'
        />
        
        <ServiceCard
          color='skyblue'
          service=''
        />
        
        <ServiceCard
          color='dodgerblue'
          service='Gender Affirming'
        />
      </div>
    </div>

)

export default ServicesGrid