// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../../../assets/banner/banner1.jpg"
import banner2 from "../../../assets/banner/banner2.jpg"
import banner3 from "../../../assets/banner/banner3.jpg"

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './style.css';

// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (


        <div className=''>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full h-[500px] lg:h-[800px]">
                    <img src={banner1} className="w-full object-cover h-[500px] lg:h-[800px]" />
                    <div className="absolute  h-full flex items-center  transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-32 space-y-7">
                            <h1 className="lg:text-4xl font-semibold uppercase">We Are Giving 20% Of In The Start Of Winter Season.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            {/* <h1 className="text-xl font-semibold ">Bkash Payment <br/>Get  <span className="text-black btn btn-error text-3xl p-2">10%</span> Discount </h1> */}
                            <button className="btn btn-outline btn-success">Contact us</button>
                            

                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                    


                </div>


                <div id="slide2" className="carousel-item relative w-full h-[500px] lg:h-[700px]">
                    <img src={banner2} className="w-full object-cover h-[500px] lg:h-[700px]" />
                    <div className="absolute  h-full flex items-center  transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-32 space-y-7">
                            <h1 className="lg:text-4xl font-semibold uppercase">We Are Giving 20% Of In The Start Of Winter Season.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            {/* <h1 className="text-xl font-semibold ">Bkash Payment <br/>Get  <span className="text-black btn btn-error text-3xl p-2">10%</span> Discount </h1> */}
                            <button className="btn btn-outline btn-success ">Contact us</button>
                            {/* <button className="btn btn-error btn-outline ml-2 ">Book Now</button> */}
                            {/* <button className="btn btn-outline btn-success  ml-3">Contact us</button> */}
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[500px] lg:h-[700px]">
                    <img src={banner3} className="w-full object-cover h-[500px] lg:h-[700px]" />
                    <div className="absolute  h-full flex items-center  transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-32 space-y-7">
                            <h1 className="lg:text-4xl  font-semibold uppercase">We Are Giving 20% Of In The Start Of Winter Season.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            {/* <h1 className="text-xl font-semibold ">Bkash Payment <br/>Get  <span className="text-black btn btn-error text-3xl p-2">10%</span> Discount </h1> */}
                            <button className="btn btn-outline btn-success  ml-3">Contact us</button>
                            {/* <button className="btn btn-error btn-outline px-2">Book Now</button> */}
                            {/* <button className="btn btn-outline btn-success  ml-3">Contact us</button> */}
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero w-full h-[100vh]" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-full h-[100vh]" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-full h-[100vh]" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper> */}
        </div>
    );
};

export default Banner;