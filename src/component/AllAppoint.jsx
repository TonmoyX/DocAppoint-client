'use client'
import { Button, Card } from '@heroui/react';
import EditModal from './EditModal';
import { toast } from 'react-toastify';

const AllAppoint = ({ data, onDelete }) => {
    const { doctorName, email, gender, phone, date, time, _id } = data;
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getPatientData/${_id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
        const data = await res.json()
        if (res.ok) {
            onDelete(_id)
            toast.success('Deleted Successfully !!!')
        }

    }
    return (
        <div className=''>
            <div className=''>
                <Card className=' w-80 md:w-90 lg:w-100 hover:shadow-lg hover:transition hover:shadow-cyan-300'>
                    <Card.Header>
                        <p className="font-bold text-2xl">{doctorName}</p>
                    </Card.Header>

                    <p className='text-lg font-semibold text-muted'>Email: {email}</p>
                    <p className='text-lg font-semibold text-muted'>Gender: {gender}</p>
                    <p className='text-lg font-semibold text-muted'>Phone: {phone}</p>
                    <p className='text-lg font-semibold text-muted'>Date: {date}</p>
                    <p className='text-lg font-semibold text-muted'>Time: {time}</p>
                    <div className='flex items-center'>
                        <EditModal data={data}></EditModal>
                        <Button onClick={handleDelete} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 ml-5'>Delete</Button>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default AllAppoint;