import React from 'react'
import {CONTACT} from '../constants'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
            <div className='flex items-center m-8 justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </div>
    </div>
  )
}

export default Contact