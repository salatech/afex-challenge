import React from 'react'
import logo from './logo.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='log'>
    <img src={logo}/>
    <p>Thanks for reading</p> 
    </div>
    <div className='flex'>
    <div>
        Tutorials <br /> <br />
        <ul>
            <li>React</li>
            <li>CSS</li>
            <li>Gatsby</li>
            <li>Performance</li>
            <li>Animation</li>
            <li>Career</li>
            <li>Next.js</li>
            <li>Javascript</li>
        </ul>
    </div>
   
    <div>
        Links <br /><br />
        <ul>
            <li>Twitter</li>
            <li>Contact</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer
