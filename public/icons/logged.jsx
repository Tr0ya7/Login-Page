import { motion } from 'framer-motion'

const Logged = (props) => {
    const pathVariants = { hidden: { pathLength: 0, fillOpacity: 0 }, visible: { pathLength: 1, fillOpacity: 1, transition: { duration: 2, ease: 'easeInOut' }} }

    return (
        <motion.svg className={ props.className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" initial="hidden" animate="visible">
            <motion.g fill="#ffffff" stroke="#ffffff" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible">
                <motion.path 
                    d="
                        M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 
                        -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 
                        1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z
                    "
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
            </motion.g>
        </motion.svg>
    )
}

export default Logged