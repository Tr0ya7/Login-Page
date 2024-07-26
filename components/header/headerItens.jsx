import Arrow from '@/public/icons/arrow'
import { useState } from 'react'
import { motion } from 'framer-motion'

const HeaderItens = (props) => {
    const languages = [{id: 1, language: 'English'}, {id: 2, language: 'Portuguese'}, {id: 3, language: 'Spanish'}]

    const defaultView = 'hidden'
    const [view, setView] = useState(defaultView)
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setView(view !== 'block' ? 'block' : 'hidden')
        setIsOpen(!isOpen)
    }

    return (
        <ul className="flex items-center gap-x-9">
            <section className="relative">
                <div className="flex gap-x-1.5 items-center cursor-pointer px-6 md:p-0" onClick={handleOnClick}>
                    <li>
                        English
                    </li>
                    <li>
                        <motion.div initial={{ rotate: 0 }} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <Arrow />
                        </motion.div>
                    </li>
                </div>
                <ul className={`absolute bg-white p-1 rounded mt-3 ${view}`}>
                    {languages.map((lang) => <li key={lang.id} className="p-1 transition hover:bg-[#4461f2] hover:text-white">{lang.language}</li>)}
                </ul>
            </section>
            { props.children }
        </ul>
    )
}

export default HeaderItens