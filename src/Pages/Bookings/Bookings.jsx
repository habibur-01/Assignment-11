import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import moment from 'moment';


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [bookingData, setBookingData] = useState([])
    const currentDate = moment();


    const url = `https://b8a11-server-side-habibur-01.vercel.app/booking?email=${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingData(data))
    }, [url])
    console.log(bookingData)

    const handleDelete = (_id, bookingdate) => {

        // console.log(_id)
        // console.log(bookingdate)
        const insertedDate = moment(bookingdate)
        const hoursPassed = currentDate.diff(insertedDate, 'hours');
        console.log(hoursPassed)
        if (hoursPassed <= 24) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://b8a11-server-side-habibur-01.vercel.app/booking/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            // const remaining = data.filter(deleteId => deleteId._id !== _id)
                            // setBooking(remaining)
                            if (data.deletedCount > 0) {
                                const remaining = bookingData?.filter(deleteId => deleteId._id !== _id)
                                setBookingData(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                            }
                        })

                }
            });
        }
        else {
            return toast('You do not cancel after 24 hrs of booking')
        }

    }



    return (
        <div className='container mx-auto'>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>My Bookings</title>
                    </Helmet>
                </div>
            </HelmetProvider>

            <ToastContainer></ToastContainer>
            <div>
                <h1 className='text-3xl font-semibold mt-20 mb-10 border-b-2 pb-4 pt-4'>My Bookings:</h1>
            </div>
            <div>
                {
                    bookingData.length > 0 ?
                        <div className="w-full">
                            <table className="table w-full mb-20">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Room Image</th>
                                        <th>Room Details</th>
                                        <th>Action</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {


                                        bookingData?.map(bookingRoom =>

                                            <tr key={bookingRoom._id} className=' border-b-2'>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask h-28 lg:h-28">
                                                                <img className="rounded-sm " src={bookingRoom.img} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        {/* <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div> */}
                                                    </div>
                                                </td>
                                                <td className='space-y-4'>
                                                    <p><span className='font-semibold'>Type-</span> {bookingRoom.roomType}</p>
                                                    
                                                    <p className=""><span className='font-semibold'>Room-</span>{bookingRoom.room_no}</p>
                                                    <p><span className='font-semibold'>Rent-</span> {bookingRoom.rent}/Night</p>
                                                </td>

                                                <th className='space-y-2'>

                                                    <Link to={`/update/${bookingRoom._id}`}><button className='btn btn-primary btn-sm '>Update</button></Link>
                                                    <button onClick={() => handleDelete(bookingRoom._id, bookingRoom.bookingdate)} className='btn btn-warning btn-sm md:ml-2'>Cancel</button>
                                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                                                    <Link to={`/reviews/${bookingRoom._id}`}><button className="btn btn-sm md:ml-2 mt-2" >Review</button></Link>
                                                    {/* <dialog id="my_modal_3" className="modal">
                                                        <div className="modal-box">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                            </form>
                                                            <div className='my-5 w-3/4 mx-auto '>
                                                                <p>{bookingRoom.room_no}</p>

                                                                <input type="number" onChange={handleRating} name='rating' placeholder='rating out of 5' className='input input-bordered w-full mb-2' /><br />
                                                                {/* <input type="number"  name='ratings' defaultValue={bookingRoom.room_no} placeholder='rating out of 5' className='input input-bordered w-full mb-2' /><br /> */}
                                                    {/* <textarea type="" onChange={handleTextReview} className='input text-sm input-bordered mr-3 w-full' placeholder='write your review' name='review' ></textarea>
                                                                
                                                                <br /><button type='submit' onClick={()=>handleReview(bookingRoom._id)} className='btn btn-md px-3 btn-primary'>Submit</button>

                                                            </div>
                                                        </div> 
                                                    </dialog>  */}
                                                </th>
                                            </tr>
                                        )



                                    }
                                </tbody>
                            </table>
                        </div> :
                        <p className='text-2xl h-[50vh] my-20 flex justify-center items-center'>You do not booking any room yet. </p>

                }






            </div>

        </div>
    );
};

export default Bookings;