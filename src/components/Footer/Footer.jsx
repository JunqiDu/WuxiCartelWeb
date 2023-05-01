import React from 'react';
import './Footer.scss';
import images from '../../constants/images';

const Footer = (props) => {
  return (
    <div className='footerDiv'>
      <div className='footerDivLogo'>
        <img className='footerDivCartelLogo' src={images.WuxiCartelLogo} alt="app logo" />
      </div>
      <div className='footerDivCopyright'>
        &copy; Wuxi Cartel
      </div>
      <div className='footerDivLinks'>
        <div className='footerDivPoints'></div>
        <div className='footerLink'>Help</div>
        <div className='footerDivPoints'></div>
        <div className='footerLink'>Recruitment</div>
        <div className='footerDivPoints'></div>
        <div className='footerLink'>Privicy Policy</div>
      </div>
    </div>
  )
};

export default Footer;