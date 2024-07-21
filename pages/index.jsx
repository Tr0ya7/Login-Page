import BottomText from '@/components/bottomText'
import Header from '@/components/header'
import SideText from '@/components/sideText'
import ViewPage from '@/components/viewPage'
import Ellipse from '@/public/background/ellipse'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

const Home = () => (
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

export default Home