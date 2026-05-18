import React from 'react';
import DoctorCard from './DoctorCard';

const TopDoctor = async () => {
    const res = await fetch(`http://localhost:8000/getDoctorData`,{
        cache:'no-store'
    })
    const doctorsData = await res.json()
    return (
        <div className=''>
            <h1 className='text-center text-cyan-900 text-5xl font-bold mb-10 mt-20'>Top Rated Doctors</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-30'>
            {
                doctorsData.slice(0,3).sort((a, b) => b.rating - a.rating).map(doctorData => <DoctorCard key={doctorData.id} doctorData={doctorData}></DoctorCard>)
            }
        </div>
        </div>
    );
};

export default TopDoctor;