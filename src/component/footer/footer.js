import React from 'react'

export default function Footer(){
    return (
        <div className="container-fluid footer">
        <div className=" row footer-cha">
          <div className="col-3 footer-trai">
            <img width={207} src="/img/W.WR.png" alt="" className="logo" />
            <p className="text">NHÀ HÀNG TIỆC CƯỚI</p>
            <p className="diachi">254 Phan Thanh, P.Thạch Gían, Thanh Khê, Đà Nẵng</p>
          </div>	
          <div className="col-9 footer-phai">
            <div className="m1">
              <img className="img-icon" src="http://tieccuoicatkhanh.vn/wp-content/uploads/2017/icon/icon-f-fone.png" alt='none' />
              <p className="sub-m" style={{margin: '0px'}} />
              <p className="sub-m">ĐIỆN THOẠI</p>
              <p>0799 343 172</p>
            </div>
            <div className="m2">
              <img className="img-icon" src="http://tieccuoicatkhanh.vn/wp-content/uploads/2017/icon/icon-f-hotline.png" alt='none' />
              <p className="sub-m" style={{margin: '0px'}} />
              <p className="sub-m">HOTLINE</p>
              <p>0905234823</p>
            </div>
            <div className="m3">
              <img className="img-icon" src="http://tieccuoicatkhanh.vn/wp-content/uploads/2017/icon/icon-f-email.png" alt='none' />
              <p className="sub-m" style={{margin: '0px'}} />
              <p className="sub-m">GMAIL</p>
              <p>namkhangnguyendang@gmail.com</p>
            </div>
            <p>website: weddingrestaurant.vn - © Copyright 2012 - 2020 Duy Tan</p>
          </div>
        </div>
      </div>
    )
}