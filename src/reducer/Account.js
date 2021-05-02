
let initialState = {
   account : []
}
 
const reducerAccount = (state =initialState , action)=>{
    switch(action.type){
        case 'INSERTPRODUCT' : 
            let newProduct= [...state.account]
            newProduct.push(action.data)
            return {
                    ...state ,
                    account : newProduct
            }
        case 'DELETEPRODUCT' : 
            let newProduct2 = [...state.account]
            newProduct2.forEach((item,index) =>{
                if(item.username === action.name){
                    newProduct2.splice(index , 1)
                }
            })
            return {
                    ...state ,
                    account : newProduct2
            }
        case 'SETITEM':
            return {
                ...state , 
                account : action.item
            }
        default :
        return state    
    }
}

export default reducerAccount