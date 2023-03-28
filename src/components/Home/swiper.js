import React from 'react';
import './swiper.css'
import slide1 from '../../assest/Slide1.PNG';
import slide2 from '../../assest/Slide2.PNG';
import slide3 from '../../assest/Slide3.PNG';
import slide4 from '../../assest/Slide4.PNG';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';





function MySwiper () {
  return (
    <Swiper 
    className ='swiper_content my-custom-class'
      effect={'coverflow'}
      spaceBetween={50}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,

      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      
    >
      <SwiperSlide>
        <img src={slide1} alt='slide image' className='imgslides'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt='slide image' className='imgslides'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={slide3} alt='slide image'className='imgslides'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={slide4} alt='slide image' className='imgslides'/>
      </SwiperSlide>
      
      <div className='slider-controler'>
        <div className='swiper-button-prev slider-arrow'>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </Swiper>
  );
}

export default MySwiper;