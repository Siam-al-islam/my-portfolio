import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../../src/style.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={-20}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-full' src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/461337238_1523052049092548_8177598416639902616_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6XmW8xQWyyG_CrvXDcjcbRAD2ln89fltEAPaWfz1-W1nNBqXvaHi3zDH7iyykGkrxjTHjpIxET0gSVqY9A7xj&_nc_ohc=ssipijuOagcQ7kNvgFxOESU&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AMNuc5H_Ee0bd2BwyIIlRZQ&oh=00_AYBA4-pieHV9q8c7P3_vZkhAJ8SCBLi_DoAFDlTUVvrbQA&oe=66FB494A" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;