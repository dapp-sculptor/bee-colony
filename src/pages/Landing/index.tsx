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
    <div className={`w-[100vw] min-[900px]:h-[calc(90vh)] border-t-[1px] flex flex-row bg-[linear-gradient(to_bottom,#301764,#4610be)] relative overflow-hidden px-[10vw]`}>
      {/* <div className={`opacity-20 bg-[url('./src/assets/hexapattern.png')] h-[100%] top-0 absolute z-60} `} style={{backgroundImage:'/src/assets/hexapattern.png',background}}></div> */}
      <div className={`opacity-20 h-[100%] top-0 absolute z-60} `} style={{backgroundImage:`url(${HexaPattern})`}}></div>
      <img src={Pattern} className="absolute bottom-0 w-[100vw] z-20" />
      <div className="flex max-[900px]:flex-col w-[100%]">
        <div className="min-[900px]:w-[60%] text-[white] z-50 flex flex-col items-center justify-center py-[90px]">
          <div>
            <div className="text-[4vh]">Discover</div>
            <div className="text-[6vh] pt-[5vh] font-fenomen-sans-book ">Collect and Sell</div>
            <div className="text-[7vh] pb-[5vh] font-nippori">Hype Bees</div>
            <div className="text-[3vh] w-[40vw] break-words">Lorem ipsum dolor sit amet consectetuer.<br/> Semper vel fermentum in lacus sem ut sed</div>
            <div className="flex gap-[1vw] mt-[5vh]">
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