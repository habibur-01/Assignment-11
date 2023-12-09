import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDate = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user;
    const bookingData = useLoaderData()
    console.log(bookingData)
    const {_id, room_no, img, roomType, rent, bookingdate, checkin, checkout } = bookingData;
    
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const checkin = form.checkin.value
        const checkout = form.checkout.value

        const updateBooking = { checkin, checkout }

        // send data to the server
        fetch(`https://b8a11-server-side-habibur-01.vercel.app/booking/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    return toast('Product Updated Successfully')
                }
            })

    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body lg:w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" value={displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" value={email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room Category</span>
                        </label>
                        <input type="text" name="type" value={roomType} placeholder="service" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room no</span>
                        </label>
                        <input type="text" name="roomno" value={room_no} placeholder="room no" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rent</span>
                        </label>
                        <input type="text" name="rent" value={rent} placeholder="rent" className="input input-bordered" required />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" value={img} placeholder="rent" className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="date" name="date" value={bookingdate} placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Check in</span>
                        </label>
                        <input type="date" name="checkin" defaultValue={checkin} placeholder="check in" className="input input-bordered" required />

                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Check out</span>
                        </label>
                        <input type="date" name="checkout" defaultValue={checkout} placeholder="check out" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Update Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDate;