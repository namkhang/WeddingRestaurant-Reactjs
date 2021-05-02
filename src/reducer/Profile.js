let initialState = {
    profile : []
}

const reducerProfile = (state = initialState , action)=>{
    switch(action.type){
        case 'INSERT' : 
            let newProfile = [...state.profile]
            newProfile.push(action.data)
            return {
                    ...state ,
                    profile : newProfile
            }
        case 'DELETE' : 
            let newProfile2 = [...state.profile]
            newProfile2.forEach((item,index) =>{
                if(item.name === action.name){
                    newProfile2.splice(index , 1)
                }
            })
            return {
                    ...state ,
                    profile : newProfile2
            }
        default :
        return state    
    }
}

export default reducerProfile