import { memo } from 'react'

type props = {
    name: string
    feature: () => void
}

const customBtn = ({ name, feature }: props) => {
    return (
        <button className='w-[100px] h-[40px] border-[1px] border-[#c9bee1] rounded-lg text-[white] hover:bg-[#ffde81] transition-all hover:text-[#201c2c] font-bold' onClick={feature}>{name}</button>
    )
}

export default memo(customBtn)
