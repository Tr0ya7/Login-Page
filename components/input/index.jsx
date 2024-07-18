const Input = (props) => (
    <div className="relative flex justify-center items-center">{ props.icon }<input className="p-3 rounded-md w-full" type={ props.type } onChange={ props.onChange } placeholder={ props.children } /></div>
)

export default Input