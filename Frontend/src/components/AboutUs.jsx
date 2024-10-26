import React from 'react';
import aboutImg from '../assets/landing/about.svg';

const AboutUs = () => {
    return (
        <section className="h-[100vh] py-16 md:py-[2rem] bg-gray-50">
            <div className='flex justify-center items-center h-[100%] p-4'>
                <div>
                    <img src={aboutImg} alt="CampusCare" className="w-[734px] h-[462px] hidden md:block" />
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className="text-3xl text-yellow md:text-4xl font-bold mb-8">About CampusCare</h2>
                    <p className="text-sm md:text-md text-gray-700 max-w-2xl">
                        At University Healthcare Center, our goal is to create a safe and supportive environment for all students. We provide comprehensive healthcare services right on campus, ensuring that our students have access to the care they need when they need it.With a dedicated team of healthcare professionals and state-of-the-art facilities, we strive to make healthcare accessible, inclusive, and effective. We also place a strong emphasis on mental health ad wellness, recognizing the importance of a balanced approach to student life.<br></br><br></br> Our center is committed to innovation, using the latest technology to monitor health conditions in real-time and provide prompt, effective responses. We work closely with campus authorities and external partners to maintain a healthy campus environment, ensuring that every student has the resources and support they need to thrive.<br></br><br></br> Students well-being is our top priority. We’re here to support you every step of the way, from prevention and care to recovery and wellness. Together, we’re building a healthier, stronger campus community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
