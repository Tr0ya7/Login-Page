import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => setWindowSize(window.innerWidth), [])

    return windowSize
}

export default useWindowSize