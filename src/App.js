import {Switch , Route} from 'react-router-dom'

import Provide from './context/provide'
import Home from './component/postrestaurant/postrestaurant'
import Detailpost from './component/detailpost/detailpost'
import Login from './component/Login/Login'
import LoginForRes from './component/Login/Loginforres'
import Myorder from './component/myorder/myorder'
import CreateOrder from './component/createorder/createorder'
import Listchat from './component/listchat/listchat'
import Myaccount from './component/myaccount/Myaccount'
import Chat from './component/chat/Chat'
import HomeforRes from './component/postrestaurant/postresforres'
import Listchatforres from './component/listchat/listchatforres'
import Chatforres from './component/chat/Chatforres'
import MyOrderForRes from './component/myorder/myorderforres'
import Post from './component/createpost/createpost'

function App() {
  return (
    <div className="App">
      <Switch>
          <Provide>
          <Route path='/' exact component={Home}></Route>
          <Route path='/chitiet/:id' exact component={Detailpost}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/myorder' exact component={Myorder}></Route>
          <Route path='/createorder' exact component={CreateOrder}></Route>
          <Route path='/listchat' exact component={Listchat}></Route>
          <Route path='/myaccount' exact component={Myaccount}></Route>
          <Route path='/chat/:id' exact component={Chat}></ Route>
          <Route path='/restaurant/homeforres' exact component={HomeforRes}></Route>
          <Route path='/restaurant/loginforres' exact component={LoginForRes}></Route>
          <Route path='/restaurant/listchatforres' exact component={Listchatforres}></Route>
          <Route path='/restaurant/chat/:id' exact component={Chatforres}></Route>
          <Route path='/restaurant/myorder' exact component={MyOrderForRes}></Route>
          <Route path='/restaurant/post' exact component={Post}></Route>
          </Provide>
      </Switch>
    </div>
  );
}

export default App;
