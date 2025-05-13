import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import haze from "../assets/Haze.png"
import mist from "../assets/Mist.png"
import sunny from "../assets/Sunny.png"

function HourlyForecast({ value }: any) {

  const hour = [
    { time: "12PM", icon: haze, temp: value.hourTemp8 },
    { time: "1PM", icon: mist, temp: value.hourTemp1 },
    { time: "2PM", icon: haze, temp: value.hourTemp2 },
    { time: "3PM", icon: mist, temp: value.hourTemp3 },
    { time: "4PM", icon: sunny, temp: value.hourTemp4 },
    { time: "5PM", icon: sunny, temp: value.hourTemp5 },
    { time: "6PM", icon: sunny, temp: value.hourTemp6 },
    { time: "7PM", icon: mist, temp: value.hourTemp7 }
  ];
  return (
    <>
      <div className='container-fluid ' id="swip">
        <div className="subTit">Hourly Forecast</div>
        <Swiper
          spaceBetween={1}
          slidesPerView={7}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className='card'><div className='static'>12PM</div><img src={haze} className='img'></img><div className='CTemp'>{value.hourTemp8}{'\u00B0'}C</div></div></SwiperSlide>
          {hour.map((value) => (
            <SwiperSlide><div className='card'><div className='static'>{value.time}</div><img src={value.icon} className='img'></img> <div className='CTemp'>{value.temp}{'\u00B0'}C</div></div></SwiperSlide>
          ))



          }
        </Swiper>
      </div>
    </>
  );
}
export default HourlyForecast;