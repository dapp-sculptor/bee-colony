import { memo } from 'react'

const walletConnect = () => {
    return (
        <div className='mx-[1vh] uppercase wallet-connect rounded-[1vh] flex justify-center items-center text-[white] p-[1vh_3vh] bg-[linear-gradient(to_bottom_right,#4915c1,#afb1ce)] text-[3vh] cursor-pointer hover:bg-[linear-gradient(to_bottom_right,#afb1ce,#4915c1)]  max-[400px]:ml-0 font-Montserrat'>connect wallet</div>
    )
}

export default memo(walletConnect)
