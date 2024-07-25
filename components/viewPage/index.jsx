import Input from "../input"
import Button from "../button"
import Line from "./line"
import BaseText from "./baseText"
import Cards from "./cards"
import { useState } from "react"
import Image from "next/image"

const ViewPage = () => {
    const defaultPaswordIcon = '/icons/closedEye.png'
    const defaultType = 'password'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIcon, setPasswordIcon] = useState(defaultPaswordIcon)
    const [type, setType] = useState(defaultType)

    return (
        <form className="flex-grow flex flex-col justify-center" onSubmit={(event) => event.preventDefault()}>
            <h1 className="font-bold text-center mb-5 text-xl md:text-[26px] md:hidden">
                Sign In to recharge Direct
            </h1>
            <div className="flex flex-col gap-y-5">
                <Input value={email} onChange={(event) => setEmail(event.target.value)}>
                    Enter Email
                </Input>
                <Input 
                    icon={<Image width={24} height={24} src={passwordIcon} className="w-6 h-6 absolute end-0 p-1" />}
                    type={type} 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    onClick={(() => { setType(type !== defaultType ? defaultType : 'text'); setPasswordIcon(passwordIcon !== defaultPaswordIcon ? defaultPaswordIcon : '/icons/eye.png') })}
                >
                    Password
                </Input>
                <BaseText className="ml-auto cursor-pointer">
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