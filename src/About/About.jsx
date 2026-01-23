import React from 'react'
import style from './About.module.css';
import { FaStar } from 'react-icons/fa';


export default function AboutSection() {
  return (
    <section className={style.AboutSection}>
        <div className="porfolioTitle">
                            <h1 className={` mt-4 fw-bold text-white text-center ${style.porfolioTitle} `} > ABOUT</h1>
                            <div className={`${style.divider} d-flex align-items-center justify-content-center gap-2 my-4`}>
                              <span className={style.line}></span>
                              <FaStar className= {style.FaStar} />
                              <span className={style.line}></span>
                </div>
                </div>


                <div className={`${style.aboutInfo} d-flex  justify-content-center`}>
                <div className="leftside text-center text-white w-25">
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. 
                    The download includes the complete source files including HTML, CSS, and
                     JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className="rightside text-center text-white w-25">
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and 
                    add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5 '>
             <button className={`${style.aboutBtn}`}>Free Download! </button>
             </div>
    </section>
  )
}
