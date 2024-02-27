import { memo } from 'react'
import { Link } from 'react-router-dom'

type props = {
    name: string
    link: string
}

const navButton = ({ name, link }: props) => {
    return (
        <Link to={link} className='font-Montserrat text-[#f1f1f2] text-[3vh] px-[1vh] rounded-md  hover:text-[#201c2c] hover:bg-[white]'>{name}</Link>
    )
}

export default memo(navButton)
