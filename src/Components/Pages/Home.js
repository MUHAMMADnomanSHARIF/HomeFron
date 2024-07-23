import React from 'react'
import { useState , useEffect } from 'react'
import {   useNavigate, } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
const Home = () => {

  const nevigate=useNavigate()
 
  useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          if (userData.role === 'user') {
            nevigate('/');
          }
        }
      }, [nevigate]);
   
const reviews = [
  {
    name: "Samantha Clark",
    review: "Best online store in the UK. I have been shopping from here for the last few years, and it will continue in future",
    time: "Yanky, 1 day ago",
  },
  {
    name: "Danial Victory",
    review: "The best experience I have ever faced. All the staff is cooperative, and they replied to my enquiry within no time.",
    time: "Yanky, 1 day ago",
  },
  {
    name: "Sara Walser",
    review: "I have purchased many daily-use items from Home Essentials Hive, the staff is cooperative, and they offer products at the best price.",
    time: "Yanky, 1 day ago",
  },
  {
    name: "Kathrin",
    review: "The customer care service was excellent. They helped me choose the perfect product and listened to all the instructions carefully.",
    time: "Yanky, 1 day ago",
  },
];


  return (
    <>
    <Navbar/>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Images/Main banner/1ban.jpg" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item ">
      <img src="/Images/Main banner/2ban.jpg" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item ">
      <img src="/Images/Main banner/main-banners3.jpg" className="d-block w-100" alt="..." />
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

   <div className="container">
  
  <div className="row ">
    <div className="col-lg-6 col-md-6 col-sm-12"><Link to='/Palletdeals'><img src="/Images/Homepag/banners-mediumpallet.jpg" alt className="banner" /></Link></div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <Link to='/Supersunday'><img src="/Images/Homepag/banners-medium.jpg" alt className="banner" /></Link>  
    </div>
  </div>
      <div className="reviews">
      <p className="title">Customer Reviews</p>

      {/* Swiper for mobile screens */}
      <div className="d-md-none ms-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card" style={{ width: "16rem", height: 169 }}>
                <div className="star-rating">
                  <input type="radio" id="star5" name={`rating-${index}`} defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
                  <input type="radio" id="star4" name={`rating-${index}`} defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
                  <input type="radio" id="star3" name={`rating-${index}`} defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
                  <input type="radio" id="star2" name={`rating-${index}`} defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
                  <input type="radio" id="star1" name={`rating-${index}`} defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
                  <span className="verified-badge">Verified</span>
                </div>
                <div className="card-body">
                  <h6 className="card-title">{review.name}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">{review.review}</h6>
                  <p className="time">{review.time}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for larger screens */}
      <div className="row rrr d-none d-md-flex">
  {reviews.map((review, index) => (
    <div key={index} className="col-lg-2 col-md-3 col-sm-12 card ms-3 mt-3" style={{ width: "16rem", height: 169 }}>
      <div className="star-rating">
        <input type="radio" id={`star5-${index}`} name={`rating-lg-${index}`} defaultValue={5} /><label htmlFor={`star5-${index}`} title="5 stars">☆</label>
        <input type="radio" id={`star4-${index}`} name={`rating-lg-${index}`} defaultValue={4} /><label htmlFor={`star4-${index}`} title="4 stars">☆</label>
        <input type="radio" id={`star3-${index}`} name={`rating-lg-${index}`} defaultValue={3} /><label htmlFor={`star3-${index}`} title="3 stars">☆</label>
        <input type="radio" id={`star2-${index}`} name={`rating-lg-${index}`} defaultValue={2} /><label htmlFor={`star2-${index}`} title="2 stars">☆</label>
        <input type="radio" id={`star1-${index}`} name={`rating-lg-${index}`} defaultValue={1} /><label htmlFor={`star1-${index}`} title="1 star">☆</label>
        <span className="verified-badge">Verified</span>
      </div>
      <div className="card-body">
        <h6 className="card-title">{review.name}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{review.review}</h6>
        <p className="time">{review.time}</p>
      </div>
    </div>
  ))}
