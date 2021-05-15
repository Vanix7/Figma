import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import {ReactSVG} from 'react-svg'
import Header1 from '../../assets/Header/Header1.svg'
import Header2 from '../../assets/Header/Header2.svg'
import Header3 from '../../assets/Header/Header3.svg'
import Header4 from '../../assets/Header/Header4.svg'


const Header = props => {
    return (
        
        <header>
            <h3 className = {classes.HeaderLogo}>Логотип</h3>

            <div className = {classes.HeaderMenu}>
                <h3 className = {classes.Title}>
                    Мой профиль
                </h3>
                <ul className = {classes.HeaderLinks}>
                    <li>
                        <Link to = "">
                            <ReactSVG src = {Header1}/>
                        </Link>
                    </li>
                    <li>
                        <Link to = "">
                            <ReactSVG src = {Header2}/>
                        </Link>
                    </li>
                    <li>
                        <Link to = "">
                            <ReactSVG src = {Header3}/>
                        </Link>
                    </li>
                    <li>
                        <Link className = {classes.Avatar} to = "">
                            <div className = {classes.AvatarImg}>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to = "">
                            <ReactSVG src = {Header4}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header