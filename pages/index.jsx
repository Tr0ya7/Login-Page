import BottomText from "@/components/bottomText"
import Language from "@/components/language"
import ViewPage from "@/components/viewPage"
import Ellipse from "@/public/background/ellipse"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => (
    <main className="bg-[#f6f6f6]">
        <section className={`flex justify-center items-center ${inter.className}`}>
            <div className="p-9 min-h-screen relative flex flex-col max-w-[401px] mx-auto"> {/* fazer que os elementos de dentro consigam atingir essa largura máxima */}
                <Language />
                <ViewPage />
                <BottomText />
            </div>
            <div className="absolute bottom-0">
                <Ellipse className="w-screen" />
            </div>
        </section>
    </main>
)

{/* não se esquecer de adicionar o framer motion */}

export default Home