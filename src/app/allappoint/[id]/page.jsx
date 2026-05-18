import React from 'react';
import DoctorDetails from '@/component/DoctorDetails';
const DoctorDetailsPage = async ({params}) => {
    const {id} = await params
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
        cache:'no-store'
    })
    const doctors = await res.json();

    const doctorData = doctors.find(doctor => doctor.id == id)
    return (
        <div>
            <DoctorDetails doctorData={doctorData} />
        </div>
    );
};

export default DoctorDetailsPage;