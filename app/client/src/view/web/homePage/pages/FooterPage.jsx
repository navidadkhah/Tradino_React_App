// This is footer page that show us the where we can contact with develop team and how we can
// download the tradino
import React from 'react';

// Svg icons we use
import InstagramLogo from '../../../../assets/icon/instagram.svg';
import WhatsAppLogo from '../../../../assets/icon/whatsapp.svg';
import YoutubeLogo from '../../../../assets/icon/youtube.svg';
import TwitterLogo from '../../../../assets/icon/twitter.svg';
import LinkedinLogo from '../../../../assets/icon/linkedin.svg';
import TelegramLogo from '../../../../assets/icon/telegram.svg';
import AppleLogo from '../../../../assets/icon/apple.svg';
import GooglePlayLogo from '../../../../assets/icon/google-play.svg';

export default function FotterPage() {
  return (
    <div className="footer-page">
      <div className="footer-page-1">
        <div>
          <span className="footer-page-tradino">Tradino</span>
          <span>With innovative investment tools and</span>
          <span>a collaborative trading community, eToro</span>
          <span>empowers millions of users in over 140 countries</span>
          <span>to trade and invest in a simple and transparent way.</span>
        </div>
        <div>
          <span>TOP INSTRUMENTS</span>
          <span>Bitcoin (BTC)</span>
          <span>Ethereum (ETH)</span>
          <span>Dogecoin (DOGE)</span>
          <span>Chainlink (LINK)</span>
        </div>
        <div>
          <span>ACCOUNT</span>
          <span>How to Deposit</span>
          <span>How to Withdraw</span>
          <span>How to Verify Your eToro Account</span>
          <span>Avoid Scams</span>
        </div>
        <div>
          <span>COPY AND GET COPIED</span>
          <span>Top Investors</span>
          <span>How We Calculate Stats</span>
          <span>How CopyTrading Works</span>
        </div>
      </div>

      <div className="footer-page-2">
        <div>
          <span className="footer-page-find">Find us on</span>
          <span className="footer-apps">
            <img src={InstagramLogo} alt="instagram" />
            <img src={WhatsAppLogo} alt="whatsapp" />
            <img src={YoutubeLogo} alt="youtube" />
            <img src={TwitterLogo} alt="twitter" />
            <img src={LinkedinLogo} alt="linkedin" />
            <img src={TelegramLogo} alt="telegram" />
          </span>
          <div className="footer-get-app">
            <span className="footer-get-app-header">Download Tradino from</span>
            <button>
              <img src={AppleLogo} alt="apple logo" />
              <div>
                <span>Get it on</span>
                <span>App Store</span>
              </div>
            </button>
            <button>
              <img src={GooglePlayLogo} alt="google play" />
              <div>
                <span>Get it on</span>
                <span>Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <span>LEGAL</span>
          <span>Licenses</span>
          <span>Disclosures</span>
          <span>Cookie Policy</span>
          <span>Policy Privacy</span>
          <span>Legal Request</span>
        </div>
        <div>
          <span>ABOUT US</span>
          <span>Why Choose eToro?</span>
          <span>eToro Club</span>
          <span>Supported States</span>
          <span>Careers</span>
          <span>Security</span>
        </div>
        <div>
          <span>HELP AND EDUCATION</span>
          <span>Help Center</span> <span>Customer Service</span>{' '}
          <span>eToro Academy</span> <span>Status</span>{' '}
          <span>Accessibility</span>
        </div>
      </div>

      <div />
    </div>
  );
}
