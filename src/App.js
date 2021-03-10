import {Switch , Route} from 'react-router-dom'

import Provide from './context/provide'
import Home from './component/postrestaurant/postrestaurant'
import Detailpost from './component/detailpost/detailpost'
import Login from './component/Login/Login'


function App() {
  return (
    <div className="App">
      <Switch>
          <Provide>
          <Route path='/' exact component={Home}></Route>
          <Route path='/page/:page' exact component={Home}></Route>
          <Route path='/chitiet/:id' exact component={Detailpost}></Route>
          <Route path='/login' exact component={Login}></Route>
          </Provide>
      </Switch>
    </div>
  );
}

export default App;
