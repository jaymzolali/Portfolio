import './faqs.css';

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Aasked Questions</h2>
      <p>Here are some questions i usually get. Click to toggle the answer and if you still have some more questions, send me a message from the contact section</p>
      <div className='questions'>
        <div className='one'>
          <h6>What do you need to start working on my project? </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
        <div className='two'>
          <h6>How long will my project take to complete? </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
        <div className='three'>
          <h6>Is hosting and domain name registration inclusive in your pricing? </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
        <div className='four'>
          <h6>How much do you charge for an average website or app </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
        <div className='five'>
          <h6>What's your payment plan </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
        <div className='six'>
          <h6>What if the project doesn't turn out good? </h6><span><h5>_</h5></span>
          <p>this the most asked questions when it comes to web <br/>development. We are happy to answer all you.</p>
        </div>
      </div>
    </section>
  )
}

export default FAQs