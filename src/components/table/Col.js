import classes from './Col.module.scss'


const Col = props => {
    return (
        <div className = {classes.Cell}>
            {props.children}
        </div>
    )
}

export default Col