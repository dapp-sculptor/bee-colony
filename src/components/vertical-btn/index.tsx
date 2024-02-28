import { memo } from 'react'
import { Link } from 'react-router-dom'

type props = {
    name: string
    link: string
}

const verticalButton = ({ name, link }: props) => {
    return (
        <Link to={link} className={`hover:bg-[white] px-[10px] max-2cs:[5px] rounded-md font-Montserrat text-[#f1f1f2] text-[5vh] hover:text-[#201c2c]  `}>{name}</Link>
    )
}

export default memo(verticalButton)
