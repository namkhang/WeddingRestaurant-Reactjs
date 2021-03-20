import React , {useState , useEffect} from 'react'
import Cookie from 'js-cookie'
import StripeCheckout from 'react-stripe-checkout'
import '../../assets/css/style.css'
import '../../assets/carousel/owl.theme.default.min.css'
import '../../assets/font-awesome/css/font-awesome.min.css'
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/fonts.css'

import Menu from '../menu/menu'
import Footer from '../footer/footer'


export default function Myorder (){
        const [dataorder , setDataorder] = useState([])
        const [login , setLogin] = useState(true)

        useEffect(()=>{
          fetch('http://localhost:3216/checkloginforreact' , {method : 'POST' , credentials : 'include' })
          .then(res=>res.json())
          .then(data => setLogin(data.login)
    )
    },[])

    useEffect(()=>{

            fetch('http://localhost:3216/myorderforreact' , {method : 'POST' , headers :{
                        'Content-Type' : 'application/json'
            },
            body : JSON.stringify({idcus : Cookie.get('iduser')})
        })
        .then(res => res.json())
        .then(data => setDataorder(data))
    },[])



        function onToken(price){
                return (token) =>{
                    let data = {price : price/25000*100 , stripeTokenId : token.id}
                    fetch('http://localhost:3216/payment' , {method : 'POST' , headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => alert(data.message))
                }
          
    }

    if(login === true){
    return (
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
                    <th style={{textAlign: 'center'}} scope="col">Khách hàng</th>
                    <th style={{textAlign: 'center'}} scope="col">Phone </th>
                    <th style={{textAlign: 'center'}} scope="col">Nhà hàng</th>
                    <th style={{textAlign: 'center'}} scope="col">Địa chỉ nhà hàng</th>
                    <th style={{textAlign: 'center'}} scope="col">Khu vực</th>
                    <th style={{textAlign: 'center'}} scope="col">Voucher</th>
                    <th style={{textAlign: 'center'}} scope="col">Giá tiền phải trả</th>
                    <th style={{textAlign: 'center'}} scope="col">Trạng thái</th>
                    <th style={{textAlign: 'center'}} scope="col">Time</th>
                    <th style={{textAlign: 'center'}} scope="col">Ghi chú</th>
                    <th style={{textAlign: 'center'}} scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                    {dataorder.map(i => 
                                 <tr>
                                 <td>
                                  {i.CustomerName}
                                 </td>
                                 <td>
                                 {i.CustomerPhone}
                                 </td>
                                 <td>
                                   <a href={`/chitiet/${i.Idrestaurant}`}>{i.NameRestaurant}</a>
                                 </td>
                                 <td>
                                 {i.RestaurantAddress}
                                 </td>
                                 <td>
                                 {i.Division}
                                 </td>
                                 <td>  {i.VoucherCode}  ({i.Redution}%) </td>
                                 <td><span id="pricepay">{i.PricePay}</span>  <span style={{marginLeft: '20px'}}>VND</span></td>
                                 <td><span className="badge badge-warning" style={{color: 'red', backgroundColor: 'whitesmoke', fontSize: 'small'}}>  {i.Orderstatus}</span></td>
                                 <td>  {i.Timeorder}</td>
                                 <td style={{width: '100px'}}>{i.Note}</td>
                                 <StripeCheckout 
                                    token={onToken(i.PricePay)}
                                    stripeKey = 'pk_test_51IEuuFE5tUNZ5fWU8JPgPbxIFWtzNjdXXAPJIYo5v0FLBdYjtJEXk0xyOoNP21qr5K5wSPsXQIpWp0AXzKk6cYmD00LrYN5j6R'
                                    amount = {parseInt(i.PricePay)/25000 * 100}
                                />
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
          else{
            window.location.href = '/login'
          }
}