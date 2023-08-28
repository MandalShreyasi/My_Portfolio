import React, { useState } from 'react';

const Contact = () => {

  const emailAddress = 'ghoshkisan2000@gmail.com';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with your actual message sending logic
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');

    alert('Message sent successfully!');
  };

  return (
    <>
      <div className='contact-content'>
        <h1>Contact Me</h1>
        <p>If you have any inquiries or would like to collaborate on a project, feel free to get in touch with me.</p>
        <div className='row contact_main'>
          <div className='col-md-6 col-12 contact_content_left'>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs"> ADDRESS </h2>
            <p className='details'> PURBA BARDHAMAN, WEST BENGAL  <br /> INDIA, 713144 </p>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs"> EMAIL </h2>
            <a href={`mailto:${emailAddress}`} > shreyasimandal1999@gmail.com </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4"> PHONE </h2>
            <p className='details'>8918740359</p>
          </div>

          <div className='col-md-6 col-12 contact_content_right'>
            <form className='form-area' onSubmit={handleSubmit}>
              <div className="row">
                <div className='col-md-4 col-12 labal-details'>
                  <label className="name_details"> Name: </label>
                </div>
                <div className='col-md-8 col-12'>
                  <input type="text" id="name" name="name" value={name} className='input_details container-fluid' onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className='col-md-4 col-12 labal-details'>
                  <label className="name_details">Email:</label>
                </div>
                <div className='col-md-8 col-12'>
                  <input type="email" id="email" name="email" className='input_details container-fluid' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className='col-md-4 col-12 labal-details'>
                  <label className="name_details">Message:</label>
                </div>
                <div className='col-md-8 col-12 '>
                  <textarea id="message" name="message" className="textarea_details container-fluid" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
              </div>
              <button type="submit" className="contact_button"> Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
