// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
// SwiperCore.use([Navigation,Pagination,Scrollbar,Ally])

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import 'swiper/swiper-bundle.min.css';

// Swiper.use([Navigation,Pagination,Autoplay])

function Popular() {
    return (
        <Swiper style={{width:'100%',height:'100vh',margin:'10px'}}
        modules={[Navigation,Pagination,Autoplay]}
        navigation
            spaceBetween={30}
            slidesPerView={3}
            // navigation
            Autoplay={{delay:2000}}
            
            pagination={{clickable:true}}
        >
            <Swiper >
            <SwiperSlide style={{padding:'5px'}}>
                <div className="box" style={{height:'550px',boxShadow:'2px 3px 5px rgba(0, 0, 0, 0.28),-2px -3px 5px rgba(0,0,0,0.28)',borderRadius:'10px',margin:'15px'}}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.6q_LEFUhpKBNuo-kbLJaiwHaEK&pid=Api&P=0&h=180" alt="David Beckham" />
                    <h3>David Beckham</h3>
                    <p>
                        David Beckham is a retired English professional footballer known
                        for his successful career with clubs such as Manchester United,
                        Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
                        Beckham showcased exceptional skills as a right winger, excelling
                        in passing, crossing, and free-kick taking. He has won numerous
                        league titles and trophies in various countries.
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide style={{padding:'5px',}}>
            <div className="box" style={{height:'550px',boxShadow:'2px 3px 5px rgba(0, 0, 0, 0.28),-2px -3px 5px rgba(0,0,0,0.28)',borderRadius:'10px',margin:'15px'}}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.JrQM2PUXlNs0HncI9hcMSwHaEh&pid=Api&P=0&h=180" alt="David Beckham" />
                    <h3>Varun Chakaravarthy</h3>
                    <p>
                        Varun Chakaravarthy is a retired English professional footballer known
                        for his successful career with clubs such as Manchester United,
                        Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
                        Beckham showcased exceptional skills as a right winger, excelling
                        in passing, crossing, and free-kick taking. He has won numerous
                        league titles and trophies in various countries. 
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide style={{padding:'5px'}}>
            <div className="box" style={{height:'550px',boxShadow:'2px 3px 5px rgba(0, 0, 0, 0.28),-2px -3px 5px rgba(0,0,0,0.28)',borderRadius:'10px',margin:'15px'}}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.aP3gA14SHMbOBaaw_bbr8QHaEt&pid=Api&P=0&h=180" alt="David Beckham" />
                    <h3>Ramandeep</h3>
                    <p>
                        Ramandeep is a retired English professional footballer known
                        for his successful career with clubs such as Manchester United,
                        Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
                        Beckham showcased exceptional skills as a right winger, excelling
                        in passing, crossing, and free-kick taking. He has won numerous
                        league titles and trophies in various countries. 
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide style={{padding:'5px'}}>
                <div className="box" style={{height:'550px',boxShadow:'2px 3px 5px rgba(0, 0, 0, 0.28),-2px -3px 5px rgba(0,0,0,0.28)',borderRadius:'10px',margin:'15px'}}>
                    <img src="https://sp.yimg.com/ib/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="David Beckham" />
                    <h3>Deshpande</h3>
                    <p>
                        Deshpande is a retired English professional footballer known
                        for his successful career with clubs such as Manchester United,
                        Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
                        Beckham showcased exceptional skills as a right winger, excelling
                        in passing, crossing, and free-kick taking. He has won numerous
                        league titles and trophies in various countries. 
                    </p>

                </div>
                </SwiperSlide>


                <SwiperSlide style={{padding:'5px'}}>
                <div className="box" style={{height:'550px',boxShadow:'2px 3px 5px rgba(0, 0, 0, 0.28),-2px -3px 5px rgba(0,0,0,0.28)',borderRadius:'10px',margin:'15px'}}>
                    <img src="https://sp.yimg.com/ib/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="David Beckham" />
                    <h3>Deshpande</h3>
                    <p>
                        Deshpande is a retired English professional footballer known
                        for his successful career with clubs such as Manchester United,
                        Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
                        Beckham showcased exceptional skills as a right winger, excelling
                        in passing, crossing, and free-kick taking. He has won numerous
                        league titles and trophies in various countries. 
                    </p>

                </div>
                </SwiperSlide>
            </Swiper>
        </Swiper>
    );
}

export default Popular;

















// import React from "react";

// function Popular() {
//   return (
//     <div className="review-slider">
//       <div className="wrapper">
//         <div className="slider">
//   <div className="box">
//     <img src="" alt="David Beckham" />
//     <h3>David Beckham</h3>
//     <p>
//       David Beckham is a retired English professional footballer known
//       for his successful career with clubs such as Manchester United,
//       Real Madrid, LA Galaxy, and AC Milan. Throughout his career,
//       Beckham showcased exceptional skills as a right winger, excelling
//       in passing, crossing, and free-kick taking. He has won numerous
//       league titles and trophies in various countries. Beckham has also
//       made significant contributions to the England national team,
//       participating in multiple FIFA World Cups and UEFA European
//       Championships. Widely regarded as one of the best midfielders and
//       free-kick takers of all time, he has earned various accolades and
//       honors.
//     </p>
//     <div className="stars">
//       <i className="fas fa-star"></i>
//       <i className="fas fa-star"></i>
//       <i className="fas fa-star"></i>
//       <i className="fas fa-star"></i>
//       <i className="fas fa-star"></i>
//     </div>
//   </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Popular;