import React from "react";
import profile from '../images/profile.jpg';
import profileFinal from '../images/profileFinal.png'

const About = () => {
  return (

    <div name="about" className="about">
      <div className="pb-2">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <div className="aboutCont">
        <p className="text-xl sizetext">
          With over 3+ years of dedicated experience in the Website Development Industry, I have had the privilege of successfully completing numerous projects for a diverse range of clients. Throughout my career, I have consistently delivered high-quality websites, utilizing the latest technologies and industry best practices.

          I have broad expertise in website development, covering both front-end (mainly in React.js, Redux, Typescript) and back-end technologies (mainly in Node.js, Express.js). I excel at translating client needs into innovative and functional web solutions. Whether it's crafting user-friendly interfaces or enhancing website performance, my commitment is to consistently deliver results that exceed expectations.

        </p>
        <div> <img src={profileFinal} alt='img' className="w-20 mx-auto" /></div>
      </div>



      <br />

    </div>

  );
};

export default About;
