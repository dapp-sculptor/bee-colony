import { memo } from 'react'

// type props = {
// name: string
// feature: () => void
// }

const bubble = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    const x = w * Math.random()
    const y = h * Math.random()
    const s = Math.random() * 30
    const r = Math.random() * 360
    const c = Math.floor(Math.random() * 16777215).toString(16)
    return (
        <>
            <div className={`absolute rounded-[50%] blur-sm box ]`} style={{ width: `${s}px`, height: `${s}px`,left:`${x}px`,top:`${y}px`, backgroundColor:`#${c}`, rotate:`${r}deg` }}></div>
        </>
    )
}

export default memo(bubble)
