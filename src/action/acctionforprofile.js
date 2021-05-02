export let acctionAdd = (data) =>{
        return {
            type : 'INSERT' , 
            data : data
        }
}
export let accionDelete = (name) =>{
    return {
            type : 'DELETE' , 
            name : name
    }
}


