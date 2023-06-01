import './testimonials.css';
import IMG1 from '../../assets/logo.jpeg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <p>These are unbiased testimonies from some of my clients</p>
      <div className="testi__cards">
        
        <div className="testi__card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius aut pariatur labore perferendis nemo veritatis, debitis, laudantium numquam maiores nobis consectetur molestias quia commodi quibusdam vitae repudiandae eum animi!</p>
          <div className="testi__id">
            <img src={IMG1} alt="" />
            <div className="testi__idname">
              <h5>Diana John</h5>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className="testi__card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius aut pariatur labore perferendis nemo veritatis, debitis, laudantium numquam maiores nobis consectetur molestias quia commodi quibusdam vitae repudiandae eum animi!</p>
          <div className="testi__id">
            <img src={IMG1} alt="" />
            <div className="testi__idname">
              <h5>Diana John</h5>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className="testi__card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius aut pariatur labore perferendis nemo veritatis, debitis, laudantium numquam maiores nobis consectetur molestias quia commodi quibusdam vitae repudiandae eum animi!</p>
          <div className="testi__id">
            <img src={IMG1} alt="" />
            <div className="testi__idname">
              <h5>Diana John</h5>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className="testi__card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius aut pariatur labore perferendis nemo veritatis, debitis, laudantium numquam maiores nobis consectetur molestias quia commodi quibusdam vitae repudiandae eum animi!</p>
          <div className="testi__id">
            <img src={IMG1} alt="" />
            <div className="testi__idname">
              <h5>Diana John</h5>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className="testi__card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius aut pariatur labore perferendis nemo veritatis, debitis, laudantium numquam maiores nobis consectetur molestias quia commodi quibusdam vitae repudiandae eum animi!</p>
          <div className="testi__id">
            <img src={IMG1} alt="" />
            <div className="testi__idname">
              <h5>Diana John</h5>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials