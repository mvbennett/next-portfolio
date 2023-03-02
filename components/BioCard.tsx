// import React from "react";
import Image from "next/image";

import profilePicture from '@/public/images/purple.jpg';

const BioCard = () => {
  return (
    <div className="bio-block">
      <div className="bio-photo" data-aos="fade-right">
        <Image src={profilePicture} alt="Mike Bennett" />
      </div>
      <div className="bio-info" data-aos="fade-left">
        <h3>
          <span className="main-skill">Ruby on Rails</span>
          <span className="divider">|</span>
          <span className="main-skill">JavaScript</span>
          <span className="divider">|</span>
          <span className="main-skill">React</span>
        </h3>
        <p>
          I{'\''}m a developer mainly focused on web apps across the stack using Ruby on Rails, PostgreSQL, JavaScript, React, and Next.js. Currently involved in supporting small-sized, non-technical organizations such as Acme Hall Studios and CBID.
        </p>
        <p>
          I{'\''}ve infused my design work and photography into the web apps I{'\''}ve developed - I am always seeking to add personality to what I create or collaborate on.
        </p>
        <p>
          As my next step I{'\''}m looking to be part of a small team either at a startup or medium-sized business.
        </p>
        <p>
          I{'\''}m also a huge coffee nerd and always down to meet and talk about web development, software engineering, or coffee culture. Feel free to message me!
        </p>
      </div>
    </div>
  );
};

export default BioCard;
