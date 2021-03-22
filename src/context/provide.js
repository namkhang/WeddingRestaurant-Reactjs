import React , {Component} from 'react'
import Context from '../context/context'
export default class Provide extends Component{
            constructor(props){
                super(props)
                this.state = {
            /*         data : [], */
                    dataMemo :  localStorage.memory ?  JSON.parse( localStorage.memory) : [],
                    data : 123
                }
               
                
            }

        /*     search(text){
            
                    fetch('http://localhost:3216/searchforreactjs' , {method : 'POST' , headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({name : text})
                })
                .then(res => res.json())
                .then(data => this.setState({data : data}))         
            
            } */

            addToMemo(item){
                    let data = [...this.state.dataMemo];
                    data.push(item)
                    localStorage.memory =JSON.stringify(data) ; // bien duoc luu vao localStore va sessionStore phai duoi dang json
                    this.setState({dataMemo : JSON.parse(localStorage.memory)})
            }

            removeMemo(id){
                    let data = [...JSON.parse(localStorage.memory)]; // lay ra data cua localStore hien tai
                    data.forEach((i,index)=>{
                        if(i._id === id){
                            data.splice(index , 1)
                        }
                    })
                    localStorage.memory = JSON.stringify(data) // cap nhat lai data cho localStorage
                    this.setState({dataMemo : JSON.parse(localStorage.memory)})
            }
/* 
            componentDidMount(){
                fetch('http://localhost:3216/reactcall')
                .then(res=> res.json())
                .then(data => this.setState({data : data}))
            } */
            render(){
                return(
                    <Context.Provider value={{
                         /*    data : this.state.data,
                            search :this.search.bind(this), */
                            dataMemo : this.state.dataMemo,
                            addToMemo : this.addToMemo.bind(this),
                            removeMemo : this.removeMemo.bind(this)
                    }}>
                        {this.props.children}
                    </Context.Provider>
                )
            }
}


