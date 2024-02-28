import { Link, Outlet } from "react-router-dom";

import { NavBtn, VerticalButton, WalletConnect } from "@/components";
import { navButtonList } from "@/data/constant";
import { useState } from "react";
import { Hamburger } from "@/assets/images";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div className="flex justify-between items-center bg-[#201c2c] px-[120px] max-1cs:px-[20px] max-2cs:px-[30px] max-3cs:px-[50px] max-4cs:px-[80px] w-[100vw] h-[200px] max-1cs:h-[40px] max-2cs:h-[70px] max-3cs:h-[100px] max-4cs:h-[130px] text-[70px] max-1cs:text-[10px] max-2cs:text-[20px] max-3cs:text-[30px] max-4cs:text-[50px] ">
        <Link to='/' className="font-nippori text-[white] hover:text-[white] uppercase cursor-pointer hover:scale-110" >the hive</Link>
        <div className="flex items-center gap-[10px]">
          <div className={`flex max-1cs:hidden gap-[100px] max-2cs:gap-[10px] max-3cs:gap-[50px] max-4cs:gap-[80px]`}>
            {navButtonList.map((
              value, index) => {
              return <NavBtn key={index} name={value.name} link={value.link} />
            })
            }
          </div>
          {/* <div className={``} style={{ display: `${landscape?'none':'block'}` }}> */}
          <div className={`max-1cs:block hidden`}>
            <div className={`flex justify-center items-center w-[20px] h-[20px]`} onClick={() => setShowModal(true)} >
              <img src={Hamburger} className={`w-[20px] h-[20px]`} />
            </div>
            {showModal && <div className={`absolute max-1cs:flex justify-center items-center left-0 top-0 `}>
              <div className="top-0 left-0 z-[60] fixed backdrop-blur-[5px] w-[100vw] h-[100vh]" onClick={() => {
              }} />
              <div className="top-0 left-0 z-[70] fixed flex flex-col justify-center items-center gap-[10vh] w-[100vw] h-[100vh] text-[30px]" onClick={() => {
                setShowModal(false)
              }}>
                {navButtonList.map((
                  value, index) => {
                  return <VerticalButton key={index} name={value.name} link={value.link} />
                })
                }
              </div>
            </div>}
          </div>
          <WalletConnect />
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;