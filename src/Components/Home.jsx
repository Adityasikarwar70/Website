import { motion } from "framer-motion"
import arrow1 from "/assets/arrow1.png"
import arrow2 from "/assets/arrow2.png"



const Home = () => {
 
  
  

  



  return (
    <div 
    data-scroll data-scroll-section data-scroll-speed="-0.5" className=" relative w-full h-screen py-10 overflow-hidden ">
      <div className=" absolute z-[-1] h-[70vh] w-[70vh] bg-[#60FF66] rounded-full -left-48 top-10 blur-[50px] "></div>
      <div className=" absolute flex z-10 left-[55vw] top-[20vh] ">
        <motion.img initial={{ opacity: 0 ,y: '-10vw' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 , type: 'spring', stiffness: 50 }} className=" relative  h-[40vh] " src={arrow1} alt="" />
        <motion.img initial={{ opacity: 0 ,y: '10vw' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 , type: 'spring', stiffness: 50 }} className=" relative -left-[8vw] top-[13vh] h-[40vh] " src={arrow2}alt="" />
      </div>
      <div className="textstructure mt-32 px-10 font-semibold ">
       
          {['I CREATE YOUR ', 'Dream websites ', 'made real.'].map((item,index)=>{
            return  <div key={index} className="masker "> <motion.h1 initial={{ opacity: 0 ,x: '-25vw' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 , type: 'spring', stiffness: 50 }}  id="Innertext" className=" uppercase text-[5vw] tracking-tighter ">{item} </motion.h1></div>
          })}
        
      </div>
      <div className=" border-t-2 border-slate-300 mt-16 flex justify-between mx-20 items-center ">
          {['For public and private companies','Amplify your business'].map((item,index)=> <p key={index} className=" mt-5">{item}</p>
          )}
          <button className=" mt-5 h-10 w-24 bg-transparent border-black border-2 uppercase rounded-full hover:border-slate-700 hover:text-slate-700"> proceed</button>
      </div>
      <motion.div initial={{ opacity: 0 , y: '5vw' }} animate={{ opacity: 1 , y:0 }} transition={{ duration: .5 }} id="scroll" className= " absolute left-[40vw] -bottom-5 h-12 w-60 rounded-full uppercase flex align-top justify-center text-white bg-black animate-pulse "> <h1   >scroll down</h1></motion.div>

      
    </div>
  )
}

export default Home
