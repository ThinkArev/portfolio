import React from "react";
import { useState } from "react";
import './about.css'
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [statehide , hideshow] = useState(false)
  const [statehide2 , hideshow2] = useState(true)
  const submitmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_58kptpq', 'template_e69lnql', e.target , 'WeNZZmpEv7GAZ48g3').then(res => {
      console.log(res);
    }).catch(e => console.log(e));
    hideshow(true);
    hideshow2(false);
    


  }
  const showagain = () =>{
    hideshow(false);
    hideshow2(true);


  }
  return (
 
    <div 
      name="contact"
      className="contact_bg w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div id={ statehide ? "contact_hide" : null} className="flex flex-col pt-8 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="2000" className=" flex justify-center items-center">
          <form onSubmit={submitmail}

            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="useremail"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <div id={ statehide2 ? "contact_message" : null}>
        <p className="message">Thank you for Contacting me. I will reach you very soon <button onClick={showagain} className="BUTTON_GLN">Edit Submission</button></p>
        {/* <p className="message2"></p> */}
      </div>
    </div>
   
  );
};

export default Contact;
