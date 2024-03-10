
const Nav = () => {
  return (
    <> 
    <div className="w-full px-20 py-8 fixed z-[999] flex flex-row gap-4 items-center justify-between">
        <div className="logo text-2xl font-bold"><h1>LUX</h1></div>
        <div className=" links flex flex-row gap-4">
            {["Services","Our works", "About Us" ,"Contact Us"].map((item,index)=>(
                <a href="#" key={index} className={` font-semibold   ${index===3 &&" ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>

    </>
  )
}

export default Nav
