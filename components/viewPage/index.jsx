import Eye from "@/public/icons/eye"
import Input from "../input"
import X from "@/public/icons/x"
import Button from "../button"
import Line from "./line"
import BaseText from "./baseText"
import Cards from "./cards"
import { useState } from "react"

const ViewPage = () => {
    const iconStyle = "w-6 h-6 absolute end-0 p-1"

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="flex-grow flex flex-col justify-center" onSubmit={(event) => event.preventDefault()}>
            <h1 className="font-bold text-center mb-5 text-xl sm369:text-2xl">
                Sign In to recharge Direct
            </h1>
            <div className="flex flex-col gap-y-5">
                <Input value={email} onChange={(event) => setEmail(event.target.value)}>
                    Enter Email
                </Input>
                <Input icon={<Eye className={iconStyle} />} type="password" value={password} onChange={(event) => setPassword(event.target.value)}>
                    Password
                </Input>
                <BaseText className="ml-auto">
                    Recover Password ?
                </BaseText>
            </div>
            <section className="flex flex-col gap-y-7">
                <Button email={email} password={password} />
                <Line>
                    <BaseText>
                        Or continue with
                    </BaseText>
                </Line>
                <Cards />
            </section>
        </form>
    )
}

export default ViewPage