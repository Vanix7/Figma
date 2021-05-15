import {NavLink} from 'react-router-dom'
import classes from './Menu.module.scss'
import {ReactSVG} from 'react-svg'
import Button from '../UI/Button/Button'
import Menu1 from '../../assets/Menu/Menu1.svg'
import Menu2 from '../../assets/Menu/Menu2.svg'
import Menu3 from '../../assets/Menu/Menu3.svg'
import Menu4 from '../../assets/Menu/Menu4.svg'
import Menu5 from '../../assets/Menu/Menu5.svg'


const items = [
    {id: 1, label: 'Профиль', 
    svg: Menu1, 
    to: '/private-office', exact: false},
    {id: 2, label: 'Врачи и клиники', 
    svg: Menu2, 
    to: '/1', exact: true},
    {id: 3, label: 'Сообщения',
    svg: Menu3, 
    to: '/2', exact: true},
    {id: 4, label: 'Тестирование', 
    svg: Menu4, 
    to: '/3', exact: true},
    {id: 5, label: 'Полезно знать', 
    svg: Menu5, 
    to: '/4', exact: true},
]
var printLinks = (items) => {
    return items.map(item => (
        <li key = {item.id}>
            <NavLink
                to = {item.to}
                exact = {item.exact}
                activeClassName = {classes.active}
            >
                <ReactSVG src = {item.svg}/>
                {item.label}
            </NavLink>
        </li>
    ))
}
const Menu = props => {
    
    return (
        <nav>
            <ul>
                {printLinks(items)}
            </ul>
            <Button 
                width = {150}
                ml = {20}
            >
                Подать заявку
            </Button>
        </nav>
    )
}

export default Menu