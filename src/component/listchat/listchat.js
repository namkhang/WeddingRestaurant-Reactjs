import React, { useEffect, useState } from 'react';
import Menu from '../menu/menu'
import Footer from '../footer/footer'
import '../Listchat.css'
import Cookies from 'js-cookie';

function Listchat(props) {
    const [dataListchat , setDataListchat] = useState([]) 

    useEffect(()=>{
                fetch('http://localhost:3216/listchatreact' , {method : 'POST' , headers :{
                            'Content-Type' : 'application/json'
                },
                body : JSON.stringify({idcus : Cookies.get('iduser')})
            })
            .then(res=>res.json())
            .then(data => {
                setDataListchat(data)
                
         
            })
    },[])

    return (
        <div>
            <Menu />
            <div className="khung">
        <div className="container">
          <div className="row no-gutters " style={{height: '600px'}}>
            <div className="col-md-10 border-right vienKhung offset-1">
              <div className="setting-main">
                <a href>
                  <img className="profile-image" src={dataListchat.length > 0 ? dataListchat[0].imageCus : ''} alt="none" />
                  <p className="name">{Cookies.get('nameuser')}</p>
                  <span className="setting-tray float-right setting-right">
                    <i className="fa fa-refresh" aria-hidden="true" /> {/*cached */}
                    <i className="fa fa-commenting" aria-hidden="true" /> {/*message */}
                    <i className="fa fa-bars" aria-hidden="true" />{/*menu */}
                  </span>
                </a>
              </div>
              <div className="search-box">
              </div>
              <br />
              {dataListchat.map(item=>
                      <a href="/chatonline">
                      <div className="friend-drawer friend-onhover">
                        <img className="profile-image" src={item.imageRes} alt="none" />
                        <div className="text">
                          <h6>{item.ResName}</h6>
                          <p className="text-muted">{item.Chat[item.Chat.length - 1].chatcontent}</p>
                        </div>
                        <span className="time text-muted small">{item.Chat[item.Chat.length - 1].time}</span>
                      </div>
                    </a>
                    
                )}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
        </div>
  
    );
}

export default Listchat;