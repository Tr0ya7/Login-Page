import Eye from "@/public/icons/eye"
import Input from "../input"

const ViewPage = () => (
    <section>
        <h1 className="font-bold text-xl text-center mt-[85px] mb-5">
            Sign In to recharge Direct
        </h1>
        <div className="flex flex-col gap-y-1">
            <Eye />
            <Input>
                Enter Email
            </Input>
            <Input type="password">
                Password
            </Input>
            <p className="ml-auto">
                Recover Password ?
            </p>
        </div>
    </section>
)

export default ViewPage