import React, { useEffect, useState } from 'react'

import MenuforRes from '../menu/menuforres'
import Footer from '../footer/footer'
import '../Post.css'
import axios from 'axios'
import Cookies from 'js-cookie'

function Createpost(){
      const[post,setPost] = useState({});
   useEffect(()=>{
     async function getData(){
      let respone =await axios.get(`http://localhost:3216/restaurant/checkpost/${Cookies.get('idres')}`);
      setPost(respone.data);
     }
      getData();
      
       
   },[])

   async function Post(){
        let formData = new FormData();
        formData.append('image' ,document.getElementById('image1').files[0])
        formData.append('image' ,document.getElementById('image2').files[0])
        formData.append('image' ,document.getElementById('image3').files[0])
        formData.append('image' ,document.getElementById('image4').files[0])
        formData.append('image' ,document.getElementById('image5').files[0])
        formData.append('image' ,document.getElementById('image6').files[0])
        formData.append('Name' ,document.getElementById('Name').value)
        formData.append('Idrestaurant' ,Cookies.get('idres'))
        formData.append('Address' ,document.getElementById('Address').value)
        formData.append('hotline' ,document.getElementById('hotline').value)
        formData.append('TimeFree' ,document.getElementById('TimeFree').value)
        formData.append('min' ,document.getElementById('min').value)
        formData.append('max' ,document.getElementById('max').value)
        formData.append('minB' ,document.getElementById('minB').value)
        formData.append('maxB' ,document.getElementById('maxB').value)
        formData.append('Capacity' ,document.getElementById('Capacity').value)
        formData.append('CapacityB' ,document.getElementById('CapacityB').value)
        formData.append('mota' ,document.getElementById('mota').value)
        
      let respone =  await axios.post('http://localhost:3216/postforres' ,formData);
      console.log(respone.data);
    }

return (
    <div>
        <MenuforRes />
        {post ?  <h6 style={{color : 'red' , marginLeft : '500px' , marginTop : '187px' , marginBottom : '200px'}}>Nhà hàng của bạn đã đăng bài rồi vui lòng
        không đăng bài thêm nữa</h6> : 
        <div className="container">
        <div className="row">
          <div style={{marginLeft: '550px', color: 'red', fontSize: '18px', fontWeight: 500, listStyle: 'none', marginBottom: '16px'}}>
          </div>
          <div className="col-6 offset-3 content-NH">
            <h2 className="col-12 text-center">Đăng bài</h2>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Tên nhà hàng</label>
                <input className="col-9 tenNH" id='Name' type="text" name="Name" placeholder="Tên nhà hàng" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Địa chỉ</label>
                <input className="col-9 tenNH" type="text" id="Address" name="Address" placeholder="Địa chỉ" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Số điện thoại</label>
                <input className="col-9 tenNH" type="text" id="hotline" name="hotline" placeholder="Số điện thoại" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Thời gian trống</label>
                <input className="col-9 tenNH" type="text" id="TimeFree" name="TimeFree" placeholder="Thời gian trống" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Đơn giá (A)</label>
                <div className="col-9 dongia">
                  <div className="row">
                    <label className="col-2 nameMin">Min</label>
                    <input className="col-3 dmin" type="text" id="min" name="PriceMin" />
                    <label className="col-2 text-center">-</label>
                    <label className="col-2 nameMin">Max</label>
                    <input className="col-3 dmin" type="text" id="max" name="PriceMax" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Sức chứa (A)</label>
                <input className="col-4 dmin" type="text" id="Capacity" name="Capacity" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Đơn giá (B)</label>
                <div className="col-9 dongia">
                  <div className="row">
                    <label className="col-2 nameMin">Min</label>
                    <input className="col-3 dmin" type="text" id="minB" name="PriceMinB" placeholder="Nhập 0 nếu không có" />
                    <label className="col-2 text-center">-</label>
                    <label className="col-2 nameMin">Max</label>
                    <input className="col-3 dmin" type="text" id="maxB" name="PriceMaxB" placeholder="Nhập 0 nếu không có" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label className="col-3 name">Sức chứa (B)</label>
                <input className="col-4 dmin" type="text" id="CapacityB" name="CapacityB" placeholder="Nhập 0 nếu không có" />
              </div>
            </div>
            <div className="col-12 nhaHang">
              <div className="row">
                <label htmlFor="mota" className="col-3 name">Mô tả</label>
                <textarea className="col-9 motaNH" id="mota" name="Description" rows={4} cols={50} style={{height: '200px'}} defaultValue={"                    "} />
              </div>
            </div>
          </div>
          {/* upload img */}
          <div className="col-10 offset-1 file-upload">
            <button className="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Image</button>
            <div className="row imgNH">
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image1' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image2' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image3' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image4' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image5' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
              <div className="col-4 image-upload-wrap">
                <input className="file-upload-input" id='image6' name="image" type="file" accept="image/*" />
                <div className="drag-text">
                  <h3>add Image</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <input onClick={Post} className="datcho" type="submit" defaultValue="Đăng bài" />
        </div>
      </div>
      }
        <Footer />
    </div>
)
}
export default Createpost;