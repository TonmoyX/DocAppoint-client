import React from 'react';
import DoctorDetails from '@/component/DoctorDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
  title: "Doctor Details - DocAppoint ",
  description: "A doctor appointment booking application built with Next.js and Heroui.",
};

const DoctorDetailsPage = async ({params}) => {
    const {id} = await params
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getDoctorData/${id}`, {
        cache:'no-store', 
        headers:{
            authorization: `Bearer ${token}` 
        }
    })
    const doctors = await res.json();

    const doctorData = doctors
    return (
        <div>
            <DoctorDetails doctorData={doctorData} />
        </div>
    );
};

export default DoctorDetailsPage;