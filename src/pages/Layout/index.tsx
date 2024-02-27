import { Link, Outlet } from "react-router-dom";

import { NavBtn, WalletConnect } from "@/components";
import { navButtonList } from "@/data/constant";
import { useEffect, useState } from "react";
import { Hamburger } from "@/assets/images";
import { useApp } from "@/context";
import { useWindowSize } from "@uidotdev/usehooks";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { landscape, setLandscape, } = useApp()
  const size = useWindowSize();

  useEffect(() => {
    const W = size.width
    const H = size.height
    console.log("====>", size, Number(H) > Number(W) * 0.64)
    setLandscape(Number(H) > Number(W) * 0.64)
  }, [size])

  return (
    <>
      <div className="h-[10vh] w-[100vw] bg-[#201c2c] flex items-center justify-between px-[5vh]">
        <Link to='/' className="uppercase text-[white] text-[5vh] cursor-pointer hover:scale-110 hover:text-[white] font-nippori" >the hive</Link>
        <div className="flex gap-[1vh]  items-center">
          <div className={`${landscape ? "" : "hidden"}  min-[900px]:flex gap-[3vh]`}>
            {navButtonList.map((
              value, index) => {
              return <NavBtn key={index} name={value.name} link={value.link} />
            })
            }
          </div>
          {/* <div className={``} style={{ display: `${landscape?'none':'block'}` }}> */}
          <div  className={`${!landscape ? "flex" : "hidden"}`}>
            <div className={`flex justify-center items-center`} onClick={() => setShowModal(true)} >
              <img src={Hamburger} className={`w-[5vh] h-[5vh] ${landscape ? "hidden" : ""}`}/>
            </div>
            <div className={`absolute flex justify-center items-center ${showModal ? "" : "hidden"}  left-0 top-0 `}>
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