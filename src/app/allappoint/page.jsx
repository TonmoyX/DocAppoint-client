import DoctorCard from '@/component/DoctorCard';
import SearchDoctor from '@/component/SearchDoctor';
import React from 'react';

export const metadata = {
  title: "All Appointments - DocAppoint ",
  description: "A doctor appointment booking application built with Next.js and Heroui.",
};

const AllAppointPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getDoctorData`,{
        cache:'no-store'
    })
    const doctorsData = await res.json()
    return (
        <div className='bg-cyan-50'>
            <h1 className='text-4xl text-center font-bold mb-4 text-cyan-900 pt-10'>All Appointments</h1>
            <p className='text-lg text-center text-muted font-bold'>Find the right doctor for your needs.</p>
            <div>
                <SearchDoctor></SearchDoctor>
            </div>



{/* <div className='grid grid-cols-4 mt-10 gap-4 px-20 pb-10'>
            {
                doctorsData.map(doctorData => <DoctorCard key={doctorData.id} doctorData={doctorData}></DoctorCard>)
            }
        </div> */}
        </div>
    );
};

export default AllAppointPage;