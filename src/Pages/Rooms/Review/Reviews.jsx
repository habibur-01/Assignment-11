import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import moment from 'moment';



const Reviews = () => {
    const { user } = useContext(AuthContext)
    const { displayName, photoURL } = user;
    const reviewData = useLoaderData()
    const { room_no } = reviewData
    console.log(room_no)
    // const [booking, setBooking] = useState([])
    const [review, setReview] = useState('')
    // const [rating, setRating] = useState()
    const formattedDate = moment().format('YYYY-MM-DD HH:mm:ss');

    const handleTextReview = (e) => {
        const textReview = e.target.value
        console.log(textReview)
        setReview(textReview)

    }
    // const handleRating = (e) => {
    //     const userRating = e.target.value
    //     console.log(userRating)
    //     setRating(userRating)
    // }

    const handleuserReview = (e) => {
        e.preventDefault();
        // console.log(room_no)
        const customerRating = e.target.rating.value
        const userReview = review;
        const room_no = e.target.roomno.value
        const userName = displayName
        const userPhoto = photoURL

        const customerReview = { room_no, userName, userPhoto, customerRating, userReview, date:formattedDate }
        console.log(customerReview)

        fetch('https://b8a11-server-side-habibur-01.vercel.app/reviews', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customerReview)

        })
            .then(result => {
                console.log(result)
                toast('Thanks for your review')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body w-3/5 mx-auto" onSubmit={handleuserReview}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room No</span>
                        </label>
                        <input type="text" name="roomno" value={room_no} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder='rating out of 5' className='input input-bordered w-full mb-2' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write Your Review</span>
                        </label>
                        <textarea type="" onChange={handleTextReview} className='input text-sm input-bordered mr-3 w-full' placeholder='write your review' name='review' ></textarea>
                    </div>


                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Reviews;