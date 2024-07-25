const Input = (props) => (
    <div className="relative flex">
        <div className="flex justify-center items-center cursor-pointer" onClick={ props.onClick }>{ props.icon }</div>
        <input className="p-3 rounded-md w-full" type={ props.type } value={ props.value } onChange={ props.onChange } placeholder={ props.children } required />
    </div>
)

export default Input