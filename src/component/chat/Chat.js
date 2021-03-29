import React, { useEffect, useState } from 'react';
import '../Chat.css'
import io from 'socket.io-client'

import Menu from '../menu/menu'
import Footer from '../footer/footer'
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Axios from 'axios'

let socket;


function Chat() {
    const [chat,setChat] = useState({Chat : []});
    const  {id} = useParams()
        useEffect(()=>{
        
            async function fetchData(){
                let chat = await Axios.post('http://localhost:3216/chatforreact' , {idcus : Cookies.get('iduser') , idres : id , cusName : Cookies.get('nameuser')})
                setChat(chat.data)
            }
                   
            fetchData()
        },[id])

        useEffect(()=>{
                  socket = io('http://localhost:5000')
                  socket.emit('join-room',chat._id)
                  socket.on('server-sent-chat' , (data)=>{
                    if(data.IdCustomer === Cookies.get('iduser') && data.IdRestaurant === id){
                      setChat(data)
                    }
                     
                  })
        },[chat._id , id])

        function enterChat(event){
                if(event.keyCode === 13){
                    socket.emit('client-sent-chat' , {idsent : Cookies.get('iduser') , IdCustomer : Cookies.get('iduser') ,IdRestaurant : id , chatcontent : event.target.value , time : '12/12/2020', Name : Cookies.get('nameuser') });
                    event.target.value = '';
                }
        }   
       
            return (
                <div>
                        <Menu />
                        <div className="khung">
                <div className="container">
                  <div className="row no-gutters vienKhung" style={{position: 'relative', height: '700px'}}>
                    <div className="col-md-4 border-right" id="useronline">
                    </div>
                    <div className="col-md-8">
                      <div className="settings-tray" style={{height: '80px'}}>
                        <div className="friend-drawer no-gutters friend-grey" style={{height: '80px'}}>
                          <div className="text">
                            <h6 id="name" style={{color: 'black'}}>wqeqweqweqwe</h6>
                            <h6 style={{color: 'black'}}>ID : <span id="userid">asdasdsad</span> </h6>
                            <p className="text-muted">Hãy cùng trò chuyện cùng mọi người</p>
                          </div>
                          <span className="setting-tray setting-right">
                            <i className="fa fa-refresh" aria-hidden="true" /> 
                            <i className="fa fa-commenting" aria-hidden="true" /> 
                            <i className="fa fa-bars" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <div className="chat-panel" id="khungchat">
                        {chat.Chat.map(item => 
                            item.idsent === Cookies.get('iduser') ? 
                            <div className="row no-gutters">
                            <div className="col-md-3 offset-md-9">
                              <div className="chat-bubble chat-right">
                                <span style={{color: 'black', fontWeight: 'bold'}}>{item.Name}</span>
                                <br />
                                {item.chatcontent}
                              </div>
                            </div>
                          </div> 
                        
                       :
                   
                         <div class="row no-gutters">
                         <div class="col-md-3">
                           <div class="chat-bubble chat-left">
                             <span style={{color : 'black' , fontWeight: 'bold'}}>{item.Name}</span>
                             <br />
                             {item.chatcontent}
                           </div>
                         </div>
                       </div>
                         
                  )}
                      </div>
                    </div>
                  </div>
                  <div className="chat-box-tray" style={{width: '740px', position: 'absolute', right: '190px', bottom: '-140px'}}>
                    <i className="fa fa-meh-o" aria-hidden="true" />
                    <input type="text" placeholder="Type your message here..." onKeyUp={enterChat} />
                    <i className="fa fa-microphone" aria-hidden="true" /> 
                    <button id="sent"><i className="fa fa-paper-plane" aria-hidden="true" style={{marginLeft: '-5px'}} /></button>
                  </div>
                </div>
              </div>
        
                        <Footer />
                </div>
            );
 
    
}

export default Chat;