import HeaderItens from './headerItens'
import useWindowSize from '@/hooks/useWindowSize'

const Header = () => {
    const windowSize = useWindowSize()

    return (
        <header className="text-[17px] flex justify-end items-center h-fit absolute left-0 right-0 md:justify-center md:gap-x-10 md:mx-auto">
            <HeaderItens>{windowSize < 768 ? null : <><li className="border-b-4 border-[#4461F2] rounded-b">Sign In</li><li>Register</li></>}</HeaderItens>
        </header>
    )
}

export default Header