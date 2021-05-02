
export let acctionAddAccount = (data) =>{
    return {
        type : 'INSERTPRODUCT' , 
        data : data
    }
}
export let accionDeleteAccount = (name) =>{
return {
        type : 'DELETEPRODUCT' , 
        name : name
}
}

export let actionSetItem = () =>{

    return {
        type : 'SETITEM' ,
        item : []
    }
}

