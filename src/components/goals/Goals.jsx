import React from 'react'

export default function Goals() {
  return (
    <div className='hero d-flex justify-content-around align-items-center' style={{height: '30vh', width: '95%', backgroundColor: '', margin: 'auto auto'}}>
      <div className='me-auto ms-5'>
        <h3>Connect</h3>
        <p>Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.</p>
      </div>
      <div className='me-auto ms-5'>
        <h3>Learn</h3>
        <p>Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.</p>
      </div>
      <div className='me-auto ms-5'>
        <h3>Grow</h3>
        <p>Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
      </div>
    </div>
  )
}
