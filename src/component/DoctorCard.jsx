'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from 'react-icons/io';

const DoctorCard = ({ doctorData }) => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    const data = doctorData
    // console.log(data)
    return (
        <div >
            <div>
                <Card className='hover:scale-105 hover:shadow-lg hover:transition hover:shadow-cyan-300 hover:duration-300 h-120 transition'>
                    <Image className='w-100 h-60 rounded-2xl' src={data.image} alt={data.name} width={1000} height={1000}></Image>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-bold'>{data.name}</h1>
                        <p className='font-bold flex gap-2 items-center'><IoIosStar className='text-yellow-500' /> {data.rating}</p>
                    </div>
                    <div>
                        <h3 className='text-muted font-semibold'>Specialty : {data.specialty}</h3>
                        <h3 className='text-muted font-semibold'>Experience : {data.experience}</h3>
                        <h3 className='text-muted font-semibold'>Hospital : {data.hospital}</h3>
                        <h3 className='text-muted font-semibold'>Fee : ${data.fee}</h3>
                    </div>
                    {
                        !user &&
                        <Link href={`/login`}><Button className='w-full bg-cyan-500 hover:transition hover:bg-cyan-900 duration-300 text-white'>View Details</Button></Link>
                    }
                    {
                        user && <Link href={`/allappoint/${data.id}`}><Button className='w-full mt-auto bg-cyan-500 hover:transition hover:bg-cyan-900 duration-300 text-white'>View Details</Button></Link>
                    }
                </Card>
            </div>
        </div>
    );
};

export default DoctorCard;