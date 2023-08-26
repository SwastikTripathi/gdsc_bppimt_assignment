import React from 'react'
import './guidelines.css'

export default function Guidelines() {
  return (
    <div className='hero d-flex justify-content-between align-items-center text-white' style={{padding: '3rem', width: '100%', backgroundColor: '#4285f4', margin: 'auto auto'}}>
        <div className="text-center" style={{margin: 'auto auto', paddingLeft: '20%', paddingRight: '20%'}}>
            <h3>Our Community Guidelines</h3>
            <p className='text-center'>Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or other protected category.</p>
            <a href="#link" className='btn bg-white'>Community Guidelines</a>
        </div>
    </div>
  )
}
