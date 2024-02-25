import { memo } from 'react'
import { Hexagon } from '..'
import { Bee } from '@/assets'

const Hexagons = () => {
    return (
        <div className='relative h-[calc(100%)] min-h-[400px] w-[100%]'>
            <Hexagon xpos={-50} ypos={-50} img={Bee}/>
            <Hexagon xpos={35} ypos={7} img={Bee}/>
            <Hexagon xpos={-50} ypos={64} img={Bee}/>
            <Hexagon xpos={-135} ypos={7} img={Bee}/>
            <Hexagon xpos={-135} ypos={-107} img={Bee}/>
            <Hexagon xpos={-50} ypos={-164} img={Bee}/>
            <Hexagon xpos={35} ypos={-107} img={Bee}/>
        </div>
    )
}

export default memo(Hexagons)
