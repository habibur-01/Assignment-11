import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import Details from './Details/Details';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
// import { Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet';

const RoomDetails = () => {
    const singleRoom = useLoaderData()
    const [roomReview, setRoomReview] = useState([])
    const [bookingRoom, setBookingRoom] = useState([])
    // const [isRoomBooking, setIsRoomBooking] = useState(false)
    const { _id, room_no, img1, img2, img3, description, type, rent, room_size, offers } = singleRoom;
    // console.log(singleRoom)

    //find review
    useEffect(() => {
        fetch(`https://b8a11-server-side-habibur-01.vercel.app/reviews?room_no=${room_no}`)
            .then(res => res.json())
            .then(data => setRoomReview(data))

    }, [room_no])

    // find room is available or not
    useEffect(() => {
        fetch(`https://b8a11-server-side-habibur-01.vercel.app/booking`)
            .then(res => res.json())
            .then(data => setBookingRoom(data))

    }, [setBookingRoom])
    console.log(bookingRoom)
    // useEffect(() => {
    //     const findRoom =  bookingRoom?.find(room => room.room_no == room_no)
    //     // console.log(findRoom)
    // },[bookingRoom, room_no])


    return (
        <div className='mb-32'>
            <div>
                <Helmet>
                    <title>Room Details</title>
                </Helmet>
            </div>

            <div className='w-full lg:flex lg: mb-9'>
                <div className='w-full lg:w-3/4 h-600px lg:h-[700px]'>
                    {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>

                    </Swiper> */}
                    <div className="carousel w-full h-[600px] lg:h-[700px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={img1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='w-3/4 lg:w-[25%] hidden lg:block lg:h-[700px]'>
                    <img className='h-1/3 border  lg:w-full' src={img1} alt="" />
                    <img className='h-1/3 border  lg:w-full' src={img2} alt="" />
                    <img className='h-1/3 border  lg:w-full' src={img3} alt="" />
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-semibold p-4 border-t-rose-400 border border-r-0 border-l-0 border-b-rose-400 my-6'>Room Descriptions:</h1>
                    <p className='p-3 md:p-3'>{description}<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia natus expedita tempora quae, voluptas officiis harum sapiente animi, voluptatem quibusdam, aperiam a sequi dignissimos!</span>
                    </p>
                    <div className='mt-8 w-full mr-4'>
                        {/* <h1 className='text-xl mt-4 font-medium'>Give your reviews</h1> */}


                    </div>
                </div>

                <div className='md:m-3'>
                    <div className='bg-[#151515] text-white mx-2 md:ml-0 mt-5 rounded-xl px-8 py-10'>
                        <h1 className='text-3xl font-medium mb-5 '>Room Details</h1>
                        <div className='space-y-4'>
                            <p className='text-base font-medium'>Room Categorry:{type}</p>
                            <p className='text-base font-medium'>Room Size: {room_size}</p>
                            <p className='text-base font-medium'>Room No: {room_no}</p>
                            <p className='text-base font-medium'>Rent: {rent}/Night</p>
                            <div className='flex text-base font-medium'>Offers: {offers.length > 0 ? <p>{offers}%</p> : <p>none</p>}</div>
                            <div className=''>
                                {
                                    bookingRoom?.find(room => room.room_no == room_no) ? <button className='btn btn-primary w-full mt-2'>Not Available</button> : <Link to={`/booknow/${_id}`}><button className='btn btn-primary w-full mt-2'>Book Now</button></Link>
                                }
                                {/* <Link to={`/booknow/${_id}`}><button className='btn btn-primary w-full mt-2'>Book Now</button></Link> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='mt-8 border-t-4 container mx-auto '>
                <h1 className='text-xl mt-4 font-medium pl-4 md:pl-4'>Ratings & Reviews</h1>
                <div>
                    {
                        roomReview?.map(review =>
                            <div key={review._id} className=" w-full my-14">
                                <div className="space-y-3">

                                    <div className='text-left'>
                                        <p className='text-md font-normal mb-2'>{review.userReview}</p>
                                        <p>Ratings: {review.customerRating} out of <span>5</span></p>
                                    </div>

                                    <div className='flex items-center gap-6 mb-8'>
                                        <div className='w-14 h-14 rounded-full flex justify-center items-center '>
                                            <h1 className='w-14 h-14  flex justify-center items-center'><img className='rounded-full' src={review.userPhoto} alt="" /></h1>
                                        </div>
                                        <div className='space-y-2'>
                                            <h3 className='uppercase text-normal font-semibold'>{review.userName}</h3>
                                            <p>{review.date}</p>
                                            {/* <p>{review.room_no}</p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>


            </div>

        </div>
    );
};

export default RoomDetails;