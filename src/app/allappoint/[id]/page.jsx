import React from 'react';
import DoctorDetails from '@/component/DoctorDetails';
const DoctorDetailsPage = async ({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:8000/getDoctorData/${id}`, {
        cache:'no-store'
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