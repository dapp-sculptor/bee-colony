import { memo } from 'react'

type props = {
    name: string
    feature: () => void
}

const customBtn = ({ name, feature }: props) => {
    return (
        <button className='border-[#c9bee1] border-[5px] max-1cs:border-[2px] max-2cs:border-[3px] max-3cs:border-[4px] hover:bg-[white] rounded-[13.5px] max-1cs:rounded-[4px] max-2cs:rounded-[8px] max-3cs:rounded-[12px] max-4cs:rounded-[24px] w-[350px] max-1cs:w-[70px] max-2cs:w-[150px] max-3cs:w-[200px] max-4cs:w-[330px] h-[150px] max-1cs:h-[30px] max-2cs:h-[60px] max-3cs:h-[80px] max-4cs:h-[130px] text-[50px] text-[white] hover:text-[#201c2c] max-1cs:text-[7px] max-2cs:text-[15px] max-3cs:text-[20px] max-4cs:text-[40px]' onClick={feature}>{name}</button>
    )
}

export default memo(customBtn)
