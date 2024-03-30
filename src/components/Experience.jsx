import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import sfcc from "../assets/sfcc2.png";
import tailwind from "../assets/tailwind.png";
import c from "../assets/c.png";
import next from "../assets/next.png";
// import grap from "../assets/graphql.png";
import aws from "../assets/aws.png";
import ts from "../assets/ts.png";
import git from "../assets/git.png";
import express from "../assets/express.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      aos: "fade-right",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      aos: "fade-up",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      aos: "fade-left",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      aos: "fade-right",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Node",
      aos: "fade-up",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: ts,
      title: "TypeScript",
      aos: "fade-left",
      style: "shadow-sky-400",
    },
    // {
    //   id: 11,
    //   src: next,
    //   title: "NextJs",
    //   aos: "fade-right",
    //   style: "shadow-green-400",
    // },
    {
      id: 12,
      src: express,
      title: "ExpressJs",
      aos: "fade-down",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: git,
      title: "Git",
      aos: "fade-left",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: aws,
      title: "AWS",
      aos: "fade-right",
      style: "shadow-white",
    },
    {
      id: 15,
      src: graphql,
      title: "Graphql",
      aos: "fade-down",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "MongoDB",
      aos: "fade-left",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: graphql,
      title: "Data Structure & Algorithms",
      aos: "fade-right",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: sfcc,
      title: "Salesforce Commerce Cloud",
      aos: "fade-up",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: c,
      title: "c",
      aos: "fade-left",
      style: "shadow-red-400",
    },
  ];


  return (

    <div
      name="experience"
      className="exp_bg bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-5xl font-bold border-b-4 border-gray-500 pt-20 text-center">
            Skills
          </p>
          <p className="py-6 text-center text-3xl">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, aos, style }) => (
            <div data-aos={aos} data-aos-duration="1500"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Experience;
