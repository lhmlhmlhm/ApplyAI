/*
  The code below will generate the footer
  row 1: Contains Logo + contact section + social media sections
  row 2: Contains Copy right + web navigation
*/

// Module:
import React from 'react';
import { Link } from 'react-router-dom';
// Styles:
import styles from '../../styles/Footer.module.css';
// Assets:
import logo from '../../assets/footer/logo_text.png';
import email_icon from '../../assets/footer/email_icon.png';
import call_icon from '../../assets/footer/call_icon.png';
import loc_icon from '../../assets/footer/loc_icon.png';
import ins_icon from '../../assets/footer/ins_icon.png';
import fb_icon from '../../assets/footer/fb_icon.png';
import in_icon from '../../assets/footer/in_icon.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.left}>
          <Link to="/"><img src={logo} alt="Logo" /></Link>
          <Link><img src={email_icon} alt="Email" /></Link>
          <Link><img src={call_icon} alt="Call" /></Link>
          <Link><img src={loc_icon} alt="Location" /></Link>
        </div>
        <div className={styles.right}>
          <Link><img src={ins_icon} alt="Instagram" /></Link>
          <Link><img src={fb_icon} alt="Facebook" /></Link>
          <Link><img src={in_icon} alt="Linkin" /></Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.left}>
        </div>
        <div className={styles.middle}>
          <p>&copy; {new Date().getFullYear()} APPLYAI. All rights reserved.</p>
        </div>
        <div className={styles.right}>
          Right Aligned Content
        </div>
      </div>
    </footer>
  );
}

export default Footer;