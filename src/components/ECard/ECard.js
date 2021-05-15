import classes from './ECard.module.scss'
import Illustration1 from '../../assets/ECard/illustration1.svg'
import Illustration2 from '../../assets/ECard/illustration2.svg'
import Illustration3 from '../../assets/ECard/illustration3.svg'
import Illustration4 from '../../assets/ECard/illustration4.svg'
import {ReactSVG} from 'react-svg';

const data = [
    {
        title: 'Информация о пациенте',
        description: [
            'Ваши личные данные',
            'Рекомендации врачей',
            'История болезней'
        ],
        illustration: Illustration1,
    },
    {
        title: 'Результаты анализов',
        description: 'Вы можете узнать здесь результаты своих анализов',
        illustration: Illustration2,
    },
    {
        title: 'Добавить  информацию',
        description: 'Добавляйте в свою электронную медицинскую карту новые данные',
        illustration: Illustration3,
    },
    {
        title: 'История приемов',
        description: 'Вся информация о полученных услугах за все время хранится здесь',
        illustration: Illustration4,
    },
]

const ECard = props => {
    function el(description) {
        return (description.map((el, index) => (
            <li key = {index}>
            {el}
            </li>
        )))
    }
    const renderEcards = data.map((item, index) => (
        <div className = {classes.ECard} key = {index}>
            <div className = {classes['ECard-Illustration']}>
                <ReactSVG src={item.illustration} />
            </div>
            <div className = {classes['ECard-Content']}>
                <h5>
                    {item.title}
                </h5>
                
                { typeof(item.description) === 'string'
                ? <p>{item.description}</p>
                : <ul>
                    {el (item.description)}
                </ul>     
                }
                    
                
                
                
            </div>
        </div>

    ))
    return (
        <div className = {classes.Container}>
            {renderEcards}
        </div>
            
    )
}

export default ECard