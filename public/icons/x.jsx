import { motion } from 'framer-motion'

const X = (props) => {
    const pathVariants = { hidden: { pathLength: 0, fillOpacity: 0 }, visible: { pathLength: 1, fillOpacity: 1, transition: { duration: 2, ease: 'easeInOut' }} }

    return (
        <motion.svg className={ props.className } xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" initial="hidden" animate="visible">
            <motion.g stroke="#ffffff" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible">
                <motion.path 
                    d="
                        M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 
                        21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 
                        9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z
                    "
                    fill="white"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
            </motion.g>
        </motion.svg>
    )
}

export default X