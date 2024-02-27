import { Link, Outlet } from "react-router-dom";

import { NavBtn, WalletConnect } from "@/components";
import { navButtonList } from "@/data/constant";
import { useState } from "react";
import { Hamburger } from "@/assets/images";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <div className="h-[10vh] w-[100vw] bg-[#201c2c] flex items-center justify-between px-[5vh]">
        <Link to='/' className="uppercase text-[white] text-[5vh] cursor-pointer hover:scale-110 hover:text-[white] font-nippori" >the hive</Link>
        {/* <div className="flex gap-[5px] min-[900px]:gap-[20px] items-center"> */}
        <div className="flex gap-[1vh]  items-center">
          <div className="hidden min-[900px]:flex gap-[3vh]">
            {navButtonList.map((
              value, index) => {
              return <NavBtn key={index} name={value.name} link={value.link} />
            })
            }
          </div>
          <div className="min-[900px]:hidden">
            <div className={`w-[30px] h-[30px] flex justify-center items-center`} onClick={() => setShowModal(true)}>
              <img src={Hamburger}/>
            </div>
            <div className={`absolute flex justify-center items-center ${showModal ? "" : "hidden"} w-[100vw] h-[100vh] left-0 top-0 `}>
              <div className="absolute backdrop-blur-[5px] z-[60] w-[100vw] h-[1239px] " onClick={() => setShowModal(false)} ></div>
              <div className="fixed flex flex-col gap-[40px] text-[30] z-[70]">
                {navButtonList.map((
                  value, index) => {
                  return <NavBtn key={index} name={value.name} link={value.link} />
                })
                }
              </div>
            </div>
          </div>
          <WalletConnect />
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;