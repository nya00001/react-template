import React from 'react';
import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-b border-neutral-900">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
        <div className="flex items-center m-8 justify-center gap-4 text-2xl">
          {/* Social media icons wrapped with links */}
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
