import React, {useContext} from 'react'
import {Context} from '../../context/provide'
import Cookie from 'js-cookie'

export default function Menu(props){
  const Consumer = useContext(Context)

  function Search(){
       /*  Consumer.search(document.getElementById('searchReact').value) */
      return props.search(document.getElementById('searchReact').value)
  }

  function Memory(){
    document.getElementById('myModal').style.display = 'block';
  }

  function closeMemory(){
    document.getElementById('myModal').style.display = 'none';
  }
  function Logout(){
    Cookie.remove('iduser')
    Cookie.remove('nameuser')
    localStorage.removeItem('memory');

    fetch('http://localhost:3216/logoutreact' , {method:'POST' , credentials : 'include'})
    .then(res=>res.json())
    .then(data =>{
  if(data.message ==='Success'){
        window.location.reload()
      }
    })
  }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid"> 
          <img src="/W.WR.png" alt='none' style={{width: '70px', height: '60px', marginRight: '5px'}} /><a className="navbar-brand" href="/">Wedding Restaurant</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
          </button>
          <form className="form-inline my-2 my-lg-0" action="/search" method="GET">
            <input id="searchReact" className="form-control mr-sm-3" type="text" placeholder="Tìm kiếm" onKeyUp={Search}  aria-label="Search" name="q" style={{width: '250px'}} />
            <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
          </form>
          {/* COL-AUTO START  */}
          <div className="ml-auto">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Trang chủ</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/news">Tin tức</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/policy">Chính sách</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/listchat">Tin nhắn</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/chatbot">Chat Bot</a>
                </li>
              </ul>
              <div className="attr-nav">
                <button onClick={Memory} className="cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  <span id="count" className="badge">{Consumer.dataMemo.length}</span>
                </button>
              </div>
              <li className="lneWsb"> 
                <i className="fa fa-user-circle" aria-hidden="true" />
                <span className="cbYxcp">{Cookie.get('nameuser')}</span>
                <ul className="sub-menu">
                  <li>
                    <a className="name-li" href="/myaccount">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li>
                    <a className="name-li" href="/myorder">
                      Đơn hàng của tôi 
                    </a>
                  </li>
                  <li>
                    <a className="name-li" href="/updatepass">
                      Đổi mật khẩu
                    </a>
                  </li>
                  <li>
                   <button className="name-li" onClick = {Logout}> Đăng xuất</button>
                
                  </li>
                </ul>
              </li>
            </div>
          </div>
          {/* COL-AUTO END */}
        </div>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ghi nhớ</h5>
              <span onClick={closeMemory} className="close">×</span>
            </div>
            <div className="modal-body">
              <div className="cart-row">
                <span className="cart-item cart-header
					cart-column">Nhà hàng</span>
                <span className="cart-price cart-header
					cart-column" style={{marginLeft: '-10px'}}>Số điện thoại</span>
              </div>
              <div id="ghinho" className="cart-items">
                    {Consumer.dataMemo.map(item => 
                          <div className="cart-row">
                          <div className="cart-item cart-column">
                            <img style={{ width :"100" ,height:"100"}} className="cart-item-image" src={item.Image} alt='none' />
                            <span className="cart-item-title">{item.Name}</span>
                          </div>
                          <span className="cart-price
                      cart-column">{item.hotline}</span>
                          <a href={`/chitiet/${item._id}`}><button type="submit" className="btn btn-remove">Chi tiết nhà hàng</button></a>
                          <div style={{marginLeft: '10px'}}>
                            <button className="btn btn-remove btnRemoveMemo" onClick={()=>Consumer.removeMemo(item._id)}>Xóa ghi nhớ này</button>
                          </div>
                        </div>
                      )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn
					btn-secondary close-footer" onClick={closeMemory}>Đóng</button>
                <form action="/removeall" method="POST">
                  <input className="btn btn-clearall" type="submit" defaultValue="Xóa toàn bộ ghi nhớ" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}