import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const DoctorDetails = ({ doctorData }) => {
     const { name, image, specialty, experience, hospital, fee, rating } = doctorData

     return (
        <div>
            <Card className='mx-auto'>
                <div className='flex items-center gap-4'>
                <div className=''>
                <h2>{name}</h2>
                <p>{specialty}</p>
                <p>Experience: {experience} years</p>
                <p>Hospital: {hospital}</p>
                <p>Fee: ${fee}</p>
                <p>Rating: {rating}</p>
                </div>
                <div>
                <Image src={image} alt={name} height={400} width={400} />
                </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDetails;