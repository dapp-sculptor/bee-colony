import { memo } from 'react'
import { Link } from 'react-router-dom'

type props = {
    name: string
    link: string
}

const navButton = ({ name, link }: props) => {
    return (
        <Link to={link} className={`hover:bg-[white] px-[10px] max-2cs:[5px] rounded-md font-Montserrat text-[#f1f1f2] text-[40px] hover:text-[#201c2c] max-1cs:text-[7px] max-2cs:text-[15px] max-3cs:text-[20px] max-4cs:text-[30px] `}>{name}</Link>
    )
}

export default memo(navButton)
