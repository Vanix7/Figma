import classes from './Test.module.scss'
// import {useEffect} from 'react'
import axios from 'axios'
const Test = props => {
    const v = axios.get('https://figma-b12be-default-rtdb.europe-west1.firebasedatabase.app/vanix.json').then(v => 
    console.log('a', v))
    // v q
    // const t = axios.get('https://figma-b12be-default-rtdb.europe-west1.firebasedatabase.app/vanix').then(t => console.log('b', t))

    
    return (
        <div>

        </div>
    )
}

export default Test