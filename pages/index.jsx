import Language from "@/components/language"
import ViewPage from "@/components/viewPage"
import Ellipse from "@/public/background/ellipse"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => <><main className={`flex flex-col p-9 w-fit ${inter.className}`}><Language /><ViewPage /></main><div className="absolute bottom-0"><Ellipse /></div></>

export default Home