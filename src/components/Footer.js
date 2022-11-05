import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>Joshua</a> */}
      

      <div className="footer__socials">
        <a href="https://web.facebook.com/owotogbesegun"><FaFacebook /></a>
        <a href="https://www.instagram.com/owotogbesegun/ "><FiInstagram /></a>
        <a href="https://twitter.com/owotogbesegun"><IoLogoTwitter /></a>
        <a href="www.linkedin.com/in/owotogbesegun "><AiFillLinkedin /></a>
        <a href="https://github.com/darjosh"><AiFillGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joshua Owotogbe. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer