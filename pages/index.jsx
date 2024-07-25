import BottomText from '@/components/bottomText'
import Header from '@/components/header'
import SideText from '@/components/sideText'
import ViewPage from '@/components/viewPage'
import Ellipse from '@/public/background/ellipse'
import Pic from '@/public/background/pic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
    return (
        <main>
            <section className="bg-[#f6f6f6] w-full flex">
                <section className={`flex min-h-screen relative p-9 gap-x-10 w-full justify-center lg:gap-x-5 xl:gap-x-14 z-10 ${inter.className}`}>
                    <Header />
                    <SideText />
                    <Pic />
                    <div className="relative flex flex-col w-[350px] absolute">
                        <ViewPage />
                        <BottomText />
                    </div>
                </section>
            </section>
            <Ellipse className="w-screen absolute bottom-0" />
        </main>
    )
}

export default Home