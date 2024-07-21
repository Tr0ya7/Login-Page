<<<<<<< HEAD
import { useState } from 'react'
import Logged from '@/public/icons/logged'
import Loading from './loading'

const Button = (props) => { 
    const defaultButtonChildren = 'Sign In'
    const [buttonChildren, setButtonChildren] = useState(defaultButtonChildren)

    const handleClick = () => {
        setButtonChildren(<Loading />)
        
        if (!props.email && !props.password) { setButtonChildren('X'); return setTimeout(() => setButtonChildren(defaultButtonChildren), 3000) }
            
        setTimeout(() => setButtonChildren(<div className="flex justify-center"><Logged className="w-6" /></div>), 3000)
        setTimeout(() => setButtonChildren(defaultButtonChildren), 6500)
    }

    return <button className="bg-[#4461F2] w-full p-4 text-white mt-5 rounded-md font-bold min-h-[56px]" onClick={() => handleClick()}>{buttonChildren}</button>
}

=======
const Button = () => <button className="bg-[#4461F2] w-full p-4 text-white mt-5 rounded-md font-bold">Sign In</button>

>>>>>>> 26355b680e45e7f12516b18a78ffad4077d4ea86
export default Button