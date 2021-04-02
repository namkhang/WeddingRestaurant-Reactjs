import React from 'react';
import Axios from 'axios'
import Cookies from 'js-cookie';


function Menuforres(props) {

  function Search(){
        props.search(document.getElementById('search').value)
  }

    function logOut(){
       async function fetchData(){
            let respone = await Axios.post('http://localhost:3216/restaurant/logoutres');
            if(respone.data.message){
              Cookies.remove('idres')
              Cookies.remove('nameres')
              window.location.reload()
            }
        }
        fetchData()
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid"> 
          <img alt='none' src="/W.WR.png" style={{width: '70px', height: '60px', marginRight: '5px'}} /><a className="navbar-brand"  href="/restaurant/homeforres">Wedding Restaurant</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <form className="form-inline my-2 my-lg-0" action="/restaurant/search" method="GET">
            <input id='search' onKeyUp={Search} className="form-control mr-sm-3" type="search" placeholder="Tìm kiếm" aria-label="Search" name="q" style={{width: '250px'}} />
            <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
          </form>
          {/* COL-AUTO START  */}
          <div className="ml-auto">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/restaurant/homeforres">Trang chủ</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/restaurant/news">Tin tức</a>
                </li>	  
                <li className="nav-item active">
                  <a className="nav-link" href="/restaurant/policy">Chính sách</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/restaurant/listchatforres">Tin nhắn</a>
                </li>
              </ul>
              <li className="lneWsb"> 
                <i className="fa fa-user-circle" aria-hidden="true" />
                <span className="cbYxcp">Nam Khang</span>
                <ul className="sub-menu">
                  <li>
                    <a className="name-li" href="/restaurant/post">
                      Đăng bài
                    </a>
                  </li>
                  <li>
                    <a className="name-li" href="/restaurant/updatepost">
                      Cập nhật bài đăng
                    </a>
                  </li>
                  <li>
                    <a className="name-li" href="/restaurant/myorder">
                      Đơn hàng của tôi
                    </a>
                  </li>
                  <li>
                    <a className="name-li" href="/restaurant/updatepass">
                      Đổi mật khẩu
                    </a>
                  </li>
                  <li>
                    <button type='button' className="name-li" onClick={logOut}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
            </div>
          </div>
          {/* COL-AUTO END */}
        </div>
      </nav>
    );
}

export default Menuforres;