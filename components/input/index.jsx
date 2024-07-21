<<<<<<< HEAD
const Input = (props) => (
    <div className="relative flex justify-center items-center">
        { props.icon }
        <input className="p-3 rounded-md w-full" type={ props.type } value={ props.value } onChange={ props.onChange } placeholder={ props.children } required />
    </div>
)

=======
const Input = (props) => (
    <div className="relative flex justify-center items-center">{ props.icon }<input className="p-3 rounded-md w-full" type={ props.type } onChange={ props.onChange } placeholder={ props.children } /></div>
)

>>>>>>> 26355b680e45e7f12516b18a78ffad4077d4ea86
export default Input