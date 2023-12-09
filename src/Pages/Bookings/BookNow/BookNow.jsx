import { useLoaderData } from "react-router-dom";
// import bookingPagebBg from "../../../assets/Deluxe/2.jpg"
import { useContext, } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BookNow = () => {
    const {user} = useContext(AuthContext)
    const { email, displayName} = user;
    // console.log(email)
    const checkoutService = useLoaderData()
    const { room_no, img1,  type, rent } = checkoutService;
    console.log(checkoutService)
    console.log(user)

    const handleCheckOut = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const roomType = form.type.value
        const room_no = form.roomno.value
        const rent = form.rent.value
        const bookingdate = form.date.value
        const checkin = form.checkin.value
        const checkout = form.checkout.value
        const img = form.image.value

        const bookingData = {name, email, roomType, room_no, img, rent, bookingdate, checkin, checkout}
        console.log(bookingData)

       fetch('https://b8a11-server-side-habibur-01.vercel.app/booking', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        }, 
        body:JSON.stringify(bookingData)

       })
       .then(result => {
        console.log(result)
        toast('Your booking successfull')
       })
       .catch(error => {
         console.error(error)
       })


    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="h-[400px] bg-cover bg-center  rounded-lg" style={{ backgroundImage: `url('${img1}')` }}>
                <div className=" relative h-full rounded-lg flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] bg-transparent " >
                    <div className="lg:w-1/3 ml-20 space-y-7">
                        <h1 className="text-4xl text-[#FFF] text-center font-semibold">Book Your Room</h1>

                    </div>
                    

                </div>
            </div>
            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body md:w-3/5  md:mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email}  placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room Category</span>
                        </label>
                        <input type="text" name="type" defaultValue={type} placeholder="service" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room no</span>
                        </label>
                        <input type="text" name="roomno" defaultValue={room_no} placeholder="room no" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rent</span>
                        </label>
                        <input type="text" name="rent" defaultValue={rent} placeholder="rent" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={img1} placeholder="rent" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="date" name="date"   placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Check in</span>
                        </label>
                        <input type="date" name="checkin"  placeholder="check in" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Check out</span>
                        </label>
                        <input type="date" name="checkout"  placeholder="check out" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookNow;