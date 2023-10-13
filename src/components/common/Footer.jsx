import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'

function Footer() {
  return (
    <>
      <div style={{ background: '#00aeef' }} className='py-2 text-white d-flex justify-content-around px-5 flex-wrap'>
        <div>
          {/* <a href='https://www.unicef.org/about-unicef/contact-us' style={{ textDecoration: "none", color: "white" }}>Contact Us</a> | <a href='https://www.unicef.org/legal' style={{ textDecoration: "none", color: "white" }}>Legal</a> */}
          <p>For technical support,<br />
            <AiOutlineMail color='white' size={20} />&nbsp;
            mskhan2621957@gmail.com <br />
            <AiOutlineMail color='white' size={20} />&nbsp;
            slok.punyas@gmail.com <br />
            <AiTwotonePhone color='white' size={20} />&nbsp;
            +91 94398 57425
          </p>
        </div>
        <div className='d-flex flex-wrap'>

          <a href="https://www.facebook.com/unicef/">
            <FaFacebookF color='white' size={20} className='mx-1' />
          </a>
          <a href="https://twitter.com/unicef">
            <FaTwitter color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.instagram.com/unicef/">
            <FaInstagram color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.youtube.com/unicef">
            <FaYoutube color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.linkedin.com/company/unicef/">
            <FaLinkedinIn color='white' size={20} className='mx-1' />
          </a>
        </div>
      </div>

      <div style={{ background: 'grey' }} className='p-2 text-white text-center'>
        Project by Leaflets (A UNIT OF IAMPIX TECHNOLOGY PVT. LTD.)
      </div>
    </>
  )
}

export default Footer