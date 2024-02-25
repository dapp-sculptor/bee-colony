import { memo } from 'react'
import { Link } from 'react-router-dom'

type props = {
    name: string
    link: string
}

const navButton = ({ name, link }: props) => {
    return (
        <Link to={link} className='nav-btn-font text-[#f1f1f2] text-[15px] px-[10px] rounded-md transition-all hover:text-[#201c2c] hover:bg-[#ffde81]'>{name}</Link>
    )
}

export default memo(navButton)
