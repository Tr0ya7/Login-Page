import { motion } from 'framer-motion'

const Loading = () => {
    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.2
            }
        },
        end: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const loadingCircleVariants = {
        start: {
            y: '-100%'
        },
        end: {
            y: '100%'
        }
    }
    const loadingCircleTransition = {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
    }

    return (
        <motion.div className="flex justify-center gap-x-1" variants={loadingContainerVariants} initial="start" animate="end">
            <motion.span variants={loadingCircleVariants} transition={loadingCircleTransition} />
            <motion.span variants={loadingCircleVariants} transition={loadingCircleTransition} />
            <motion.span variants={loadingCircleVariants} transition={loadingCircleTransition} />
        </motion.div>
    )
}

export default Loading