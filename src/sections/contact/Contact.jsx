import './contact.css';
import {BsEnvelope, BsMessenger, BsWhatsapp} from 'react-icons/bs'



const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below</p>
      <div className="contact__Icons">
        <div className="iconn">
          <a href='http://jaymz.olali@gmail.com' target='_blank' rel='noreferrer' className='btn primary'><BsEnvelope size={25}/></a>
        </div>
        <div className="iconn">
          <a href='http://messenger.com' target='_blank' rel='noreferrer' className='btn primary'><BsMessenger size={25}/></a>
        </div>
        <div className="iconn">
          <a href='https://wa.link/ks06f8' target='_blank' rel='noreferrer' className='btn primary'><BsWhatsapp size={25}/></a>
        </div>
      </div>
    </section>
  )
}

export default Contact