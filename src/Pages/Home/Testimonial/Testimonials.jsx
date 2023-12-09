// import React from 'react';
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://b8a11-server-side-habibur-01.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-28'>
                <h1 className='text-4xl font-bold'>User Testimonials</h1>
                <p className='text-base text-[#151515] font-normal'>Our Happy Guest</p>
            </div>

            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    
                }}
                className="mySwiper"
            >
                <div className=' mb-10 '>
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="card md:w-80 lg:w-96 h-full md:h-[420px] bg-base-100 shadow-xl mb-14">
                                    <div className="card-body">
                                        <div className='flex items-center gap-6 mb-8'>
                                            <div className='w-20 h-20 rounded-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
                                                <h1 className='border-2 w-16 h-16 rounded-full border-white flex justify-center items-center'><img src={review.userPhoto} alt="" /></h1>
                                            </div>
                                            <div className='space-y-4'>
                                                <h3 className='uppercase text-xl font-semibold'>{review.userName}</h3>
                                                {/* <p>Stall Owner</p> */}
                                            </div>
                                        </div>
                                        <div className='text-left'>
                                            <p className='text-md font-normal flex flex-grow'>{review.userReview}</p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    }
                </div>

            </Swiper>

        </div>
    );
};

export default Testimonials;