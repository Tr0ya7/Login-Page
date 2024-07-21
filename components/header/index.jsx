import { useEffect, useState } from 'react'
import HeaderItens from './headerItens'

const Header = () => {
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => setWindowSize(window.innerWidth), [])

    return (
        <header className="text-[17px] flex justify-end items-center h-fit absolute left-0 right-0 md:justify-center md:gap-x-10 md:mx-auto">
            <HeaderItens>
                {windowSize < 768 ? null : <><li>Sign In</li><li>Register</li></>}
            </HeaderItens>
        </header>
    )
}

export default Header