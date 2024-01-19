import React from "react";
import eca from "../assets/eca2.png";
import vcd from "../assets/vcd.jpg";
import epw from "../assets/ew.webp";
// import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: vcd,
      title: "devlog",
      desc : `This project proposes an automated working model based system for beforehand detection of
      vehicle collisions and to generate emergency alerts using YOLO v3 algorithm along with the
      integrated techologies of percentage of damage detection & number plate identification of collided
      vehicles.`,
      heading: "Vehicle Collision Detection and Alert System"
      // live: "https://devlogg.onrender.com/",
      // code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: epw,
      title: "uilogs",
      desc: " A website that acts as an inteface between common people and plastic waste recycling organisations",
      heading: "E-plastic Waste Management System"
      // live: "https://uilogs.xyz/",
      // code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: eca,
      title: "css projects",
      desc: `This project is an E-commerce web application using React involves building a dynamic and
      responsive user interface that allows users(buyers) to browse products, add items to their cart, and
      complete the checkout process. Also users(sellers) can add their products in the web application.`,
      heading: "E-Commerce Apllication"
      // live: "https://build-10-css-projects.netlify.app/",
      // code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    // {
    //   img: getInspirred,
    //   title: "get Inspirred",
    //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    //   live: "https://get-inspirred.netlify.app/",
    //   code: "https://github.com/Coderamrin/get-inspired",
    // },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and tailwind CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title}/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[84%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                {/* <div className="mx-auto">
                  <a
                  href={project.live}
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                  Live
                  </a>
                  <a
                  href={project.code}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                  Code
                  </a>
                </div> */}
              </div>
                <h2 className="text-center font-bold pt-2">{project.heading}</h2>
            </div>
          );
        })}
        {/* <div className="text-center font-bold px-2">Vehicle Collision Detection and Alert System</div>
        <div className="text-center font-bold px-2">E-plastic Waste Management System</div>
        <div className="text-center font-bold px-2">E-Commerce Apllication</div> */}
      </div>
    </section>
  );
};

export default Projects;





