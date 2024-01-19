import React from "react";
// import cbse from "../assets/cbse2.png"
// import ktu from "../assets/ktu2.png"
const Education = () => {
  return (
    <section className="bg-primary text-white px-5 py-32 " id="education">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-indigo-600 pb-2">
            Education
          </h2>
        </div>
      <div className="container mx-auto grid md:grid-cols-1 items-center gap-10">

        {/* <div className=" education mx-auto items-center md:justify-between "> */}
        <div className="p-4 border-2  md:text-4xl text-center">
          <h2 className=" text-red-900">High School</h2>
          <h4>Islamic Central School, Ottapalam</h4>
          <h7>Grade: 80 percentage</h7>
          <h5>2016-2017</h5>
      </div>
      <div className="p-4 border-2  md:text-4xl text-center  ">
        <div className="w-full">
          <h2 className=" text-red-900">Secondary School</h2>
          <h4>Islamic Central School, Ottapalam</h4>
          <h7>Grade: 67 percentage</h7>
          <h5>2017-2019</h5>
        </div>
        {/* <div className="w-1/3 bg-slate-300">
          <img src={cbse}/>
        </div> */}
      </div>
      <div className="p-4 border-2  md:text-4xl text-center">
          <h2 className=" text-red-900">Bachelor's Degree (B Tech in Computer Sciene)</h2>
          <h4>Jawaharlal College of Engineering and Technology</h4>
          <h7>CGPA: 6.73</h7>
          <h5>2019-2023</h5>
      </div>
      </div>
        {/* </div> */}
    </section>
  )
}

export default Education;