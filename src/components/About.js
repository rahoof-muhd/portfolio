import React from "react";
import AboutImg from "../assets/me1.JPG";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
          <h2 className=" text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-indigo-600 pb-2">
            About Me
          </h2>
      <div className="container mx-auto grid grid-cols-2 items-center justify-center md:justify-between gap-10 rounded-l-full border-4">

      <div className="">
          <div className="about-img  border-4 rounded-full    " >
            <img src={AboutImg}
              alt="coding illustration"
              className="  rounded-full  "
            />
            
          </div>
        </div>


        <div className="about-info">

          <p className="pb-5 max-md:text-xs min-[1024px]:text-xl text-justify pr-4 ">
            Hello, I'm Rahoof, a Full Stack Developer in designing, implementing, and maintaining robust web applications.
            Proficient in both front-end and back-end technologies, I bring a unique blend of creativity and
            technical expertise to deliver high-quality solutions. Adept at collaborating with cross-functional
            teams, I thrive in fast-paced environments where innovation and efficiency are paramount.
          </p>
          <p className="pb-5 max-md:text-xs min-[1024px]:text-xl text-justify pr-4 ">
            I am proficient in Frontend skills like React.js, Axios, Tailwind CSS, Css3 and many more.
          </p>

          <p className="max-md:text-xs min-[1024px]:text-xl text-justify pr-4 ">In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          {/* <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p> */}
        </div>

        
      </div>
    </section>
  );
};

export default About;
