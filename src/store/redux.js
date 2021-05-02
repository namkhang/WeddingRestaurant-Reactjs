
import {applyMiddleware, createStore} from 'redux'
import axios from 'axios'
import reducerRoot from '../reducer/reducerroot'

const ReduxThunk = store => next => async action =>{
    if(action.type === 'SETITEM'){
        let response = await axios.get('http://localhost:3216/getaccount');
        action.item = response.data
    }
    return next(action)
}

 const store = createStore(reducerRoot , applyMiddleware(ReduxThunk))
 export default store



