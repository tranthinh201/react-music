import React from "react";
import { Skeleton } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { Autoplay, FreeMode } from "swiper";
import './slider.scss';


function Slider({data, loading}) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
            >   
                {   
                    loading ? (
                        <div>
                            <SwiperSlide><Skeleton variant="rectangular" style={{borderRadius: '10px'}} animation="wave" height={250} sx={{ bgcolor: 'grey.900' }}/></SwiperSlide>
                            <SwiperSlide><Skeleton variant="rectangular" style={{borderRadius: '10px'}} animation="wave" height={250} sx={{ bgcolor: 'grey.900' }}/></SwiperSlide>
                            <SwiperSlide><Skeleton variant="rectangular" style={{borderRadius: '10px'}} animation="wave" height={250} sx={{ bgcolor: 'grey.900' }}/></SwiperSlide>
                        </div>
                    ) : (
                        data?.map((item, index) => (
                            <SwiperSlide className="slide-item" key={index}>
                                <img src={item.banner} alt={item.encodeId} />
                            </SwiperSlide>
                        ))
                    )
                }
            </Swiper>
        </>
    );
}

export default Slider;

