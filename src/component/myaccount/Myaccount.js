import React, { useEffect, useState } from 'react';
import Menu from '../menu/menu'
import Footer from '../footer/footer'
import '../Myaccount.css'
import Cookies from 'js-cookie';

function Myaccount(props) {
    const [dataAccount , setDataAccount] = useState({});
    const [image , setImage] = useState('');
    const [gender , setGender] = useState('');
    const [login,setLogin] = useState(true)

    useEffect(()=>{
      fetch('http://localhost:3216/checkloginforreact' , {method : 'POST' , credentials : 'include' })
      .then(res=>res.json())
      .then(data => setLogin(data.login)
)
},[])

    useEffect(()=>{
            fetch('http://localhost:3216/informationreact' , {method : 'POST' , headers : {
                    'Content-Type' : 'application/json'
            },
            body : JSON.stringify({idcus : Cookies.get('iduser')})
        })
        .then(res => res.json())
        .then(data => {
            setDataAccount(data);
            setImage(data.image)
            setGender(data.gender)
        })
    },[])

    useEffect(()=>{
      let typeFile = document.getElementsByClassName('icon-name');
          for(let i = 0 ; i< typeFile.length ; i++){
                  typeFile[i].onclick = ()=>{
                      setGender(typeFile[i].value)
                  }
          }
    },[])

    function uploadimage(event){
                let image = URL.createObjectURL(event.target.files[0])
                setImage(image)
    }

    function Save(){
        let formData = new FormData();
        let fileupload = document.getElementById('fileupload')
        formData.append('image' , fileupload.files[0])
        formData.append('idcus' ,  Cookies.get('iduser'))
        formData.append('fullname' , document.getElementById('fullname').value,)
        formData.append('address' ,  document.getElementById('address').value,)
        formData.append('phone' , document.getElementById('phone').value,)
        formData.append('gender' ,  gender)
        formData.append('day' , document.getElementById('day').value,)
        formData.append('month' , document.getElementById('month').value,)
        formData.append('year' , document.getElementById('year').value,)

            fetch('http://localhost:3216/saveinformationreact' , {method:'POST' ,
              
            body :formData
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.message === 'Success'){
            window.location.reload();
          }
        })
    }

    if(login === true){
    return (
        <div>
            <Menu />
             <div className="container-fluid hosome">
        <div className="row">
          <div className="col-2 hosocuatoi">
            <div className="hoso">
              <a className="icon-user" href='/myaccount'><p className="nameuser">{dataAccount.fullname}</p></a>
    
            </div>
            <div className="tkcuatoi">
              <ul className="tkct">				
                <a className="taikhoan" href='/'>
                  <i className="fa fa-user-circle" aria-hidden="true"> </i>
                  <p>T??i Kho???n C???a T??i</p>
                </a>			
                <li><a href="/information">H??? S??</a></li>	
                <li><a href="/updatepass">?????i M???t Kh???u</a></li>
              </ul>
              <div className="donmua">
                <a className="taikhoan" href="/myorder">
                  <i className="fa fa-book xanh" aria-hidden="true" />
                  <p>????n Mua</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-10 qlhoso">
            <div className="quanly">
              <p className="hsct">H??? S?? C???a T??i</p>
              <p className="tenql">Qu???n l?? th??ng tin h??? s?? ????? b???o m???t t??i kho???n</p>
            </div>
            <div className="row">
              <div className="col-8">					
                <div className="formtt">
                  <div className="form-dn">
                    <label className="input-label">H??? v?? t??n</label>
                    <div>
                      <input id='fullname'  type="text" name="fullname" value={dataAccount.fullname} />
                    </div>
                  </div>
                  <div className="form-dn">
                    <label className="input-label">S??? ??i???n Tho???i</label>
                    <input id='phone' type="text" name="phone" value={dataAccount.phone}  />
                  </div>  
                  <div className="form-dn">
                    <label className="input-label">?????a ch???</label>
                    <input id='address' type="text" name="address" value={dataAccount.address} />
                  </div>  
                  <div className="form-dn">
                    <label className="input-label">Gi???i T??nh</label>
                    <label className="Radio-gt">
                    {gender==='Nam' ? <input  className="icon-name" type="radio" name="gender" value="Nam" checked />  : <input  className="icon-name" type="radio" name="gender" value="Nam" /> } 
                      <span className="radio-fake" />
                      <span className="label">Nam</span>
                    </label>
                    <label className="Radio-gt">
                    {gender==='N???' ? <input  className="icon-name" type="radio" name="gender" value="N???" checked />  : <input  className="icon-name" type="radio" name="gender" value="N???" /> } 
                      <span className="radio-fake" />
                      <span className="label">N???</span>
                    </label>
                    <label className="Radio-gt">
                    {gender==='Kh??c' ? <input  className="icon-name" type="radio" name="gender" value="Kh??c" checked />  : <input  className="icon-name" type="radio" name="gender" value="Kh??c" /> } 
                      <span className="radio-fake" />
                      <span className="label">Kh??c</span>
                    </label>
                  </div>
                  <div className="form-dn">
                    <label className="input-label">Ng??y Sinh</label>
                    <div className="style-ns">
                      <select id='day' name="day">
                        <option value={0}>Ng??y</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                      </select>
                      <select id='month' name="month">
                        <option value={0}>Th??ng</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                      </select>
                      <select id='year'  name="year">
                        <option value={0}>N??m</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                        <option value={2009}>2009</option>
                        <option value={2008}>2008</option>
                        <option value={2007}>2007</option>
                        <option value={2006}>2006</option>
                        <option value={2005}>2005</option>
                        <option value={2004}>2004</option>
                        <option value={2003}>2003</option>
                        <option value={2002}>2002</option>
                        <option value={2001}>2001</option>
                        <option value={2000}>2000</option>
                        <option value={1999}>1999</option>
                        <option value={1998}>1998</option>
                        <option value={1997}>1997</option>
                        <option value={1996}>1996</option>
                        <option value={1995}>1995</option>
                        <option value={1994}>1994</option>
                        <option value={1993}>1993</option>
                        <option value={1992}>1992</option>
                        <option value={1991}>1991</option>
                        <option value={1990}>1990</option>
                        <option value={1989}>1989</option>
                        <option value={1988}>1988</option>
                        <option value={1987}>1987</option>
                        <option value={1986}>1986</option>
                        <option value={1985}>1985</option>
                        <option value={1984}>1984</option>
                        <option value={1983}>1983</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-dn">
                    <button type="submit" className="btn-submit" onClick={Save}>L??u</button>
                  </div>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="formtt anhuser">
                  <img id="image" src={image} alt='none' width="150px" height="150px" style={{borderRadius: '75px', marginBottom: '20px'}} />
                  <input id="fileupload" type="file" onChange={uploadimage} name="image" className="chonanh" />
                  <label>Dung l?????ng file t???i ??a 1MB</label>
                  <label>?????nh d???ng:.JPEG, .PNG</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
        </div>
    );
    }
    else{
      window.location.href = '/login'
    }
}

export default Myaccount;