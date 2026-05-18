import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import BookingModal from './BookingModal';

const DoctorDetails = ({ doctorData }) => {
     const { name, image, specialty,availability, description, experience, hospital, fee, rating } = doctorData

     return (
        <div className='py-10 mt-10'>
            <Card className='mx-auto w-60 md:w-200 lg:w-250 hover:shadow-lg hover:transition hover:shadow-cyan-300 py-15'>
                <div className='flex items-center gap-6 mx-auto'>
                <div>
                <Image className='rounded-2xl' src={image} alt={name} height={600} width={600} />
                </div>
                <div className=''>
                <h2 className='text-4xl font-semibold'>{name}</h2>
                <p className='text-lg text-muted font-bold mt-6'>{specialty}</p>
                <p className='text-md mt-4'>Experience: {experience} years</p>
                <p className='text-md mt-4'>Hospital: {hospital}</p>
                <p className='text-md mt-4'>Availability: {availability}</p>
                <p className='text-md mt-4'>Description: {description}</p>
                <p className='text-xl font-bold mt-4'>Fee: ${fee}</p>
                <p className='text-md mt-4 font-semibold'>Rating: ⭐ {rating}</p>
                <BookingModal className='mt-6 justify-end bg-cyan-500 duration-300 hover:transition hover:bg-cyan-900 text-white' doctorData={doctorData}/>
                {/* <Button className='mt-6 justify-end bg-cyan-500 duration-300 hover:transition hover:bg-cyan-900 text-white'>Book Appointment</Button> */}
                </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDetails;