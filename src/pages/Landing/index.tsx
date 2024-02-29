import { CustomBtn, Hexagons, Bubbles } from "@/components";

const Landing = () => {
  const handleMint = () => { }

  const handleCollection = () => { }

  return <>
    <div className={`w-[100vw] border-t-[1px] flex flex-row bg-[linear-gradient(to_bottom,#301764,#4610be)] relative overflow-hidden h-[100vh]`}>
      <div className={`h-[100vh] w-[100%] top-0 left-0 absolute z-[50] bg-[url('/images/hexapattern.png')] opacity-20`} ></div>
      <div className="top-0 left-0 absolute bg-[url('/images/path-bg.png')] bg-contain bg-no-repeat bg-bottom w-[100%] h-[100vh]"></div>
      <div className={`flex max-2cs:flex-col w-[100%] h-[1100px] max-1cs:h-[300px] max-2cs:h-[500px] max-3cs:h-[700px] max-4cs:h-[900px]`}>
        <div className="z-50 flex flex-col max-2cs:justify-center items-center pt-[200px] max-1cs:pt-[30px] max-2cs:pt-[50px] max-3cs:pt-[150px] max-4cs:pt-[150px] pl-[130px] max-1cs:pl-[calc(50vw_-130px)] max-2cs:pl-[calc(50vw_-200px)] max-3cs:pl-[150px] max-4cs:pl-[100px] w-[50%] max-2cs:w-[100%] text-[white]">
          <div className="max-2cs:jsut w-[100%]">
            <div className="text-[50px] max-2cs:text-[15px] max-3cs:text-[20px] max-4cs:text-[40px] ">Discover</div>
            <div className="font-fenomen-sans-book text-[140px] max-2cs:text-[40px] max-3cs:text-[60px] max-4cs:text-[100px] ">Collect and Sell</div>
            <div className="font-nippori text-[140px] max-2cs:text-[40px] max-3cs:text-[60px] max-4cs:text-[100px] ">Hype Bees</div>
            <div className="mb-[40px] max-2cs:mb-[12px] max-3cs:mb-[15px] max-4cs:mb-[30px] text-[40px] max-2cs:text-[12px] max-3cs:text-[15px] max-4cs:text-[30px] break-words">Lorem ipsum dolor sit amet consectetuer.<br /> Semper vel fermentum in lacus sem ut sed</div>
            <div className="flex gap-[1vw]">
              <CustomBtn name='Mint' feature={handleMint} />
              <CustomBtn name='Collection' feature={handleCollection} />
            </div>
          </div>
        </div>
        <div className="z-50 w-[50%] max-2cs:w-[100%] ">
          <Hexagons />
        </div>
      </div>
      <Bubbles />
    </div>
  </>
}

export default Landing