import classes from './Calendar.module.scss'
import {useState} from 'react'
import Cell from './Cell/Cell'
import {ReactSVG} from 'react-svg'
import ArrowL from '../../assets/Calendar/ArrowL.svg'
import ArrowR from '../../assets/Calendar/ArrowR.svg'

Date.prototype.daysInMonth = function(Month) {
    return 32 - new Date(this.getFullYear(), this.getMonth() + Month, 32).getDate();
};
Date.prototype.day = function(Month) {
    return new Date (this.getFullYear(), this.getMonth() + Month, 1).getDay()
}
Date.prototype.month = function(Month) {
    return new Date (this.getFullYear(), this.getMonth() + Month, 1).getMonth()
}
Date.prototype.date = function() {
    return new Date (this.getFullYear(), this.getMonth(), this.getDate()).getDate()
}

const objMonth = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
}
const Test = props => {

    const [Month, SetMonth] = useState(0)

    function renderMonth(Month) {
        return objMonth[new Date().month(Month)]
    }
    function renderTable(Month) {
        const dayOfWeek = new Date().day(Month)
        const daysInMonth = new Date().daysInMonth(Month)
        const date = new Date().date()
        const arrCount = [1, 2, 3, 4, 5, 6, 0]
        const num = arrCount.indexOf(dayOfWeek)
        const dummy = [...new Array (daysInMonth + num)]
        let day = 1
        console.log(date);
        return dummy.map((i, index)=> (
            (Month === 0) ?
                (index >= num) ? 
                    ((day >= date) ? 
                    <Cell 
                    style = {{background: '#FFFFFF'}} 
                    count = {(day === 20) ? 2 : null}
                    key = {index}>{day++}</Cell> 
                    : <Cell 
                    spanStyle = {{color: 'rgba(0, 0, 0, 0.25)'}} 
                    key = {index}>{day++}</Cell>) 
                : <Cell key = {index}/>
            : (Month > 0) ?
                ((index >= num) ? 
                <Cell 
                    style = {{background: '#FFFFFF'}} 
                    key = {index}>{day++}</Cell> 
                : <Cell/>)
                : ((index >= num) ? 
                <Cell 
                    spanStyle = {{color: 'rgba(0, 0, 0, 0.25)'}} 
                    key = {index}>{day++}</Cell> 
                : <Cell/>)
        )) 
    }
    return (
        <div className = {classes.Calendar}>
            <div className = {classes['Calendar-Title']}>
                <div>
                    <ReactSVG onClick = {()=>SetMonth(Month-1)} src={ArrowL}/>
                    <span onClick = {() => SetMonth(0)}>{renderMonth(Month)}</span>
                    <ReactSVG onClick = {()=>SetMonth(Month+1)} src={ArrowR}/>
                </div>
            </div>
            <div className = {classes.DasWeek}>
                <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div>
                <div>Сб</div><div>Вс</div>
            </div>
            <div className = {classes['Calendar-Cell']}>
                {renderTable(Month)}
            </div>
            
        </div>
    )
}

export default Test