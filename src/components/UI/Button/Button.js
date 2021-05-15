import './Button.module.scss'

const Button = props => {
    // console.log('dfsd', props.m || 'vanix');
    const style = {
        width: props.width
    }
    if (props.m) {
        style.margin = props.m
    } else {
        style.marginTop = props.mt
        style.marginRight = props.mr
        style.marginBottom = props.mb
        style.marginLeft = props.ml
    }
    return (
        <button style = {style}>Отменить</button>
    )
}

export default Button