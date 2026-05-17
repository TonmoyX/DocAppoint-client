import { Card } from '@heroui/react';
import React from 'react';
import { FaBedPulse, FaHandsHoldingChild, FaHospitalUser } from 'react-icons/fa6';
import { GiHeartBeats } from 'react-icons/gi';

const Chosse = () => {
    return (
        <div className='mx-20 mt-30 pb-10 px-20'>
            <h1 className='text-6xl font-bold text-center text-cyan-600'>Our Specialities</h1>
            <div className='grid mt-20 gap-10 grid-cols-4'>
                <Card className='bg-cyan-200 hover:scale-105 transition duration-300'>
                 <h1 className='flex mx-auto'><GiHeartBeats className='text-5xl mt-5'/></h1>   
                 <h1 className='text-center mt-4 text-2xl font-semibold text-cyan-900'>Cardiology Care Center</h1>   
                </Card>
                <Card className='bg-cyan-200 hover:scale-105 transition duration-300'>
                 <h1 className='flex mx-auto'><FaHandsHoldingChild className='text-5xl mt-5'/></h1>   
                 <h1 className='text-center mt-4 text-2xl font-semibold text-cyan-900'>Child Development Center</h1>   
                </Card>
                <Card className='bg-cyan-200 hover:scale-105 transition duration-300'>
                 <h1 className='flex mx-auto'><FaHospitalUser className='text-5xl mt-5'/></h1>   
                 <h1 className='text-center mt-4 text-2xl font-semibold text-cyan-900'>Counselling Center</h1>   
                </Card>
                <Card className='bg-cyan-200 hover:scale-105 transition duration-300'>
                 <h1 className='flex mx-auto'><FaBedPulse className='text-5xl mt-5'/></h1>   
                 <h1 className='text-center mt-4 text-2xl font-semibold text-cyan-900'>Critical Care Unit</h1>   
                </Card>
            </div>
        </div>
    );
};

export default Chosse;