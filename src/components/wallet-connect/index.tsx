import { memo } from 'react'

const walletConnect = () => {
    return (
        <div className='bg-[linear-gradient(to_bottom_right,#4915c1,#afb1ce)] hover:bg-[linear-gradient(to_bottom_right,#afb1ce,#4915c1)] flex justify-center items-center ml-[200px] max-1cs:ml-[0px] max-2cs:ml-[10px] max-3cs:ml-[80px] max-4cs:ml-[130px] p-[30px] max-1cs:p-[7px] max-2cs:p-[10px] max-3cs:p-[15px] max-4cs:p-[20px] rounded-[20px] max-1cs:rounded-[3px] max-2cs:rounded-[5px] max-3cs:rounded-[7px] max-4cs:rounded-[10px] h-[60%] font-Montserrat text-[35px] text-[white] max-1cs:text-[5px] max-2cs:text-[10px] max-3cs:text-[15px] max-4cs:text-[20px] uppercase cursor-pointer'>connect wallet</div>
    )
}

export default memo(walletConnect)
