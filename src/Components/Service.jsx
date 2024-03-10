"@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Syne:wght@400..800&display=swap')";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";



const Service = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once:false});

  const mainControls= useAnimation();

  useEffect(()=>{
    if(isInView){
      console.log(isInView);
      mainControls.start("visible")
    }
  },[isInView, mainControls])


 
    
  return (
    <div
    
    data-scroll data-scroll-section  data-scroll-speed="0.002" className=" w-full  bg-[#ffc443] rounded-t-3xl ">
      <div 
        className="  mx-20 pt-10 py-10  ">
        <motion.h1
          ref={ref}
        variants={{
          hidden:{opacity: 0 , y:75},
          visible:{opacity:1 , y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,}}
        
        id="sectionText" className=" w-[80%]  text-3xl font-semibold   ">
          In LUX, Here we create your website after <span className=" underline">Understand the Specific Work</span>, <span className=" underline">
            Research Your Audience and Competitors
          </span> ,<span className=" underline"> Plan Your Content and Structure </span>
          then we Design Your Website and Maintain and Update Regularly as per
          your necessity
        </motion.h1>
      </div>
      <div className=" border-t-2 border-white mx-20 flex py-10">
        <motion.div
        ref={ref}
        variants={{
          hidden:{opacity: 0 , y:75},
          visible:{opacity:1 , y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:0.5}}
        className=" w-1/2 text-xl ">
          <h1>What we create ?</h1>
        </motion.div>
        <motion.div
        ref={ref}
        variants={{
          hidden:{opacity: 0 , y:75},
          visible:{opacity:1 , y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:0.5}}
        className=" w-1/2 flex flex-col gap-4   ">
          {[
            "We create tailored presentations to help you persuade your colleagues, clients, or investors, Whether it’s a startup or company or business",
            "we believe the mix of strategy and design(with a bit of coffee) is what make your message clear, convincingand captivating",
          ].map((item, index) => (
            <p key={index} className=" font-sans  text-xl w-[26vw]">
              {item}
            </p>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default Service;
