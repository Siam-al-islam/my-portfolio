import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../../src/style.css';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:mb-40 mb-28'>
            <div>
                <Swiper
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={-20}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/ZM29hTz/28-09-2024-20-47-20-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/Qk3c3kx/28-09-2024-20-49-30-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/1ZJvXnn/28-09-2024-20-50-06-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/d6gYRYZ/28-09-2024-20-51-22-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/zfQ12vp/28-09-2024-20-54-08-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/mSh8sL7/28-09-2024-20-54-49-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/JjVmDZ8/28-09-2024-20-56-31-REC.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[150px] md:h-[200px] lg:h-[300px] object-cover' src="https://i.ibb.co.com/w0CXLkj/28-09-2024-20-58-22-REC.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='relative'>
                <div className='absolute -top-8 left-5 z-10 flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[120px] lg:w-[160px] rounded-full border-4 border-[#76a651c2]' src="https://i.ibb.co.com/181pT7R/my-2.jpg" alt="" />
                        <div className='mt-5'>
                            <h1 className='text-white font-semibold text-xl md:text-3xl'>Siam Al Islam</h1>
                            <h3 className='text-gray-400 font-medium text-xs md:text-base lg:mt-1'>Web Developer</h3>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <Link to="/resumeImage"><button className='resume-btn mr-8'>Resume</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;