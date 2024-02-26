import { CustomBtn, Hexagons, Bubbles } from "@/components";
import { Pattern, HexaPattern } from "@/assets/images"
import { useEffect } from "react";

const Landing = () => {
  const handleMint = () => { }

  const handleCollection = () => { }

  useEffect(() => {
    // @ts-ignore
    const bg = HexaPattern
  })

  return <>
    <div className={`w-[100vw] min-[900px]:h-[calc(100vh_-_60px)] border-t-[1px] flex flex-row bg-[linear-gradient(to_bottom,#301764,#4610be)] relative overflow-hidden`}>
      <div className={`opacity-20 bg-[url('/src/assets/hexapattern.png')] w-[100%] h-[855px] min-[900px]:h-[calc(100vh_-_61px)] absolute z-30} `} ></div>
      <img src={Pattern} className="absolute bottom-0 w-[100vw] z-20" />
      <div className="flex max-[900px]:flex-col w-[100%]">
        <div className="min-[900px]:w-[60%] text-[#ffde81] z-50 flex flex-col items-center justify-center py-[90px]">
          <div>
            <div className="text-[18px]">Discover</div>
            <div className="text-[36px] pt-[20px] font-net-lulo-clean-ttf ">Collect and Sell</div>
            <div className="text-[40px] pb-[20px] font-nippori">Hype Bees</div>
            <div className="text-[15px]">Lorem ipsum dolor sit amet consectetuer. Semper vel fermentum in lacus sem ut sed</div>
            <div className="flex gap-[20px] mt-[30px]">
              <CustomBtn name='Mint' feature={handleMint} />
              <CustomBtn name='Collection' feature={handleCollection} />
            </div>
          </div>
        </div>
        <div className="min-[900px]:w-[40%] w-[100%] z-50">
          <Hexagons />
        </div>
      </div>
      <Bubbles />
    </div>
  </>
}

export default Landing