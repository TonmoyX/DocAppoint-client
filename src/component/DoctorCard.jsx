import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from 'react-icons/io';

const DoctorCard = ({doctorData}) => {
    const data = doctorData
    console.log(data)
    return (
        <div>
            <div>

            </div>
             <div>
                <Card>
                    <Image className='w-100 h-60 rounded-2xl' src={data.image} alt={data.name} width={1000} height={1000}></Image>
                    <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>{data.name}</h1>
                    <p className='font-bold flex gap-2 items-center'><IoIosStar className='text-yellow-500'/> {data.rating}</p>
                    </div>



                    <Button variant='outline' className='w-full'><Link href={`${process.env.BETTER_AUTH_URL}/allappoint/${data.id}`}>View Details</Link></Button>
                </Card>
             </div>
        </div>
    );
};

export default DoctorCard;