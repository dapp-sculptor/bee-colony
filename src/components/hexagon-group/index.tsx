import { memo } from 'react'
import { Hexagon } from '..'
import { Bee1, Bee2, Bee3, Bee4, Bee5, Bee6, Bee7 } from '@/assets/images'

const Hexagons = () => {
    return (
        <div className='relative h-[calc(100%)] min-h-[400px] w-[100%]'>
            <Hexagon xpos={-50} ypos={-50} img={Bee1}/>
            <Hexagon xpos={35} ypos={7} img={Bee2}/>
            <Hexagon xpos={-50} ypos={64} img={Bee3}/>
            <Hexagon xpos={-135} ypos={7} img={Bee4}/>
            <Hexagon xpos={-135} ypos={-107} img={Bee5}/>
            <Hexagon xpos={-50} ypos={-164} img={Bee6}/>
            <Hexagon xpos={35} ypos={-107} img={Bee7}/>
        </div>
    )
}

export default memo(Hexagons)
