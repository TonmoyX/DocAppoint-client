import Image from 'next/image';
import banner from '@/assets/banner.avif'
const Banner = () => {
    return (
        <div className=' space-x-2 md:flex md:gap-25 mt-10 items-center mx-auto justify-center md:px-20'>
            <div className='mx-5'>
                <p className='text-sm text-cyan-300 animate-bounce'>MEDICAL CHECKUP</p>
                <h1 className=' text-4xl md:text-6xl mt-4 text-cyan-600 font-bold'>Best Medical Clinic For
                     Your<br></br> Healthcare !</h1>
                <p className='text-xl mt-8 font-semibold text-cyan-400'>Navigating your health should not be stressful.
                We connect you with top-rated doctors and specialists <br></br>
                dedicated to your wellness. Find the right care, right when you need it.</p>

                <div className='mt-10 flex gap-4'>
                    <div>
                        <p className='text-4xl font-extrabold text-cyan-900'>24/7</p>
                        <p className='text-lg font-semibold text-cyan-300'>Emergency Service</p>
                    </div>
                    <div>
                        <p className='text-4xl font-extrabold text-cyan-900'>30+</p>
                        <p className='text-lg font-semibold text-cyan-300'>Special Doctor</p>
                    </div>
                    <div>
                        <p className='text-4xl font-extrabold text-cyan-900'>10K+</p>
                        <p className='text-lg font-semibold text-cyan-300'>Booked Appointment</p>
                    </div>
                </div>
            </div>
            <div>
                <Image className='w-full h-80 mt-10 md:w-150 md:h-150 rounded-2xl hover:scale-105 transition duration-300' src={banner} alt={'bannerImage'} width={1000} height={1000}></Image>
            </div>
        </div>
    );
};

export default Banner;