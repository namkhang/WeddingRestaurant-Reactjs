import React , {useState , useEffect} from 'react';


import '../Detailpost.css'
import Menu from '../menu/menu'
import Footer from '../footer/footer'


function Detailpost(props) {
    const [data , setData] = useState({})

    useEffect(()=>{
        console.log( props.match.params.id);
                fetch('http://localhost:3216/chitiet' , {method : 'POST' , headers : {
                        'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : props.match.params.id})
            })
            .then(res=>res.json())
            .then(data => setData(data))
    },[props.match.params.id])

    return (
        <div>
            <Menu  />
        <div className="chitiet">
          <ul className="breadcrumb">
            <li itemProp="itemListElement" itemScope itemType="https://">
              <a itemProp="item" href="/">Trang chủ / </a>
              <span itemProp="name">Chi tiết nhà hàng</span>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <div className="container-fluid ct-img">
          <div className="row">
            <div className="col-4">
              <ul className="row carousel-datail" style={{marginLeft: '-15px'}}>
                <li className="col-6"><img id="demo"  src={data.Image} alt='none' width="100%" /></li>
                <li className="col-6"><img id="demo" src={data.Image1} alt='none' width="100%" /></li>
                <li className="col-6"><img id="demo" src={data.Image2} alt='none' width="100%" /></li>
                <li className="col-6"><img id="demo" src={data.Image3} alt='none' width="100%" /></li>
                <li className="col-6"><img id="demo" src={data.Image4} alt='none' width="100%" /></li>
                <li className="col-6"><img id="demo" src={data.Image5} alt='none' width="100%" /></li>
              </ul>
            </div>
            <div className="col-8 img-main">
              <img className="img" src={data.Image} alt='none' width="102%" height={467} />
            </div>
          </div>
          <div className="row wap-top-detail">
            <div className="col-md-12 text-center tt-www">
              <h1>{data.Name}</h1>
              <p className="address-partner">
                <img src="https://pasgo.vn/Assets/Images/icon-maps-detail.png" alt="map" style={{marginTop: '-7px'}} />
                <span className="diachi">{data.Address}</span>
              </p>
            </div>	
            <div className="col-md-10 offset-1 gioithieu">
              <h2 className="text-center">Giới thiệu</h2>
              <p className="gt">{data.Description}</p>
            </div>
            <div className="col-12 text-center" style={{marginTop: '30px'}}>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Chọn khu vực
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button id="divisionA" className="dropdown-item" href="#">A</button>
                  <button id="divisionB" className="dropdown-item" href="#">B</button>
                </div>
              </div>
              <br />
              <span className="text-left" style={{fontSize: '20px', fontWeight: 700}}>Khoảng Giá :</span>  
              <span id="price" style={{fontSize: '20px'}}>{data.PriceMin} (VND/suất) - {data.PriceMax} (VND/suất)</span>
              <br />
              <br />
              <span className="text-left" style={{fontSize: '20px', fontWeight: 700}}>Thời gian trống :</span>
              <span style={{fontSize: '20px'}}> {data.TimeFree}</span>
              <br />
              <br />
              <span className="text-left" style={{fontSize: '20px', fontWeight: 700}}>Hotline :</span>
              <span style={{fontSize: '20px'}}> {data.hotline}</span>
              <br />
              <br />
              <span className="text-left" style={{fontSize: '20px', fontWeight: 700}}>Sức chứa :</span>
              <span id="capacity" style={{fontSize: '20px'}}>{data.Capacity} khách</span>
            </div>
            <div className="col-12 text-center">
              <div className="stars" style={{width: '420px'}}>
                <p className="danhgia" style={{fontSize: '20px', fontWeight: 600, paddingTop: '15px', marginBottom: '0px'}}>Mời bạn đánh giá</p>
                <div className="rati" style={{display: 'flex', marginTop: '10px'}}>
                  <span className="ranting" itemProp="ratingValue">5 sao: </span>  
                  <span className="ranting" itemProp="bestRating" style={{color: 'red', fontWeight: 'bold'}}>{data.rate5}</span> 
                  &nbsp;   &nbsp; 
                  <span className="ranting" itemProp="ratingValue">4 sao: </span> 
                  <span className="ranting" itemProp="bestRating" style={{color: 'red', fontWeight: 'bold'}}>{data.rate4}</span> 
                  &nbsp;   &nbsp; 
                  <span className="ranting" itemProp="ratingValue">3 sao: </span> 
                  <span className="ranting" itemProp="bestRating" style={{color: 'red', fontWeight: 'bold'}}>{data.rate3}</span> 
                  &nbsp;   &nbsp; 
                  <span className="ranting" itemProp="ratingValue">2 sao: </span> 
                  <span className="ranting" itemProp="bestRating" style={{color: 'red', fontWeight: 'bold'}}>{data.rate2}</span> 
                  &nbsp;   &nbsp; 
                  <span className="ranting" itemProp="ratingValue">1 sao: </span>
                  <span className="ranting" itemProp="bestRating" style={{color: 'red', fontWeight: 'bold'}}>{data.rate1}</span> 
                </div>
                  <div className="saoStart" style={{width: '420px', marginLeft: '-80px', marginTop: '10px'}}>
                    <input className="star star-5" id="star-5" type="radio" name="star" defaultValue={5} />
                    <label className="star star-5" htmlFor="star-5" />
                    <input className="star star-4" id="star-4" type="radio" name="star" defaultValue={4} />
                    <label className="star star-4" htmlFor="star-4" />
                    <input className="star star-3" id="star-3" type="radio" name="star" defaultValue={3} />
                    <label className="star star-3" htmlFor="star-3" />
                    <input className="star star-2" id="star-2" type="radio" name="star" defaultValue={2} />
                    <label className="star star-2" htmlFor="star-2" />
                    <input className="star star-1" id="star-1" type="radio" name="star" defaultValue={1} />
                    <label className="star star-1" htmlFor="star-1" />
                    <button type="submit"  style={{width: '175px', borderRadius: '15px', fontSize: '20px', fontWeight: 700, backgroundColor: '#2E5366', color: 'darksalmon', marginLeft: '200px'}}>Đánh giá</button>   
                  </div>    
              </div>
            </div>
        
 
            <a href="/">
              <div className style={{marginTop: '30px', marginLeft: '110px'}}>
                <button className="datcho" type="submit"  style={{marginLeft: '550px'}}>Đặt chỗ</button>
              </div>
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
  
    );
}

export default Detailpost;