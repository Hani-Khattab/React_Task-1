import React from 'react'
import style from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa'



export default function Footer() {
  return (
  
    <footer className={style.footer}>
      <div className="container">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <h4 className={style.title}>LOCATION</h4>
            <p>
              2215 John Daniel Drive Clark, MO 65243
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className={style.title}>AROUND THE WEB</h4>
            <div className={style.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaDribbble /></a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className={style.title}>ABOUT FREELANCER</h4>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a href="#">Start Bootstrap</a>.
            </p>
          </div>

        </div>
      </div>
    </footer>


  )
}
