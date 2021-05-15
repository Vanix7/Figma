import classes from './PrivateOffice.module.scss'
import HeaderMenu from '../../layout/HeaderMenu/HeaderMenu'
import Card from '../../components/Card/Card'
import ECard from '../../components/ECard/ECard'

import {Link} from 'react-router-dom'

const data = [
    {
        date: 'Понедельник 15.06.20 | 15:30 ',
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        doctor: 'Малушко Т. Н.',
        position: 'Хирургия',
        image: 'image1'
    },
    {
        date: 'Понедельник 15.06.20 | 18:30 ',
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        doctor: 'Харьков В. С.',
        position: 'Терапевтическое отделение',
        image: 'image2'
    },
]

const PrivateOffice = props => {
    const renderCards = data.map((item, index) =>(
        <Card
            date = {item.date}
            image = {item.image}
            hospital = {item.hospital}
            doctor = {item.doctor}
            position = {item.position}
            key = {index}
        />
    ))
    return (
        <HeaderMenu>
            <div className = {classes.Content}>
                <div className = {classes.ContentBlock}>
                    <h4 className = {classes['ContentBlock-Title']}> Записи на прием</h4>
                    <div>
                        {renderCards}
                        <div className = {classes['ContentBlock-More']}>
                            Ещё 3 записи <br/>
                            <Link to = {props.location.pathname + '/appointment'}>Подробнее</Link>
                        </div>
                    </div>
                </div>
                <div className = {classes.ContentBlock}>
                    <h4 className = {classes['ContentBlock-Title']}> Электронная карта</h4>
                    <div>
                        <ECard/>
                    </div>
                
                </div>
            </div>
        </HeaderMenu>
    )
}

export default PrivateOffice