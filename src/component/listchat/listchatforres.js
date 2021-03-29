import React, { useEffect, useState } from 'react';
import Menu from '../menu/menu'
import Footer from '../footer/footer'
import '../Listchat.css'
import Axios from 'axios'
import Cookies from 'js-cookie';

function Listchatforres(props) {
        const [dataListchat , setDataListChat] = useState([]);

        useEffect(()=>{
            async function fetchData(){
                let idres = Cookies.get('idres');
                let respone = await Axios.get(`http://localhost:3216/restaurant/listchatforres/${idres}`);
                setDataListChat(respone.data)
            }
            fetchData()
                   
                    
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
              <p className="name">{Cookies.get('nameres')}</p>
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
                  <a href={`/restaurant/chat/${item.IdCustomer}`}>
                  <div className="friend-drawer friend-onhover">
                    <img className="profile-image" src={item.imageCus} alt="none" />
                    <div className="text">
                      <h6>{item.CusName}</h6>
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

export default Listchatforres;