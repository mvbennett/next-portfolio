import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-logo">
        <a href="https://www.linkedin.com/in/mvbennett9/">
          <Image src="/images/icons/linkedin.svg" alt="My Linkedin Profile" fill />
        </a>
      </div>
      <div className="social-logo">
        <a href="https://github.com/mvbennett">
          <Image src="/images/icons/github.svg" alt="My GitHub Profile" fill />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
