import { memo } from 'react'

type props = {
    xpos: number
    ypos: number
    img: any
}

const Hexagon = ({ xpos, ypos, img }: props) => {
    return (
        <div className={`hexagon absolute w-[100%] h-[100%] top-1/2 left-1/2 flex justify-center items-center hover:scale-[115%]  hover:bg-[white] cursor-pointer max-2cs:w-[150px] max-2cs:h-[129.9px] max-1cs:w-[100px] max-1cs:h-[86.6px]`} style={{ translate: `${xpos}% ${ypos}%` }}>
            <div className='max-1cs:w-[96px] max-2cs:w-[144px] max-1cs:h-[83.13px] max-2cs:h-[124.7px] inner-hexagon'>
                <img src={img} alt="" className='w-full h-full'/>
            </div>
        </div>
    )
}

export default memo(Hexagon)
