import './portfolio.css';
import IMG1 from '../../assets/img1.webp'
import IMG2 from '../../assets/img2.webp'
import IMG3 from '../../assets/img3.webp'
import IMG4 from '../../assets/img4.webp'
import IMG5 from '../../assets/img5.webp'
import IMG6 from '../../assets/img6.webp'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      {/* <h2>Portfolio</h2> */}

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt='' className="img"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" rel="noreferrer" target="_blank">Github</a>
            <a href="https://dribbble.com/signup/new" className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio