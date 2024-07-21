<<<<<<< HEAD
import BottomText from '@/components/bottomText'
import Header from '@/components/header'
import SideText from '@/components/sideText'
import ViewPage from '@/components/viewPage'
import Ellipse from '@/public/background/ellipse'
import { Inter } from 'next/font/google'
=======
import BottomText from "@/components/bottomText"
import Language from "@/components/language"
import ViewPage from "@/components/viewPage"
import Ellipse from "@/public/background/ellipse"
import { Inter } from "next/font/google"
>>>>>>> 26355b680e45e7f12516b18a78ffad4077d4ea86

const inter = Inter({ subsets: ["latin"] })

const Home = () => (
<<<<<<< HEAD
    <main>
        <section className="bg-[#f6f6f6] px-9 w-full">
            <section className={`flex justify-center min-h-screen relative p-9 md:justify-end ${inter.className}`}>
                <Header />
                <SideText />
                <div className="relative flex flex-col w-[401px] absolute z-10">
                    <ViewPage />
                    <BottomText />
                </div>
            </section>
        </section>
        <Ellipse className="w-screen absolute bottom-0" />
    </main>
)
=======
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
>>>>>>> 26355b680e45e7f12516b18a78ffad4077d4ea86

export default Home