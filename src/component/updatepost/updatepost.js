import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import '../Post.css'
import MenuforRes from '../menu/menuforres'
import Footer from '../footer/footer'


function UpdatePost(){
        const [post , setPost] = useState({});

        async function Delete(){
            let respone = await axios.delete(`http://localhost:3216/restaurant/deletepost/${post._id}`);
            console.log(respone);
            if(respone.data.message){
                window.location.reload();
            }
        }

      async function Update(){
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
                let respone = await axios.put(`http://localhost:3216/updatepostforres/${Cookies.get('idres')}` , formData);
                if(respone.data){
                    alert('Success')
                    setPost(respone.data);

                 }
                
         

        }


        useEffect(()=>{
            async function getData(){
                let respone = await axios.get(`http://localhost:3216/restaurant/checkpost/${Cookies.get('idres')}`);
                setPost(respone.data)
            }
            getData()
        },[])

    return(
        <div>
            <MenuforRes />
            {post ? 
              <div className="container">
          <div className="row">
            <div className="col-6 offset-3 content-NH">
              <h2 className="col-12 text-center">C???p nh???t b??i ????ng</h2>
              <div className="col-12 nhaHang ">
                <div className="row">
                  <label className="col-3 name">T??n nh?? h??ng</label>
                  <input className="col-9 tenNH" type="text" id='Name' name="Name" placeholder="T??n nh?? h??ng" defaultValue={post.Name} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">?????a ch???</label>
                  <input className="col-9 tenNH" type="text" id='Address' name="Address" placeholder="?????a ch???"  defaultValue={post.Address} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">S??? ??i???n tho???i</label>
                  <input className="col-9 tenNH" type="text" id='hotline' name="hotline" placeholder="S??? ??i???n tho???i" defaultValue={post.hotline} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">Th???i gian tr???ng</label>
                  <input className="col-9 tenNH" type="text" id='TimeFree' name="TimeFree" placeholder="Th???i gian tr???ng" defaultValue={post.TimeFree} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">????n gi?? (A)</label>
                  <div className="col-9 dongia">
                    <div className="row">
                      <label className="col-2 nameMin">Min</label>
                      <input className="col-3 dmin" type="text" id="min" name="PriceMin" defaultValue={post.PriceMin} />
                      <label className="col-2 text-center">-</label>
                      <label className="col-2 nameMin">Max</label>
                      <input className="col-3 dmin" type="text" id="max" name="PriceMax" defaultValue={post.PriceMax} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">S???c ch???a (A)</label>
                  <input className="col-4 dmin" type="text" id="Capacity" name="Capacity" defaultValue={post.Capacity} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">????n gi?? (B)</label>
                  <div className="col-9 dongia">
                    <div className="row">
                      <label className="col-2 nameMin">Min</label>
                      <input className="col-3 dmin" type="text" id="minB" name="PriceMinB" defaultValue={post.PriceMinB} />
                      <label className="col-2 text-center">-</label>
                      <label className="col-2 nameMin">Max</label>
                      <input className="col-3 dmin" type="text" id="maxB" name="PriceMaxB" defaultValue={post.PriceMaxB} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label className="col-3 name">S???c ch???a (B)</label>
                  <input className="col-4 dmin" type="text" id="CapacityB" name="CapacityB" defaultValue={post.CapacityB} />
                </div>
              </div>
              <div className="col-12 nhaHang">
                <div className="row">
                  <label htmlFor="mota" className="col-3 name">M?? t???</label>
                  <textarea className="col-9 motaNH" id="mota" name="Description" rows={4} cols={50} style={{height: '200px'}} defaultValue={post.Description} />
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 file-upload">
              <button className="file-upload-btn" type="button" >Add Image</button>
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
          <input onClick={Update} className="datcho" type="submit" value="Upadate"  />
          <div className="col-12 text-center" >
          <input onClick={Delete} className="datcho" type="submit" value="Delete" />
        </div>
        </div>  :
         <h6 style={{color : 'red' , marginLeft : '500px' , marginTop : '187px' , marginBottom : '200px'}}>Nh?? h??ng c???a b???n ???? ????ng b??i r???i vui l??ng kh??ng ????ng b??i th??m n???a</h6>  
}
        <Footer />

      </div>
    
    )
}


export default UpdatePost;