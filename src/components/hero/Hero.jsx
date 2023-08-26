import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <div style={{backgroundColor: '#f1f3f4'}}>
      <div className='hero d-flex justify-content-between align-items-center' style={{height: '80vh', width: '95%', margin: 'auto auto'}}>
        <div>
            <h1 className='text-primary'>Google Developer Student Clubs</h1>
            <p style={{width: '90%', textAlign: 'justify'}}>B.P. Poddar Institute of Management and Technology or BPPIMT is an undergraduate college in West Bengal, India.
            We, in the community, conduct webinars, hands-on workshops, tutorials, informative talks and more to engage with the audience and grow the community at large. To connect with us and help us promote the peer-to-peer learning culture,Hit the JOIN button above.
Login and complete your profile, if prompted to.
That's it! Welcome aboard.
            </p>
            <a href="#link" className='btn btn-primary m-3'>Join the club</a>
            <a href="#link" className='btn  bg-white m-1'>Learn more</a>
        </div>
        <div>
            <img src='/assets/gdsc_poster.png' style={{width: '45vw'}}></img>
        </div>
      </div>
      
    </div>
  )
}
