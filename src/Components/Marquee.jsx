import { motion } from "framer-motion"

const Marquee = () => {
  return (
    
    <div  >
      <div  className="marquee w-full whitespace-nowrap bg-[#0C5946] text-[30vh] font-bold overflow-hidden flex flex-row  items-center text-white">
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity ,ease:"linear", duration:10}} className="pr-20" >WE CREATE YOUR DEMAND</motion.h1>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity ,ease:"linear", duration:10}} className="pr-20" >WE CREATE YOUR DEMAND</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
