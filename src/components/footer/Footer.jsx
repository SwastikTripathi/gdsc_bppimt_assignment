import React from 'react'
import './footer.css'

export default function Footer() {
  return (<div>
    <div className='hero d-flex justify-content-around align-items-center' style={{height: '', width: '95%', backgroundColor: '', margin: 'auto auto'}}>
      <div className=' container align-items-center' style={{width: '80%', padding: '3rem', borderRight: '1px', borderStyle: 'solid', borderColor: '#4285f4', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', paddingBottom: '0', marginBottom: '2rem'}}>
        <div className='row'>
          <a className='col' href='#href'><p>GDSC</p></a><br />
          <a className='col' href='#href'><p>BPPIMT</p></a><br />
        </div>
        <div className='row'>
          <a className='col' href='#href'><p>Chapters</p></a><br />
          <a className='col' href='#href'><p>Upcoming Events</p></a><br />
        </div>
        <div className='row'>
          <a className='col' href='#href'><p>About GDSC</p></a><br />
          <a className='col' href='#href'><p>Lead Terms</p></a><br />
        </div>
        <div className='row'>
          <a className='col' href='#href'><p>Participation Terms</p></a><br />
          <a className='col' href='#href'><p>Privacy</p></a><br />
        </div>
        <div className='row'>
          <a className='col' href='#href'><p>Terms</p></a><br />
          <a className='col' href='#href'><p>Blog</p></a><br />
        </div>
      </div>
      <div style={{width: '20%'}} className='d-flex'>
        <img src="assets/bppimt.png" style={{width: '100px', margin: 'auto'}}></img>
        <img src="assets/gdsc_logo_pic.png" style={{width: '100px', margin: 'auto'}}></img>
      </div>
    </div>
    
    <hr className='mx-auto text-primary' style={{width: '20%'}}/>
      <p className='text-center'>Made with</p>
    <p className='text-center d-flex justify-content-center'>
    &ensp;<img src='/assets/react.png' style={{width: '40px'}} />&ensp;
    &ensp;<img src='/assets/php.png' style={{width: '40px'}} />&ensp;
    &ensp;<img src='/assets/sql.png' style={{width: '40px'}} />&ensp;
    &ensp;<img src='/assets/wamp.png' style={{width: '40px'}} />&ensp;
    </p>
    </div>
  )
}
