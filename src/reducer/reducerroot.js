import reducerProfile from './Profile'
import reducerProduct from './Account'
import { combineReducers } from 'redux'

const reducerRoot = combineReducers({
    profile : reducerProfile,
    product : reducerProduct,
})
export default reducerRoot