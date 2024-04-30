import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function ImageSwiper() {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-pink-200 w-full h-56'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-green-200 w-full h-56'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-blue-200 w-full h-56'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-yellow-200 w-full h-56'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-red-200 w-full h-56'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-gray-200 w-full h-56'></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
