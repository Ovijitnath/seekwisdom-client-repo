import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='text-center pt-5 pb-5'>
      <p>All Right Reserved By @seekWisdom</p>
      <FaGithub></FaGithub> <FaFacebook></FaFacebook> <FaGoogle></FaGoogle> <FaWhatsapp></FaWhatsapp> <FaTwitter></FaTwitter>
    </div>
  );
};

export default Footer;