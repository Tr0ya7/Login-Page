import Apple from "@/public/icons/cards/apple"
import Facebook from "@/public/icons/cards/facebook"
import Google from "@/public/icons/cards/google"

const Cards = () => {
    const cardMeasurements = 'w-[75px] h-[50px] bg-white p-3 rounded-md shadow-md cursor-pointer'
    const cards = [{id: 1, icon: <Google className={cardMeasurements} />}, {id: 2, icon: <Apple className={cardMeasurements} />}, {id: 3, icon: <Facebook className={cardMeasurements} />}]

    return <div className="flex items-center justify-center gap-x-3">{cards.map((card) => <div key={card.id}>{card.icon}</div>)}</div>
}

export default Cards