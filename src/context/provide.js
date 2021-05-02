import React , {Component} from 'react'

export let Context = React.createContext();  
export class Provide extends Component{
            constructor(props){
                super(props)
                this.state = {
                    data : 'Nguyen Dang Nam Khang',
                    dataTest : '',
                    dataMemo :  localStorage.memory ?  JSON.parse( localStorage.memory) : []
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
            changeData(){
                this.setState({data : 'Nam Khang Nguyen Dang'})
            }
            changeDataTest(){
                this.setState({dataTest : 'Test Context'})
            }

            addToMemo(item){
                    let data = [...this.state.dataMemo];
                    let count = 0 ;
                    data.forEach(i => {
                        if(i._id === item._id){
                            count ++
                        }
                    })
                    if(count ===0){
                        data.push(item)
                        localStorage.memory =JSON.stringify(data) ; // bien duoc luu vao localStore va sessionStore phai duoi dang json
                        this.setState({dataMemo : JSON.parse(localStorage.memory)})
                }
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
                            /*search :this.search.bind(this), */
                            data : this.state.data,
                            dataTest : this.state.dataTest,
                            dataMemo : this.state.dataMemo,
                            addToMemo : this.addToMemo.bind(this),
                            removeMemo : this.removeMemo.bind(this),
                            changeData : this.changeData.bind(this),
                            changeDataTest : this.changeDataTest.bind(this)
                    }}>
                        {this.props.children}
                    </Context.Provider>
                )
            }
}


