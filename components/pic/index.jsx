import useWindowSize from '@/hooks/useWindowSize'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Pic = () => {
    const [width, setWidth] = useState(300)
    const [height, setHeight] = useState(300)
    
    const windowSize = useWindowSize()

    useEffect(() => { windowSize >= 1366 && setWidth(545); setHeight(449) }, [windowSize])

    return <Image className="my-auto pb-16 hidden lg:block" src="/background/pic.png" width={width} height={height} alt="men pic" />
}

export default Pic