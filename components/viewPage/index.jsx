import Eye from "@/public/icons/eye"
import Input from "../input"
import X from "@/public/icons/x"
import Button from "../button"
import Line from "./line"
import BaseText from "./baseText"
import Cards from "./cards"

const ViewPage = () => {
    const iconStyle = "w-6 h-6 absolute end-0 p-1"

    return (
        <section className="flex-grow flex flex-col justify-center">
            <h1 className="font-bold text-center mb-5 text-xl md:text-2xl">
                Sign In to recharge Direct
            </h1>
            <div className="flex flex-col gap-y-5">
                <Input icon={<X className={iconStyle} />}>
                    Enter Email
                </Input>
                <Input icon={<Eye className={iconStyle} />} type="password">
                    Password
                </Input>
                <BaseText className="ml-auto">
                    Recover Password ?
                </BaseText>
            </div>
            <section className="flex flex-col gap-y-7">
                <Button /> {/* animação de pulsação quando todos os campos foram preenchidos */}
                <Line>
                    <BaseText>
                        Or continue with
                    </BaseText>
                </Line>
                <Cards />
            </section>
        </section>
    )
}

export default ViewPage