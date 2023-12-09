
import { useEffect, useState } from "react";
import bg from "../../assets/banner/banner2.jpg"
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Rooms = () => {
    const rooms = useLoaderData()
    const [roomsData, setRoomsData] = useState([])
    const [bookingData, setBookingData] = useState([])
    const [click, setClick] = useState(false)
    const available = rooms.length - bookingData.length
    const booking = bookingData.length
    console.log(bookingData)

    const url = 'https://b8a11-server-side-habibur-01.vercel.app/booking'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingData(data))
    }, [])
    const handleSearch = (e) => {
        e.preventDefault()
        setClick(true)
        const price = e.target.price.value
        console.log(price)
        const searchingRoom = rooms?.filter(room => room.rent < price)
        // console.log(searchingRoom)
        setRoomsData(searchingRoom)

    }
    // console.log(click)
    // console.log(roomsData)


    return (
        <div>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>My Bookings</title>
                    </Helmet>
                </div>
            </HelmetProvider>
            <div className='h-[600px] bg-cover bg-[#151515] bg-blend-overlay mb-24 flex justify-center items-center ' style={{ backgroundImage: `url(${bg})` }}>
                <div className='w-3/5 text-center text-white'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-3'>Choose Your Room</h1>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae laborum inventore perspiciatis voluptatem veritatis. Quis!</p>
                    </div>
                    <div className='mt-4'>
                        <form onSubmit={handleSearch}>
                            <input type="text" placeholder="write minimum price" name="price" className='input input-bordered text-black' />
                            <button className='btn btn-primary ml-2'>Search</button>
                        </form>

                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-4xl font-bold mb-20 text-center'>Find a Suitable Room</h1>
            </div>
            <div className="container mx-auto pl-4 md:pl-4 mb-10 flex space-x-6 text-xl">
                <h1>Available: <span>{available}</span></h1>
                <h1>Booking: <span>{booking}</span></h1>
            </div>
            <div className='md:pl-4 lg:pl-0 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:gap-2 lg:gap-6 mb-32'>
                {
                    click ? <div className="w-full border grid col-span-3 gap-6 lg:gap-6">
                        {
                            roomsData.length > 0 ?

                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    {roomsData?.map(room => <div key={room._id}>

                                        <Link to={`/room/${room._id}`}>
                                            <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
                                                <figure className="px-10 pt-10">
                                                    <img src={room.img1} alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{room.type}</h2>
                                                    <div>
                                                        <p>Size: {room.room_size} <span>sq<sup>2</sup></span></p>
                                                        <p>Price: {room.rent}/Night</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>)}
                                </div>

                                : <p className="text-xl font-medium h-96 w-full flex justify-center items-center">No Data Found</p>
                        }
                    </div> : rooms?.map(room => <div key={room._id}>

                        <Link to={`/room/${room._id}`}>
                            <div className="card md:w-80 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={room.img1} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{room.type}</h2>
                                    <div>
                                        <p>Size: {room.room_size} <span>sq<sup>2</sup></span></p>
                                        <p>Price: {room.rent}/Night</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>)
                }

                {/* {
                     rooms?.map(room => <div key={room._id}>

                        <Link to={`/room/${room._id}`}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={room.img1} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{room.type}</h2>
                                    <div>
                                        <p>Size: {room.room_size} <span>sq<sup>2</sup></span></p>
                                        <p>Price: {room.rent}/Night</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>)
                } */}
            </div>

        </div>
    );
};

export default Rooms;