import './services.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <marquee direction="left" bgcolor="#af6dee" height="40px">
        <span> Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!</span>
        <span>Hey this is my experience. </span>
        <span>You'll love it here. </span>
        <span>I enjoy coding. </span>
        <span>Testifiers will get you on your toes!  </span>
      </marquee>

      <div className="container experience__container">
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

{/* END OF FRONT-END DEVELOPMENT */}

        <div className="experince__backend">
          <h3>Backtend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PostMan</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services