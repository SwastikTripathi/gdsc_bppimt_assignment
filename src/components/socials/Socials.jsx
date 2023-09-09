import React from 'react'
import './socials.css'

export default function () {
  return (
    <div className='hero d-flex justify-content-between align-items-center' style={{width: '95%', backgroundColor: '', margin: 'auto auto', padding: '3rem'}}>
      <div style={{margin: 'auto auto'}}>
        <h3 className='text-center'>Stay in Touch</h3><br />
        <div className='d-flex' style={{width: '50%'}}>
            <a href="#link" className='mx-2 socialBtn'><img src='https://i.ibb.co/swYGcxT/yt.png' style={{width: '50px'}}></img></a>
            <a href="#link" className='mx-2 socialBtn'><img src='https://i.ibb.co/6rjKcfk/linked.png' style={{width: '50px'}}></img></a>
            <a href="#link" className='mx-2 socialBtn'><img src='https://i.ibb.co/Nt9B0m8/ig.jpg' style={{width: '50px'}}></img></a>
            <a href="#link" className='mx-2 socialBtn'><img src='https://i.ibb.co/qjG7qm1/x.png' style={{width: '50px'}}></img></a>
        </div>
        
        <hr style={{color: '#4285f4', height: '20px'}}/>
      </div>
    </div>
  )
}
