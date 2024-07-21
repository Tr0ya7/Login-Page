import Arrow from '@/public/icons/arrow'

const HeaderItens = (props) => <ul className="flex items-center gap-x-9"><div className="flex gap-x-1.5 items-center"><li>English</li><li><Arrow /></li></div>{props.children}</ul>

export default HeaderItens