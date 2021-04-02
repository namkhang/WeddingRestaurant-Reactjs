import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Axios from 'axios'


import '../../assets/css/style.css'
import '../../assets/carousel/owl.theme.default.min.css'
import '../../assets/font-awesome/css/font-awesome.min.css'
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/fonts.css'

import Menu from '../menu/menuforres'
import Footer from '../footer/footer'


function MyOrderForRes(){
    let id = Cookies.get('idres');
    const[myorder , setMyorder] = useState([]);


    useEffect(()=>{
           async function fetchData(){
                    let respone = await Axios.get('http://localhost:3216/restaurant/myorderforesreact' , {params : {id : id}});
                    setMyorder(respone.data)
            }
            fetchData()
    },[id])

    function acceptOrder(idorder){
                return async () =>{
                    let respone = await Axios.put('http://localhost:3216/restaurant/acceptordereact' , {idoder : idorder ,idres : id });
                    setMyorder(respone.data)
                }
    }
    function removeOrder(idorder){
        return async () =>{
            let respone = await Axios.put('http://localhost:3216/restaurant/removeordereact' , {idoder : idorder ,idres : id });
            setMyorder(respone.data)
        }
}

    return(
        <div>
        <Menu />
        <main className="main-container" style={{width: '1300px'}}>
        <div className="row" style={{width: '100%'}}>
          <div className="col col-lg-10 col-md-12 col-sm-12 col-12">
            <h3 className="p-3">Danh sách đơn hàng</h3>
            <div className="info_orders">
              <table className="table table-striped" style={{width: '1300px'}}>
                <thead>
                  <tr>
                    <th style={{textAlign: 'center'}} scope="col">Mã khách hàng</th>
                    <th style={{textAlign: 'center'}} scope="col">Nhà hàng</th>
                    <th style={{textAlign: 'center'}} scope="col">Khu vực</th>
                    <th style={{textAlign: 'center'}} scope="col">Giá tiền</th>
                    <th style={{textAlign: 'center'}} scope="col">Voucher</th>
                    <th style={{textAlign: 'center'}} scope="col">Giá tiền sau khi giảm</th>
                    <th style={{textAlign: 'center'}} scope="col">Trạng thái</th>
                    <th style={{textAlign: 'center'}} scope="col">Time</th>
                    <th style={{textAlign: 'center'}} scope="col">Ghi chú</th>
                    <th style={{textAlign: 'center'}} scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                 {myorder.map(i => 
                  <tr>
                  <td>
                    <a href="/restaurant">{i.IdCustomer}</a>
                  </td>
                  <td>
                  {i.NameRestaurant}
                  </td>
                  <td>
                  {i.Division}
                  </td>
                  <td>{i.PriceTotal}<span style={{marginLeft: '20px'}}>VND</span> </td>
                  <td>{i.VoucherCode} ({i.Redution}%) </td>
                  <td>{i.PricePay} <span style={{marginLeft: '20px'}}>VND</span></td>
                  <td><span className="badge badge-warning" style={{color: 'red', backgroundColor: 'whitesmoke', fontSize: 'small'}}>{i.Orderstatus}</span></td>
                  <td>{i.Timeorder}</td>
                  <td style={{width: '100px'}}> {i.Note} </td>
                  <td>
                    <button onClick={acceptOrder(i._id)} type="submit" className="btn btn-success btn-sm rounded-0 text-white"  data-toggle="tooltip" data-placement="top" style={{width: '40px'}}><i className="fas fa-check-square" /></button>
                    <button onClick={removeOrder(i._id)} type="submit" className="btn btn-danger btn-sm rounded-0 text-white" data-toggle="tooltip" data-placement="top" style={{width: '40px'}}><i className="fas fa-trash-alt" /></button>
                  </td>
                </tr>   
                    )}
                </tbody>
              </table>
            </div>
          </div>             
        </div>
      </main>
      <Footer />
      </div>
    )
}

export default MyOrderForRes;