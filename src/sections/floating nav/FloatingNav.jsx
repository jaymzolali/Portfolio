import './floating-nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMedicineBox} from 'react-icons/ai'
import {BsGridFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react';

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav className='floating__nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineMedicineBox/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsGridFill/></a>
      <a href="#faqs" onClick={() => setActiveNav('#faqs')} className={activeNav === '#faqs' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default FloatingNav