import classes from './HeaderMenu.module.scss'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
const HeaderMenu = props => {
    return (
        <div className = {classes.Wrapper}>
            <div className = {classes.Container}> 
                <Header/>
                <div className = {classes.Content}>
                    <Menu/>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu