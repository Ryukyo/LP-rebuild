import React from 'react';
import '../App.css';

export const Footer = () => {
  return (
      <footer id="footer">
        <div className="container text-center text-md-left" style={{marginLeft: '10%'}}>
          <a href="/">Terms</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact</a>
          <a href="mailto:hello@xplenty.com">hello@xplenty.com</a>
        </div>
      </footer>
  );
};