import { Card } from '@heroui/react';
import React from 'react';

const PatientCard = () => {
    return (
        <div className='bg-cyan-100 px-5 py-10  md:px-20'>
            <h1 className='text-4xl md:text-6xl font-bold text-center text-cyan-600 mb-10'>Patient Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
                <Card className='bg-cyan-700 text-white hover:scale-105 transition duration-300'>
                    <h1>Saved me hours of waiting.</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                    <h1>I used to dread booking doctor appointments because of the endless phone tags and sitting in waiting rooms. With this platform, I booked a specialist in two minutes and was seen right on time. Absolute lifesaver for a tight schedule!</h1>
                    <h1>— Sarah K., Product Manager</h1>
                </Card>
                <Card className='bg-cyan-700 text-white hover:scale-105 transition duration-300'>
                    <h1>Found the exact specialist I needed.</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                    <h1>I was not entirely sure what kind of doctor I needed for my chronic back pain. The symptom-matching feature pointed me straight to a fantastic orthopedic specialist nearby. The entire process was seamless.</h1>
                    <h1>— David L., Software Engineer</h1>
                </Card>
                <Card className='bg-cyan-700 text-white hover:scale-105 transition duration-300'>
                    <h1>Incredibly simple and easy to use.</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                    <h1>I am not great with modern apps, but this interface is so clean and straightforward. I was able to book my follow-up appointment and access my medical notes without having to ask my grandkids for help.</h1>
                    <h1>— James T., Retired</h1>
                </Card>
                <Card className='bg-cyan-700 text-white hover:scale-105 transition duration-300'>
                    <h1>Perfect for managing my familys health.</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                    <h1>Keeping track of my kids vaccinations and my own check-ups used to be a mess of paperwork. Having all our digital prescriptions and schedules in one dashboard has made managing family healthcare so much easier.</h1>
                    <h1>— Elena R., Parent & Teacher</h1>
                </Card>
            </div>
        </div>
    );
};

export default PatientCard;