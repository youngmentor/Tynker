import React from 'react'
import './Tynker.css'
import Empower from './Empower'



const Tynker = () => {
  return (
    <div>
      <div className='TynkerBody'>
        <div className='TynkerWrap'>
          <div className='TynkerWrapHeader'>
            <div className='TynkerHeaderD1'>
              <img src='Tynker image.png' placeholder='' className='TynkerImage1' />
            </div>
            <div className='TynkerHeaderD2'>
              <div className='TynkerHeaderDd2'>
                <img src='game.image-removebg-preview 2.png' className='TynkerImage2' />
                <h3 className='TynkerHeaderdd2'>PLAY</h3>
              </div>
              <div className='TynkerHeaderDiv2'>
                <h3>PARENT</h3>
                <h3>EDUCATOR</h3>
                <h3>WHY CODING?</h3>
                <h3>BLOG</h3>
              </div>
            </div>
            <div className='TynkerHeaderD3'>
              <button className='TynkerHeaderD3But'><h3>JOIN FOR FREE</h3></button>
              <button className='TynkerHeaderD3But2'><h3>LOG IN</h3></button>
            </div>
          </div>
          <div className='TynkerDiv'>
            <h1 className='TynkerDivbold'>Back to School Deal: 60% Off</h1>
            <div className='TynkerDivd1'>
              <button className='TynkerDivd1But'>
                <h2>10</h2>
                <p>Hours</p>
              </button>
              <button className='TynkerDivd1But'>
                <h2>07</h2>
                <p>minutes</p>
              </button>
            </div>
          </div>
          <div className='TynkerContent'>
            <h1 className='TynkerContentBold'>
              Coding For Kids and Teens Made Easy
            </h1>
            <p className='TynkerContentRead'>
              Tynker is the fun way to learn programming and develop
              problem-solving & critical thinking skills. Our new bundles
              include up to 3 kids and all 3 Tynker Apps!
            </p>
            <div className='TynkerContentDivB'>
              <button className='TynkerContentBut'><h3>GET STARTED FOR FREE</h3></button>
            </div>
            <img src='log.png' className='TynkerLogImg' />
          </div>
          <div className='TynkerHeader2'>
            <h1 className='TynkerHeader2bold'>Over 5,000 Award-Winning Lessons</h1>
            <div className='TynkerHeader2divcons'>
              <p className='TynkerHeader2content'>
                Tynker empowers over <h3>100 million students</h3> and serves
              </p>
              <p className='TynkerHeader2content'>over<h3>150,000 schools</h3>  worldwide.
              </p>

            </div>
            <div className='TynkerDivWrap' >
              <div className='TynkerDivWrapd1'>
                <img src='kids img1.png' className='TynkerDivWrapImg' />
                <h2 className='TynkerDivWrapcons'>Mod Minecraft</h2>
                <p className='TynkerDivWrapcons'>Make your own skin and 
                  experience basic Minecraft modding with tynker</p>
              </div>
              <div className='TynkerDivWrapd1'>
                <img src='kids img2.png' className='TynkerDivWrapImg' />
                <h2 className='TynkerDivWrapcons'>Learn Python</h2>
                <p className='TynkerDivWrapcons'>Learn to code browser-based games 
                  using python, pen drawing and turtle graphics </p>
              </div>
              <div className='TynkerDivWrapd1'>
                <img src='kids img3.png' className='TynkerDivWrapImg' />
                <h2 className='TynkerDivWrapcons'>Explore AI</h2>
                <p className='TynkerDivWrapcons'>in this exciting elective course, 
                  you'll explore artificial intelligence and machine learning - with javascript.</p>
              </div>
            </div>
            <button className='TynkerHeader2But'><h3>EXPLORE ALL COURSES</h3></button>
          </div>
         <Empower />
        </div>
      </div>
    </div>
  )
}

export default Tynker