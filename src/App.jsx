import Navbar from './sections/navbar/Navbar';
// import Theme from './sections/theme/Theme';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonial/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating nav/FloatingNav';
import SlideShow from './sections/slide/Slideshow';

const App = () => {
  return (
    <main>
        <Navbar/>
        {/* <Theme/> */}
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <SlideShow/>
        {/* <Testimonials/> */}
        <FAQs/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </main>
  )
}

export default App