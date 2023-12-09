

import { Helmet } from 'react-helmet';
import Banner from './Banner/Banner';
import FeaturedRoom from './FeaturedRoom/FeaturedRoom';
import NewsLetter from './NewsLetter/NewsLetter';
import Testimonials from './Testimonial/Testimonials';
import { HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (
        
        <div>
           <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>
           </HelmetProvider>

            <div className="">
                <Banner></Banner>
            </div>
            <div className='container mx-auto'>
                <FeaturedRoom></FeaturedRoom>

            </div>
            <div className='my-32'>
                <NewsLetter></NewsLetter>
            </div>
            <div className='container mx-auto my-32'>
                <Testimonials></Testimonials>
            </div>


        </div>
    );
};

export default Home;