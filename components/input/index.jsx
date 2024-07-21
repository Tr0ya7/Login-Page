const Input = (props) => (
    <div className="relative flex justify-center items-center">
        { props.icon }
        <input className="p-3 rounded-md w-full" type={ props.type } value={ props.value } onChange={ props.onChange } placeholder={ props.children } required />
    </div>
)

export default Input