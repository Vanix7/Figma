import './App.module.scss'
import PrivateOffice from './page/PrivateOffice/PrivateOffice'
import Appointment from './page/Appointment/Appointment'
import Test from './page/Test.js'
import {Redirect, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/private-office" component={PrivateOffice}/>
      <Route path="/private-office/appointment" component={Appointment}/>
      <Route path="/test" component={Test}/>
      <Redirect to="/private-office"/>
    </Switch>
    
  );
}

export default App;
