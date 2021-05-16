import classes from './Card.module.scss'
import Button from '../../components/UI/Button/Button'

const Card = props => {
    'sdfsdsdfsd'
    return (
        <div className = {classes.Card} style = {props.style}>
            <h5 className = {classes['Card-Title']}>
                {props.date}
            </h5>
            <p className = {classes['Card-SubTitle']}>
                {props.hospital}
            </p>
            <div className = {classes['Card-Doctor']}>
                <div>
                    <div 
                        style = {{backgroundImage: `url(../../assets/Card/${props.image}.png)`}}
                        className = {classes['Card-Img']}>
                    </div>
                    <div className = {classes['Card-DoctorFIO']}>
                        <h5>{props.doctor}</h5>
                        <p>{props.position}</p>
                    </div>
                </div>
                <Button
                    width = {98}
                    mt = {20}
                />
            </div>
        </div>
    )
}

export default Card