import React from "react";
import { FaLinkedin, FaPhone, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mgagan182/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Call Now <FaPhone size={30} />
        </>
      ),
      href: "tel:8252126442",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mgagan182@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ThinkArev",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "cv.pdf",
      style: "rounded-br-md",
      download: false,
    },

  ];

  return (
    <div className="hidden lg:flex flex-col top-[45%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-14 pl-4 pr-2 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
