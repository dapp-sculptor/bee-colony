import { Link, Outlet } from "react-router-dom";

import { NavBtn, WalletConnect } from "@/components";
import { navButtonList } from "@/data/constant";
import { useState } from "react";
import { Hamburger } from "@/assets/images";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <div className="h-[60px] w-[100vw] bg-[#201c2c] flex items-center justify-between pl-[32px]">
        <Link to='/' className="uppercase text-[white] text-[30px] cursor-pointer transition-all hover:scale-110 hover:text-[#ffde81] max-[400px]:text-[20px] " >the hive</Link>
        <div className="flex gap-[5px] min-[900px]:gap-[20px] items-center">
          <div className="hidden min-[900px]:flex gap-[20px]">
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