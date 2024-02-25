import { CustomBtn, Hexagons,  Bubbles } from "@/components";
import { Pattern, HexaPattern } from "@/assets"
import { useEffect } from "react";

const Landing = () => {
  const handleMint = () => {

  }

  const handleCollection = () => {

  }

  useEffect(() => {
    // @ts-ignore
    const bg = HexaPattern
  })

  return <>
    <div className={`w-[100vw] min-[700px]:h-[calc(100vh_-_60px)] border-t-[1px] flex flex-row bg-[linear-gradient(to_bottom,#301764,#4610be)] relative overflow-hidden`}>
      <div className={`opacity-20 bg-[url('/src/assets/hexapattern.png')] w-[100%] h-[855px] min-[700px]:h-[calc(100vh_-_61px)] absolute z-30} `} ></div>
      <img src={Pattern} className="absolute bottom-0  z-20" />
      <div className="flex max-[700px]:flex-col w-[100%]">
        <div className="min-[700px]:w-[50%] min-[700px]:p-[90px_60px] text-[#ffde81] z-50 flex flex-col items-center py-[90px]">
          <div className="text-[15px]">Discover</div>
          <div className="text-[30px] py-[20px]">Collect and Sell </div>
          <div className="text-[30px] py-[20px]">Hype Bees</div>
          <div className="text-[10px]">Welcome to our colony bee village</div>
          <div className="flex gap-[20px] mt-[30px]">
            <CustomBtn name='Mint' feature={handleMint} />
            <CustomBtn name='Collection' feature={handleCollection} />
          </div>
        </div>
        <div className="min-[700px]:w-[50%] w-[100%] z-50">
          <Hexagons />
        </div>
      </div>
      <Bubbles />
    </div>
  </>;
};

export default Landing;

301764