</div>


      <div className="row rating mt-4">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <center>
            <p className="card-subtitle">Rated 4.5 / 5 based on &nbsp;45 reviews &nbsp;Showing our 4 & 5 star reviews.</p>
          </center>
        </div>
      </div>
      <center>
        <img src="https://linkwwwebsite.000webhostapp.com/Group%2078.png" alt=""/>
      </center>
    </div>

  <div className="row mt-5">
    <div className="col-lg-6 col-md-6 col-sm-12">
    <Link to='/diye'><img src="/Images/Homepag/Diy range.png" alt className="ca" /></Link>  
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <Link to='/poundline'><img src="/Images/Homepag/Poundlines range.png" alt className="ca" /></Link>  
    </div>
  </div>
  {/* ------- */}
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link  to='/category/disposible' ><img src="/Images/Homepag/disposables.png" className="caa" alt /></Link>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
     <Link to= '/category/householdcleaners'><img src="/Images/Homepag/Household Cleaners.png" className="caa" alt /></Link> 
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
   <Link to= '/category/cleaning' ><img src="/Images/Homepag/Cleaning Materials.png" alt className="caa" /></Link>  
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to= '/category/plastichousewares' > <img src="/Images/Homepag/Plastics.png" alt className="caa" /></Link>
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
     <Link to='/category/partyware'><img src="/Images/Homepag/Partyware.png" className="caa " alt /></Link> 
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/category/kitechenwear' ><img src="/Images/Homepag/Kitchen Utensils.png" className="caa " alt /></Link> 
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/cookwar'><img src="/Images/Homepag/Cookware.png" className="caa" alt /></Link>  
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/bakeware'  ><img src="/Images/Homepag/Bakeware.png" className="caa" alt /></Link>  
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
   <Link to = '/category/toiletries' ><img src="/Images/Homepag/Toiletries.png" className="caa" alt /></Link> 
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/category/petproducts'><img src="/Images/Homepag/Pet Products.png" className="caa" alt /></Link>  
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/category/stationery'><img src="/Images/Homepag/Stationeries.png" className="caa" alt /></Link>  
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
    <Link to='/deparments'>  <img src="/Images/Homepag/all departements.png" className="caa" alt /></Link>
    </div>
  </div>
  
  <div>
    <div className="mt-2 reviews">
      <p className="title1">Your reliable source of home supplies </p>
    </div>
    <p className="ms-2 fs-5 mt-4">Welcome to Home Essentials Hive, a one-stop hub for all your daily needs. We are your trusted partner, ensuring that you can buy all your daily needs with just a single click. We offer products from household to food and drink, kitchenware to homeware, decoration to seasonal accessories, personal care to pet care, and tech to gadgets. Our commitment is to deliver the products on time to ease your burden.</p>
   
    
      <b className='h5'>Years of experience</b> <br/>
     <p className='fs-5'> Home Essentials Hive has years of experience serving its customers at their best. Customer satisfaction is our topmost priority because we believe that if a customer visits our store once, he should trust us in the future as well.  </p>
    <b className='h5' >Shop with us for a better customer experience</b> <br/>
  <p className='fs-5'>  Choose Home Essentials Hive to buy daily-use products at budget-friendly rates. Contact our customer care officer for further guidance. 

    </p>
  </div>
  {/* <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 form1">
      <center><h3 className="registerform text-white">CREATE AN ACCOUNT</h3></center>
      <p className="te ms-3">PLEASE CLICK ON THE REGISTER BUTTON BELOW TO CREATE AN ACCOUNT</p>
      <center><Link to="/Register"><button className=" mb-3 registerbuton ">REGISTER</button></Link></center>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12  homeage ">
      <center><h3 className="registerform text-white">EMAIL</h3></center>
      <div className="">
        <div>
          <label className="ms-2">EMAIL</label>
          <input type="email"  name='email' value={email} onChange={(e)=>setemail(e.target.value)}  className="  homelogin" placeholder="Type Your Email" />
        </div>
        <div className='pashome'>
        <label className="">PASSWORD</label>
          <input type="password"  name='password' value={password} onChange={(e)=>setpassword(e.target.value)} className="homelogin" placeholder="Type Your Email" />
        </div>
      </div>     
      <div className=" d-flex">
        <div className="forgot mb-3">  <Link to="/forget">FORGOT PASSWORD</Link></div>
        <div>
          <button className="mb-3 sizebutton1 ms-2 registerbuto " onClick={registeruser} >LOGIN</button>
        </div>
      </div>
    </div>
  </div> */}
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 mt-2 reviews">
      <p className="title">FEATURED BRANDS</p>
    </div>
  </div>
  <div className='row slider'>
    <div className='col slide-track'>
     
      <div>
      <img src="/Images/featured brands/1.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/2.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/3.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/4.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/5.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/6.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/7.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/8.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/9.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/10.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/11.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/12.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/13.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="/Images/featured brands/14.jpg" alt className="sliimg" />
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Home
