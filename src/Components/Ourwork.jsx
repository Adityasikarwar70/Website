import image1 from "/assets/image 1.png";
import image2 from "/assets/image 2.png";
import image3 from "/assets/image 3.png";
import image4 from "/assets/image 4.png";
import image5 from "/assets/Group 3.png";
import image6 from "/assets/image 6.png";
import image7 from "/assets/image 7.png";

const Ourwork = () => {
  return (
    <>
      <div className=" relative z h-full w-full bg-black p-[10vh] flex flex-wrap gap-[1.5vw] overflow-hidden">
      <div className=" absolute z-[1]  h-[70vh] w-[70vh] bg-[#1481d474] rounded-full -left-48 top-20 blur-[50px] "></div>
      <div className=" absolute z-[1]  h-[70vh] w-[70vh] bg-[#f1717162] rounded-full -right-48 top-64 blur-[50px] "></div>
      <div className=" absolute z-[1]  h-[70vh] w-[70vh] bg-[#ffffff48] rounded-full -left-48 top-[120vh] blur-[50px] "></div>



        <div  className="h-[70vh] overflow-hidden z-10 ">
          <img className=" h-[70vh] hover:scale-105 transition-all hover:rotate-2" src={image5} alt="" />
        </div>
        <div className="h-[70vh] overflow-hidden z-10">
          <img className=" h-[70vh] hover:scale-105 transition-all hover:rotate-2" src={image4} alt="" />
        </div>
        <div className="h-[60vh] overflow-hidden z-10">
          <img className=" h-[60.5vh] hover:scale-105 transition-all hover:rotate-2" src={image6} alt="" />
        </div>
        <div className="h-[60vh] overflow-hidden z-10">
          <img className=" h-[60.5vh] hover:scale-105 transition-all hover:rotate-2" src={image2} alt="" />
        </div>
        <div className="h-[60vh] overflow-hidden z-10">
          <img className=" h-[60.5vh] hover:scale-105 transition-all hover:rotate-2" src={image1} alt="" />
        </div>
        <div className="h-[56vh] overflow-hidden z-10">
          <img className=" h-[56.5vh] hover:scale-105 transition-all hover:rotate-2" src={image3} alt="" />
        </div>
        <div className="h-[56vh] overflow-hidden z-10">
          <img className=" h-[56.5vh] hover:scale-105 transition-all hover:rotate-2" src={image7} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ourwork;
