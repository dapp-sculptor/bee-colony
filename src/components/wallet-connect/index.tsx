import { memo } from 'react'

const walletConnect = () => {
    return (
        <div className='mx-[20px] uppercase wallet-connect rounded-[5px] flex justify-center items-center text-[white] p-[5px_15px] bg-[linear-gradient(to_bottom_right,#4915c1,#afb1ce)] text-[10px] cursor-pointer hover:bg-[linear-gradient(to_bottom_right,#afb1ce,#4915c1)] max-[400px]:text-[8px] max-[400px]:ml-0'>connect wallet</div>
    )
}

export default memo(walletConnect)
