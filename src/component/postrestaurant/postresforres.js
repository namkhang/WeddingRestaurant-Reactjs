import React, { useEffect, useState } from 'react';
import '../Homeforres.css'
import Menures from '../menu/menuforres'
import Footer from '../footer/footer'
import Axios from 'axios'
import {useLocation} from 'react-router-dom'

function Postresforres() {
    const query = new URLSearchParams(useLocation().search)
    const [post , setPost] = useState([])
    const [login , setLogin] = useState(true)
    const page = query.get('page');
    let backPage = parseInt(page) -1 || 2
    let nextPage = parseInt(page) + 1 || 1

    useEffect(()=>{
          async function fetchData(){
              let respone = await Axios.post('http://localhost:3216/restaurant/checkloginres');
              setLogin(respone.data.login)
          }
          fetchData()
    },[])

    useEffect(()=>{
            async function fetchData(){
                if(!page){
                    let respone = await Axios.post('http://localhost:3216/restaurant/pagination' , {page : 1});
                    setPost(respone.data)
                   
            }
            else{
                let respone = await Axios.post('http://localhost:3216/restaurant/pagination' , {page : page});
                setPost(respone.data)
            }
        
        }
            fetchData()
    },[page])

    function search(text){
          async function fetchData(){
                let respone = await Axios.post('http://localhost:3216/searchforreactjs' , {name : text});
                 setPost(respone.data)
           }
           fetchData()
    }

      if(login === true){
    return (
        <div>
        <Menures search={search} />
    <div className="banner" style={{marginBottom : '20px'}}>
      <div id="carouselExampleIndicators" className="carousel slide" style={{width: '100%'}} data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          <li data-target="#carouselExampleIndicators" data-slide-to={4} />
        </ol>
        <div className="carousel-inner" style={{width: '100%'}}>
          <div className="carousel-item active" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <img src="/imageforlogin.jpg" className="d-block w-100 img-fluid" alt="first" />
          </div>
          <div className="carousel-item" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <img src="/imageforreg.jpg" className="d-block w-100 img-fluid" alt="second" />
          </div>
          <div className="carousel-item" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <img src="/Marrott HN ngoài trời.jpg" className="d-block w-100 img-fluid" alt="third" />
          </div>
          <div className="carousel-item" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <img src="/i3.1.jpg" className="d-block w-100 img-fluid" alt="third" />
          </div>
          <div className="carousel-item" style={{width: '100%', height: '100%', overflow: 'hidden'}}>
            <img src="/Phòng đại tiệc Sông Hồng.jpg" className="d-block w-100 img-fluid" alt="third" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="dropdown" style={{left: '1180px', width: '185px', marginBottom: '20px'}}>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sắp xếp theo
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/">Cũ nhất</a>
        <a className="dropdown-item" href="/?sorttype=new">Mới nhất</a>
        <a className="dropdown-item" href="/?sorttype=rate">Đánh giá tốt nhất</a>
      </div>
    </div>
    {/* <!- phần giữa start */}	
    <div className="container banner">
         <div className="row" id="row">
            {post.map((item,index) => 
               
                  <div className="col-3 banner-item">
                    <div className="wapitem">
                      <a  key={index + 6} className="waptop" href={`/chitiet/${item._id}`}>
                        <img key={index + 1} className="img-item" src={item.Image} alt="#" />
                      </a>
                      <div className="wapfooter">
                        <a  key={index + 2} href={`/chitiet/${item._id}`}>{item.Name}</a>
                        <p  key={index + 3} className="text-address notranslate">{item.Address}</p>
                        <p  key={index + 4} className="text-money notranslate">{item.hotline}</p>
                      </div>
                    {item.avgrate > 4.7 && item.avgrate <= 5.0 ? 
                    <div class="home-product-item__rating">
                    <i class="home-product-item__star-gold fas fa-star"></i>
                    <i class="home-product-item__star-gold fas fa-star"></i>
                    <i class="home-product-item__star-gold fas fa-star"></i>
                    <i class="home-product-item__star-gold fas fa-star"></i>
                    <i class="home-product-item__star-gold fas fa-star"></i>
                  </div> : 
                      item.avgrate > 4.35 && item.avgrate <= 4.65 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate > 3.7 && item.avgrate <= 4.35 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate > 3.35 && item.avgrate <= 3.7 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate >  2.7 && item.avgrate <= 3.35 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                       item.avgrate > 2.35 && item.avgrate <= 2.7 ? 
                       <div class="home-product-item__rating">
                       <i class="home-product-item__star-gold fas fa-star"></i>
                       <i class="home-product-item__star-gold fas fa-star"></i>
                       <i class="home-product-item__star-gold fas fa-star-half-alt"></i>
                       <i class="__star-gold fas fa-star-half-alt"></i>
                       <i class="__star-gold fas fa-star-half-alt"></i>
                     </div> : 
                      item.avgrate > 1.7 && item.avgrate <= 2.35 ?
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate > 1.35 && item.avgrate <= 1.7 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="home-product-item__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate > 0.7 && item.avgrate <= 1.35 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                      item.avgrate > 0.35 && item.avgrate <= 0.7 ? 
                      <div class="home-product-item__rating">
                      <i class="home-product-item__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                      <i class="__star-gold fas fa-star-half-alt"></i>
                    </div> : 
                     <div class="home-product-item__rating">
                     <i class="__star-gold fas fa-star-half-alt"></i>
                     <i class="__star-gold fas fa-star-half-alt"></i>
                     <i class="__star-gold fas fa-star-half-alt"></i>
                     <i class="__star-gold fas fa-star-half-alt"></i>
                     <i class="__star-gold fas fa-star-half-alt"></i>
                   </div>
                     }
                      <div className="home-product-item__text">
                        <span  key={index + 5}>{item.avgrate}/5 {item.totalRate} </span>
                      </div>
                    </div>
                  </div>
               
                )}
                 </div>
    </div>
    <div style={{marginLeft: '560px', marginBottom: '30px'}}>
      <ul className="pagination">
        <li className="page-item">				
          <a href='/restaurant/homeforres?page=1' className="page-link" >First</a>
        </li>
        <li className="page-item">
          <a href={`/restaurant/homeforres?page=${backPage}`} className="page-link" >Previous</a>
        </li>
        <li className="page-item">
          <a href='/restaurant/homeforres?page=1' className="page-link" >1</a>
        </li>
        <li className="page-item">
          <a  href='/restaurant/homeforres?page=2' className="page-link" >2</a>
        </li>
        <li className="page-item">
          <a href='/restaurant/homeforres?page=3'  className="page-link" >3</a>
        </li>
        <li className="page-item">
          <a href='/restaurant/homeforres?page=4' className="page-link" >4</a>
        </li>
        <li className="page-item">
          <a href={`/restaurant/homeforres?page=${nextPage}`} className="page-link" >Next</a>
        </li>
        <li className="page-item">
          <a href='/restaurant/homeforres?page=4' className="page-link" >Last</a>
        </li>
      </ul>
    </div>
  <Footer />
    </div>
    );
                    }
                    else{
                      window.location.href = '/restaurant/loginforres'
                    }
}

export default Postresforres;