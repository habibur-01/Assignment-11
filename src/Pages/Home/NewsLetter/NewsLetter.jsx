
import bg from "../../../assets/banner/banner3.jpg"
// import { AiOutlineMail } from "react-icons/ai";
import { GrMail } from 'react-icons/gr';
const NewsLetter = () => {
    return (
        <div className="h-auto lg:h-96 w-full flex items-center justify-center bg-cover bg-center bg-[#151510] bg-blend-overlay" style={{backgroundImage: `url(${bg})`}} >
            {/* <div>
                <img className="object-cover h-60 w-full" src={bg} alt="" />
            </div> */}
           <div className="border my-14  lg:mt-20 rounded-xl px-10 pb-10 w-3/5 flex flex-col justify-center items-center ">
              <div className='w-20 h-20 -mt-10 mb-8 rounded-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
                <h1 className='border-2 w-16 h-16 rounded-full border-white flex justify-center items-center'><GrMail size={40}></GrMail></h1>
              </div>
              <div className='text-center space-y-5'>
                <h1 className='text-2xl text-blue-400'>Newsletter</h1>
                <p className='text-sm text-white '>Stay up to date with our latest news and products.</p>
                <div>
                    <input type="email" className='input input-bordered' placeholder='email' />
                    <button className='btn bg-blue-400 outline-none mt-1 md:mt-0 md:ml-4'>Subscribe</button>
                </div>
                <p className='text-xs text-[#6b6767]'>Your email safe with us,we do not spam.</p>
              </div>
           </div>
            
        </div>
    );
};

export default NewsLetter;