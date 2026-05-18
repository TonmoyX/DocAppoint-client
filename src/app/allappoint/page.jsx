import DoctorCard from '@/component/DoctorCard';
import React from 'react';

export const metadata = {
  title: "All Appointments - DocAppoint ",
  description: "A doctor appointment booking application built with Next.js and Heroui.",
};

const AllAppointPage = async () => {
    const res = await fetch(`http://localhost:8000/getDoctorData`,{
        cache:'no-store'
    })
    const doctorsData = await res.json()
    return (
        <div className='bg-cyan-50'>
        <div className='grid grid-cols-4 mt-10 gap-4 px-20 pb-10'>
            {
                doctorsData.map(doctorData => <DoctorCard key={doctorData.id} doctorData={doctorData}></DoctorCard>)
            }
        </div>
        </div>
    );
};

export default AllAppointPage;