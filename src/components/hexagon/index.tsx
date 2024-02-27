import { memo } from 'react'

type props = {
    xpos: number
    ypos: number
    img: any
}

const Hexagon = ({ xpos, ypos, img }: props) => {
    return (
        <div className={`hexagon absolute w-[100%] h-[100%] top-1/2 left-1/2 flex justify-center items-center hover:scale-[115%]  hover:bg-[white] cursor-pointer`} style={{ translate: `${xpos}% ${ypos}%` }}>
            <div className='inner-hexagon'>
                <img src={img} alt="" className='w-full h-full'/>
            </div>
        </div>
    )
}

export default memo(Hexagon)
