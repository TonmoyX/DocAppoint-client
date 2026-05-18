import DoctorCard from '@/component/DoctorCard';
import React from 'react';

const AllAppointPage = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`)
    const doctorsData = await res.json()
    return (
        <div>
        <div className='grid grid-cols-4 mt-10 gap-4 px-20 pb-10'>
            {
                doctorsData.map(doctorData => <DoctorCard key={doctorData.id} doctorData={doctorData}></DoctorCard>)
            }
        </div>
        </div>
    );
};

export default AllAppointPage;