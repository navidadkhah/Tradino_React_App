//this component creates a slide out navbar for mobile home page
import React from "react";
//icons
import blackProfile from '../../../assets/icon/black-profile.svg';
import logout from '../../../assets/icon/logout.svg';
import phone from '../../../assets/icon/phone.svg';
import about from '../../../assets/icon/about-us.svg';
//styles
import './sideNav.css';

export function SideNav({ profileOnClose }) {
  return (
    <div onClick={profileOnClose} className='mb-sideNav'>
      <div onClick={e => e.stopPropagation()} className='mb-sideNav-content'>
        <div className='titles'><img className='mb-sidenav-icon-homePge' src={about} /><span>About</span></div>
        <div className='titles'><img className='mb-sidenav-icon-homePge' src={phone} /><span>Contact</span></div>
        <div className='titles'><img className='mb-sidenav-icon-homePge' src={blackProfile} /><span>Profile</span></div>
        <div className='titles'><img className='mb-sidenav-icon-homePge' src={logout} /><span>Log out</span></div>
      </div>
    </div>
  );
}