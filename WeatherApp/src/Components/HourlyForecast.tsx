import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import haze from "../assets/Haze.png"
import mist from "../assets/Mist.png"
import sunny from "../assets/Sunny.png"

function HourlyForecast({value}:any){
    return(
        <>
        <div className='container-fluid ' id="swip">
        <div  className="subTit">Hourly Forecast</div>
        <Swiper
      spaceBetween={1}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide><div className='card'><div className='static'>12PM</div><img src={haze} className='img'></img><div className='CTemp'>{value.hourTemp8}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>1PM</div><img src={mist} className='img'></img><div className='CTemp'>{value.hourTemp1}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>2PM</div><img src={haze} className='img'></img><div className='CTemp'>{value.hourTemp2}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>3PM</div><img src={mist} className='img'></img><div className='CTemp'>{value.hourTemp3}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>4PM</div><img src={sunny} className='img'></img><div className='CTemp'>{value.hourTemp4}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>5PM</div><img src={sunny} className='img'></img><div className='CTemp'>{value.hourTemp5}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>6PM</div><img src={sunny} className='img'></img><div className='CTemp'>{value.hourTemp6}{'\u00B0'}C</div></div></SwiperSlide>
      <SwiperSlide><div className='card'><div className='static'>7PM</div><img src={mist} className='img'></img><div className='CTemp'>{value.hourTemp7}{'\u00B0'}C</div></div></SwiperSlide>

    </Swiper>
</div>
        </>
    );
}
export default  HourlyForecast;