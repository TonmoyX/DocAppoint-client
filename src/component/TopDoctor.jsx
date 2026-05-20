import React from 'react';
import DoctorCard from './DoctorCard';

const TopDoctor = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getDoctorData`,{
        cache:'no-store'
    })
    const doctorsData = await res.json()
    return (
        <div className=''>
            <h1 className='text-center text-cyan-900 text-4xl md:text-5xl font-bold mb-10 mt-20'>Top Rated Doctors</h1>
            <div className='mx-auto flex justify-center'>
        <div className='grid mx-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                doctorsData.slice(0,3).sort((a, b) => b.rating - a.rating).map(doctorData => <DoctorCard key={doctorData.id} doctorData={doctorData}></DoctorCard>)
            }
        </div>
        </div>
        </div>
    );
};

export default TopDoctor;