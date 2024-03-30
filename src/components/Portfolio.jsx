import React from "react";
import { Link } from "react-scroll"
import sunny from '../images/sunny.jpg'
import sunny1 from '../images/sunny1.png'
import sunny2 from '../images/sunny2.png'
import nexusgram from '../images/nexusgram.png';
import d_one from '../images/d-one.png';
import techno from '../images/techno.png';
import tree from '../images/tree.png';
import portfolio from '../images/prftfolio.png';
import nexusstore from '../images/nexusstore.png';
import etour from '../images/etour.png';
import treesite from '../images/treesite.png';
import livingbox from '../images/livingbox.png';
import './about.css';
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Portfolio = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div name="project" className="projects">
        <h1 className="port2" style={{ fontSize: "40px", backgroundColor: "#1a1d1a", color: "white" }}>Have a look on my Projects</h1>
        <h1 class='client-project'>Client's Project</h1>

        <div className="port1" style={{ backgroundColor: "#1a1d1a" }}>
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={techno} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">E-commerce Website</h5>
              <p className="card-text p-2">This platform is an e-commerce lightweight version of SaaS, featuring three types of dashboards: user, seller, and admin. It includes integrated email functionality and much more.</p>
              <Link onClick={() => window.open("https://nexus-store.onrender.com/", "_blank")} className="btn btn-primary text-light">Visit Website</Link>
            </div>
          </div>
          <div className="card" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={etour} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Tourism Website</h5>
              <p className="card-text p-2">This platform provides guidance and ideas for exploring Egypt's. It belongs to a travel agency that offers tailored packages, enriching the Egyptian experience and providing insights into the culture of Egypt</p>
              <Link onClick={() => window.open("https://www.egyptiarutours.com/", "_blank")} className="btn btn-primary text-light">Visit Website</Link>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={d_one} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Company Valuation App</h5>
              <p className="card-text p-2">This platform combines user input and market data to generate precise business valuations, financial statements , and investment analyses. Streamlining finance decisions with accuracy.</p>
              <Link onClick={() => window.open("https://d1.bugendaitech.com/", "_blank")} className="btn btn-primary text-light">Visit Site</Link>
            </div>
          </div>
        </div>

        <div className="port1" style={{ backgroundColor: "#1a1d1a" }}>
          <div className="card" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={tree} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Company Website</h5>
              <p className="card-text p-2">This platform provides information about the company's dynamic working culture, services provided, upcoming events , last year achievement and the range of services offered by the company.</p>
              <Link onClick={() => window.open("https://www.bugendaitech.com/", "_blank")} className="btn btn-primary text-light">Visit Website</Link>
            </div>
          </div>

          <div className="card" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" style={{ width: "24rem" }}>
            <img className="card-img-top" src={treesite} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Tree Service</h5>
              <p className="card-text p-2">This platform specializes in a range of tree services, including tree root removal, fruit tree care, stump grinding, and various other services dedicated to ensuring the health and maintenance of trees in your environment</p>
              <Link onClick={() => window.open("https://www.campbellstreeandstumpservice.com/", "_blank")} className="btn btn-primary text-light">Visit Website</Link>
            </div>
          </div>

          <div className="card" data-aos="fade-left" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={livingbox} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Furniture Website</h5>
              <p className="card-text p-2">This platform provides all the furniture you need for your home, offering various filters for price range, color selection, and more. Find the perfect furnishings for your space with ease and convenience.</p>
              <Link onClick={() => window.open("http://livingbox-devlopment-env.eu-central-1.elasticbeanstalk.com/", "_blank")} className="btn btn-primary text-light">Visit Site</Link>
            </div>
          </div>
        </div>

        <h1 class='personal-project'>Frontend project<span>( for showcase only )</span></h1>
        <div className="port1" style={{ backgroundColor: "#1a1d1a" }}>
          <div className="card" data-aos="fade-right" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={nexusstore} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Fashion Ecommerce App</h5>
              <p className="card-text p-2">Fashion Ecommerce App ( Nexusstore) app is an online platform that showcases the latest fashion trends, styles, and products.</p>
              <Link onClick={() => window.open("https://nexusfashion.netlify.app/", "_blank")} className="btn btn-primary text-light">Visit Site</Link>
            </div>
          </div>


          <div className="card" data-aos="fade-down" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={sunny1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Dashboard</h5>
              <p className="card-text p-2">This app typically provide a quick and concise overview of data that is relevant to a specific user or group of users, such as managers.</p>
              <Link onClick={() => window.open("https://nexus-dashboard.netlify.app/", "_blank")} className="btn btn-primary text-light">Visit Website</Link>
            </div>
          </div>

          <div className="card" data-aos="fade-left" data-aos-duration="1500" style={{ width: "24rem" }}>
            <img className="card-img-top" src={nexusgram} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title port2">Social Media App</h5>
              <p className="card-text p-2">This is only the frontend app, which has been designed solely for aesthetic purposes. It does not have any backend functionality.</p>
              <Link onClick={() => window.open("https://nexusgram.netlify.app/", "_blank")} className="btn btn-primary text-light">Visit Site</Link>
            </div>
          </div>

        </div>





      </div>

    </>
  );
};

export default Portfolio;
