import React, { useEffect, useState } from 'react';
import '../../assets/css/style.css'
import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/css/checkout.css'
import '../Home.css'


import Menu from '../menu/menu'
import Footer from '../footer/footer'
import { useLocation } from 'react-router-dom';
import Cookie from 'js-cookie';

function CreateOrder(props) {
 const [data , setData] = useState({})
 const [voucher , setVoucher] = useState({})
 const [total , setTotal] = useState(0);
 const [totalPrice , setTotalPrice] = useState(0);
 const query = new URLSearchParams(useLocation().search)
    let idPost = query.get('idpost');
    let division = query.get('divison');

    useEffect(()=>{
                fetch('http://localhost:3216/createorderreact' , {method : 'POST' , headers : {
                        'Content-Type' : 'application/json'
                },
                body : JSON.stringify({idpost : idPost})
            })
            .then(res=>res.json())
            .then(data => setData(data))
    },[idPost])

    useEffect(()=>{
        fetch('http://localhost:3216/getvoucher' , {method : 'POST' , headers : {
            'Content-Type' : 'application/json'
    },
    body : JSON.stringify({idcus : Cookie.get('iduser')})
})
.then(res=>res.json())
.then(data => setVoucher(data))
    },[])    

        function TotalPrice(){
           let reduction  = parseInt(document.getElementById('redution').innerText);
           let total = parseInt(document.getElementById('price').value) * parseInt(document.getElementById('capacity').value);
           let reductionPrice = total * reduction / 100
           let totalPrice = total - reductionPrice ;
           setTotal(total)
           setTotalPrice(totalPrice)
        }

       function createOrder(){
         console.log(division);
         let dataCreate = {
              idcus : Cookie.get('iduser'),
              CustomerName : document.getElementById('fullname').value,
              CustomerEmail : document.getElementById('email').value,
              CustomerAddress : document.getElementById('address').value,
              CustomerPhone : document.getElementById('phone').value,
              Idvoucher : voucher._id,
              VoucherCode : voucher.VoucherCode,
              Redution : voucher.Reduction,
              Note : document.getElementById('note').value,
              CustomerPrice : document.getElementById('price').value, 
              CustomerCapacity : document.getElementById('capacity').value, 
              Idrestaurant : data._id,
              Division : division,
              NameRestaurant : data.Name,
              RestaurantAddress : data.Address,
              PriceTotal : document.getElementById('total').innerText,
              PricePay : document.getElementById('totalprice').innerText,

         }

            fetch('http://localhost:3216/createorderforreact' , {method : 'POST' , headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(dataCreate)
          })
          .then(res => res.json())
          .then(data => {
            if(data.message ==='Success'){
                window.location.href = 'myorder'
            }
            else{
              window.location.reload()
            }
          })
        }

    return (
        <div>
            <Menu />
               <div id="main-content-wp" className="checkout-page">
        <div className="section" id="breadcrumb-wp">
          <div className="wp-inner">
            <div className="section-detail">
              <ul className="list-item clearfix">
                <li><a href>Trang Chủ</a></li>
                <li><a href>Thanh Toán</a></li>
              </ul>
            </div>
          </div>
        </div>
          <div id="wrapper" className="wp-inner clearfix">
            <div className="section" id="customer-info-wp">
              <div className="section-head">
                <h1 className="section-title">THÔNG TIN
                  KHÁCH HÀNG</h1>
              </div>
              <div className="section-detail">
                <div className="form-row clearfix">
                  <div className="form-col fl-left">
                    <label htmlFor="fullname">Họ tên <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="CustomerName" id="fullname"  />
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                    <input type="email" name="CustomerEmail" id="email" />
                  </div>
                </div>
                <div className="form-row clearfix">
                  <div className="form-col fl-left">
                    <label htmlFor="address">Địa chỉ <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="CustomerAddress" id="address"  />
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="phone">Số điện
                      thoại <span style={{color: 'red'}}>*</span></label>
                    <input type="tel" name="CustomerPhone" id="phone"  />
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="price" style={{marginTop: '12px'}}>Gía/suất  <span style={{color: 'red'}}>*</span></label>
                    <input type="tel" name="CustomerPrice"  id="price" placeholder={division==='A'?`min : ${data.PriceMin} - max : ${data.PriceMax}`:`min : ${data.PriceMinB} - max : ${data.PriceMaxB}`} />
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="capacity" style={{marginTop: '12px'}}>Số chỗ đặt <span style={{color: 'red'}}>*</span></label>
                    <input type="tel" name="CustomerCapacity" onChange={TotalPrice} id="capacity" placeholder={division === 'A' ? `Sức chứa tối đa là ${data.Capacity} khách` : `Sức chứa tối đa là ${data.CapacityB} khách` } style={{width: '282px'}} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="notes">Ghi chú</label>
                    <textarea id='note' name="Note" placeholder="Nhập thời gian muốn đặt,cách trang trí ,..."  />
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="order-review-wp">
              <div className="section-head">
                <h1 className="section-title">THÔNG TIN NHÀ
                  HÀNG</h1>
              </div>
              <div className="section-detail">
                <table className="shop-table">
                  <thead>
                    <tr>
                      <td style={{fontWeight: 'bold'}}>Tên nhà hàng</td>
                      <td style={{textAlign: 'center', fontWeight: 'bold'}}>Địa chỉ </td>
                      <td style={{textAlign: 'center', fontWeight: 'bold'}}>Gía/suất</td>
                      <td style={{textAlign: 'center', fontWeight: 'bold'}}>Sức chứa tối đa</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart-item" style={{textAlign: 'center'}}>
                      <td id='nameres' className="product-name">{data.Name}
                      </td>
                      <td id='addressres' className="product-total" style={{textAlign: 'center'}}>
                        {data.Address}
                      </td>
                      <td className="product-total">
                        min : {division==='A'? data.PriceMin : data.PriceMinB} VND - max : {division==='A'? data.PriceMax : data.PriceMaxB} VND
                      </td>
                      <td className="product-total">
                       {division ==='A' ? data.Capacity : data.CapacityB}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="order-total">
                      <td style={{width: '100px'}}>Tổng tiền
                      </td>
                      <td><strong id='total' className="product-total">
                        {total}  VND</strong></td>
                    </tr>
                    <tr className="order-total">
                      <td style={{width: '100px'}}>Voucher
                      </td>
                      <td><strong className="product-total"><span id="vouchercodesp">{voucher.VoucherCode}</span> 
                        </strong></td>
                    </tr>
                    <tr className="order-total">
                      <td style={{width: '120px'}}>Chiết khấu
                      </td>
                      <td><strong className="product-total"><span id="redution">{voucher.Reduction}</span> %
                        </strong></td>
                    </tr>
                    <tr className="order-total">
                      <td style={{width: '100px'}}>Tổng tiền cần thanh toán
                      </td>
                      <td><strong id='totalprice' className="product-total"><span  />
                        {totalPrice}  VND</strong></td>
                    </tr>
                  </tfoot>
                </table>
                <div id="payment-checkout-wp">
                </div>
                <div className="place-order-wp">
                  <input onClick={createOrder} type="submit" id="order-now" />
                </div>
              </div>
            </div>
          </div>
   
      </div>
      <Footer />
        </div>
    );
}

export default CreateOrder;