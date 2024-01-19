import React from "react";
import htmlss from "../assets/html.png"
import csss from "../assets/css2.png"
import js from "../assets/js.webp"
import reacts from "../assets/react3.png"
import expresss from "../assets/express.png"
import mdb from "../assets/mongodb4.png"
import nodejs from "../assets/node.png"
import tws from "../assets/tailwinds.png"
import mysql from "../assets/mysql1.png"
const Skills = () => {
 
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("https://dev.to/api/articles?username=coderamrin")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data.slice(0, 2)))
  //     .catch((error) => console.log(error.message));
  // });

  return (
    <section className="bg-secondery text-white px-5 py-32 " id="skills">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-20 border-b-[5px] w-[90px] border-indigo-600 pb-2">
            Skills
          </h2>
        </div>
    
      <div className="  container mx-auto   items-center md:justify-between">

        <div className=" flex education mx-auto items-center justify-between ">
          {/* <div className=" rounded-full border-4 max-2xl:h-36 max-lg:h-20 max-md:h-16">
          </div> */}
          <img src={htmlss}
          alt="" className=" max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={csss}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={js}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={reacts}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={tws}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain rounded-full"/>
        </div>

        <div className=" flex education mx-auto items-center justify-between mt-20 ml-20 mr-20 ">
          <img src={expresss}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain rounded-full"/>
          {/* <div className=" rounded-full bg-stone-300">
          </div> */}
          <img src={nodejs}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={mdb}
          alt="" className=" max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={mysql}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain rounded-full"/>
          {/* <img src={reacts}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/>
          <img src={expresss}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain rounded-full"/>
          <img src={nodejs}
          alt="" className="max-2xl:h-32 max-lg:h-20 max-md:h-16 object-contain"/> */}
        </div>
      </div>

     
    </section>
  );
};

export default Skills;
