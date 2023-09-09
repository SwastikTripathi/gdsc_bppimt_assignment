import React from 'react'
import './events.css'

export default function Events() {
  return (
    <div style={{marginTop: '3rem'}}>
      <section class="cards">
        <h2 className='text-center mb-5'>Organizers</h2>
  <ul class="cards__list">
    <li id="slide-card-1" class="card" style={{borderRadius: '3rem'}}>
        <img src='https://i.ibb.co/vcjTLKt/download-1.jpg' style={{width: '150px', margin: 'auto', marginTop: '2rem'}}></img><br />
      <p>
        Jonathan Swift<br/>
        <cite>Role</cite>
      </p><br />
        <a href="#" className='btn btn-outline-primary w-50 mx-auto'>View Profile</a>
    </li>
    <li id="slide-card-2" class="card" style={{borderRadius: '3rem'}}>
    <img src='https://i.ibb.co/nrLTJLM/download.jpg' style={{width: '150px', margin: 'auto', marginTop: '2rem'}}></img><br />
      <p>
        Jonathan Swift<br/>
        <cite>Role</cite>
      </p><br />
        <a href="#" className='btn btn-outline-primary w-50 mx-auto'>View Profile</a>
    </li>
    <li id="slide-card-3" class="card" style={{borderRadius: '3rem'}}>
    <img src='https://i.ibb.co/j32SSMH/download-4.jpg' style={{width: '150px', margin: 'auto', marginTop: '2rem'}}></img><br />
      <p>
        Jonathan Swift<br/>
        <cite>Role</cite>
      </p><br />
        <a href="#" className='btn btn-outline-primary w-50 mx-auto'>View Profile</a>
    </li>
    <li id="slide-card-4" class="card" style={{borderRadius: '3rem'}}>
    <img src='https://i.ibb.co/1Lbjh8R/download-3.jpg' style={{width: '150px', margin: 'auto', marginTop: '2rem'}}></img><br />
      <p>
        Jonathan Swift<br/>
        <cite>Role</cite>
      </p><br />
        <a href="#" className='btn btn-outline-primary w-50 mx-auto'>View Profile</a>
    </li>
  </ul>
</section>
    </div>
  )
}
