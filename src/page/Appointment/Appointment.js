import classes from './Appointment.module.scss'
import HeaderMenu from '../../layout/HeaderMenu/HeaderMenu'
import Card from '../../components/Card/Card'
import Calendar from '../../components/Calendar/Calendar'
import Vector from '../../assets/Appointment/Vector.svg'
import {Link} from 'react-router-dom'
import { ReactSVG } from 'react-svg'
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
    {
        date: 'Понедельник 29.06.20 | 11:50 ',
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        doctor: 'Малушко Т. Н.',
        position: 'Хирургия',
        image: 'image1'
    },
    {
        date: 'Вторник 30.06.20 | 12:10 ',
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        doctor: 'Малушко Т. Н.',
        position: 'Хирургия',
        image: 'image1'
    },
]
const Appointment = props => {
    return (
        <HeaderMenu>
            <div className = {classes.Content}>
                <div className = {classes.Appointment}>
                    <Link  to = "/private-office"
                    ><ReactSVG src={Vector}/>Мои записи</Link>
                    <div className = {classes['Appointment-Cards']}>
                        {data.map((item, index) => (
                            <Card
                                key = {index}
                                date = {item.date}
                                hospital = {item.hospital}
                                image = {item.image}
                                doctor = {item.doctor}
                                position = {item.position}
                                style = {{margin: "0 20px 15px"}}
                            />
                        ))}
                    </div>
                </div>
                <Calendar/>
            </div>
        </HeaderMenu>
    )
}

export default Appointment