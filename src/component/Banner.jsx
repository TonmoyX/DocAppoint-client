import Image from 'next/image';
import banner from '@/assets/banner.avif'
const Banner = () => {
    return (
        <div className='flex gap-25 mt-10 items-center mx-auto justify-center'>
            <div>
                <p className='text-sm text-cyan-300 animate-bounce'>MEDICAL CHECKUP</p>
                <h1 className='text-6xl mt-4 text-cyan-600 font-bold'>Best Medical Clinic For
                     Your<br></br> Healthcare !</h1>
                <p className='text-xl mt-8 font-semibold text-cyan-400'>Navigating your health should not be stressful.
                We connect you with top-rated doctors and specialists <br></br>
                dedicated to your wellness. Find the right care, right when you need it.</p>
            </div>
            <div>
                <Image className='w-150 h-150 rounded-2xl' src={banner} alt={'bannerImage'} width={1000} height={1000}></Image>
            </div>
        </div>
    );
};

export default Banner;