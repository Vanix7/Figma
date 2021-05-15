import classes from './Cell.module.scss'


const Cell = props => {
    return (
        <div className = {classes.Cell} style = {props.style}>
            <span style = {props.spanStyle}>{props.children}</span>
            {props.count && <div>{props.count}</div>}
            
        </div>
    )
}

export default Cell