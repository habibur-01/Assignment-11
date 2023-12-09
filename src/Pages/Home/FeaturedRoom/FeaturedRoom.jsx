
import { useEffect, useState } from "react";


const FeaturedRoom = () => {
    const [roomCategory, setRoomCategory] = useState([])

    useEffect(() => {
        fetch("https://b8a11-server-side-habibur-01.vercel.app/roomcategory")
            .then(res => res.json())
            .then(data => setRoomCategory(data))
    }, [])
    // console.log(roomCategory)
    return (
        <div>
            <div className="text-center my-32">
                <h1 className="text-4xl font-bold">Featured Rooms</h1>
                <p className="text-base text-[#151515] font-normal">Where you can refresh your body by taking rest</p>
            </div>
            <div className="flex flex-row flex-wrap gap-6 justify-center">
                {
                    roomCategory?.slice(0,3).map(cateroy => <div key={cateroy._id}>
                        <div className="card w-96 bg-base-100 shadow-xl hover:bg-black hover:text-gray-300">
                            <figure><img className="h-72" src={cateroy.img} alt="Shoes" /></figure>
                            <div className="card-body items-center text-center space-y-5">
                                <h2 className="card-title">{cateroy.room_category}</h2>
                                <p className="h-28">{cateroy.description}</p>
                                <div className="card-actions  flex items-center gap-2">
                                    <p className="text-sm font-medium ">Rent: {cateroy.rent}/Night</p>
                                    <button className="btn ">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default FeaturedRoom;