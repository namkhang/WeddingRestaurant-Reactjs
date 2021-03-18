import React , { useState , useEffect ,useContext} from 'react'
/* import Cookie from 'js-cookie' */
import Context from '../../context/context'
import {useLocation} from 'react-router-dom'

import Menu from '../menu/menu'
import Footer from '../footer/footer'
import '../Home.css'
export default function Home(props){
        const [post, setPost] = useState([])
       let  query =  new URLSearchParams(useLocation().search);
       let page = query.get('page')
        const Consumer = useContext(Context)
        let nextPage = parseInt(page) + 1 || 2;
        let backPage =  parseInt(page) -1 || 1;

        useEffect(()=>{
     
          if(!page){
            fetch('http://localhost:3216/pagination' , {method : 'POST' , headers : {
              'Content-Type' : 'application/json'
         },
         credentials : 'include',
        body : JSON.stringify({page : 1})
      })
           .then(res=>res.json())
            .then(data => {
              if(data.message){
                window.location.href = '/login'
              }
              else{
                setPost(data)
              }
            })
          }
          else{
            fetch('http://localhost:3216/pagination' , {method : 'POST' , headers : {
              'Content-Type' : 'application/json'
         },
         credentials : 'include', // gửi kèm thèm cookie để sử dụng session trên server
           body : JSON.stringify({page :page})
      })
           .then(res=>res.json())
           .then(data => setPost(data))
          }
            //////////////////
             
          return ()=>{

          }
      
        },[page])

        function search(text){  // truyền hàm này vào props để component menu có thể sử dụng (hoặc có thể dùng Context)
          fetch('http://localhost:3216/searchforreactjs' , {method : 'POST' , headers : {
            'Content-Type' : 'application/json'
         },
             body : JSON.stringify({name : text})
            })
            .then(res => res.json())
            .then(data => setPost(data) )
        }

        function addMemory(item){
          return ()=>{
            Consumer.addToMemo(item); // high order funtion dùng để ngăn chặn việc truyền hàm chạy ngay lập tức 
          }


        }

       
              return (
                <div>
                    <Menu  search={search} />
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
                                  <div className="home-product-item__rating">
                                    <i className="home-product-item__star-gold fas fa-star" />
                                    <i className="home-product-item__star-gold fas fa-star" />
                                    <i className="home-product-item__star-gold fas fa-star" />
                                    <i className="home-product-item__star-gold fas fa-star-half-alt" />
                                    <i className="__star-gold fas fa-star-half-alt" />
                                  </div>
                                  <div className="home-product-item__text">
                                    <span  key={index + 5}>{item.avgrate}/5 {item.totalRate} </span>
                                  </div>
                                </div>
                                <div className="wapbooking">		
                                  <button className="disabled-booking btnMemory" type="submit"  onClick={addMemory(item)} style={{background: 'rgb(221, 221, 221)'}}>Ghi nhớ</button>
                                </div>
                              </div>
                           
                            )}
                             </div>
                </div>
                <div style={{marginLeft: '560px', marginBottom: '30px'}}>
                  <ul className="pagination">
                    <li className="page-item">				
                      <a href='/?page=1' className="page-link" >First</a>
                    </li>
                    <li className="page-item">
                      <a href={`/?page=${backPage}`} className="page-link" >Previous</a>
                    </li>
                    <li className="page-item">
                      <a href='/?page=1' className="page-link" >1</a>
                    </li>
                    <li className="page-item">
                      <a  href='/?page=2' className="page-link" >2</a>
                    </li>
                    <li className="page-item">
                      <a href='/?page=3'  className="page-link" >3</a>
                    </li>
                    <li className="page-item">
                      <a href='/?page=4' className="page-link" >4</a>
                    </li>
                    <li className="page-item">
                      <a href={`/?page=${nextPage}`} className="page-link" >Next</a>
                    </li>
                    <li className="page-item">
                      <a href='/?page=4' className="page-link" >Last</a>
                    </li>
                  </ul>
                </div>
              <Footer />
                </div>
            )
}