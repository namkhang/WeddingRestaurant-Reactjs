import React , {Component} from 'react'
import Context from '../context/context'
export default class Provide extends Component{
            constructor(props){
                super(props)
                this.state = {
                    data : [],
                    dataMemo : []
                }
               
            }

            search(text){
            
                    fetch('http://localhost:3216/searchforreactjs' , {method : 'POST' , headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({name : text})
                })
                .then(res => res.json())
                .then(data => this.setState({data : data}))         
            
            }

            addToMemo(item){
                    let data = [...this.state.dataMemo];
                    data.push(item)
                    this.setState({dataMemo : data})
            }

            removeMemo(id){
                    let data = [...this.state.dataMemo];
                    data.forEach((i,index)=>{
                        if(i._id === id){
                            data.splice(index , 1)
                        }
                    })
                    this.setState({dataMemo : data})
            }

            componentDidMount(){
                fetch('http://localhost:3216/reactcall')
                .then(res=> res.json())
                .then(data => this.setState({data : data}))
            }
            render(){
                return(
                    <Context.Provider value={{
                            data : this.state.data,
                            search :this.search.bind(this),
                            dataMemo : this.state.dataMemo,
                            addToMemo : this.addToMemo.bind(this),
                            removeMemo : this.removeMemo.bind(this)
                    }}>
                        {this.props.children}
                    </Context.Provider>
                )
            }
}


