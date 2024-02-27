import { memo } from 'react'

type props = {
    name: string
    feature: () => void
}

const customBtn = ({ name, feature }: props) => {
    return (
        <button className='p-[1vh] h-[7vh] border border-[#c9bee1] rounded-[1vh] text-[white] hover:bg-[white] text-[2.5vh] hover:text-[#201c2c] font-bold' onClick={feature}>{name}</button>
    )
}

export default memo(customBtn)
