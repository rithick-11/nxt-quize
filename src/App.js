import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Login} from './Pages'

const App = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
  </Switch>
)

export default App
