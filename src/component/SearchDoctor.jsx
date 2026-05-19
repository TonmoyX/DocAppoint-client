'use client';

import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const SearchDoctor = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await fetch(`http://localhost:8000/getDoctorData`, {
                    cache: 'no-store'
                });
                const data = await res.json();
                setDoctorsData(data);
                setFilteredDoctors(data);

                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch doctors:', error);
                setLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        filterDoctors(term);
    };

    const filterDoctors = (term) => {
        const filtered = doctorsData.filter(doctor => {
            return doctor.name?.toLowerCase().includes(term) ||
                doctor.specialization?.toLowerCase().includes(term);
        });
        setFilteredDoctors(filtered);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setFilteredDoctors(doctorsData);
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <p className='text-lg text-gray-600'>Loading doctors...</p>
            </div>
        );
    }

    return (
        <div className='bg-cyan-50 min-h-screen py-10'>
            <div className='px-4 md:px-20'>
                {/* Search and Filter Section */}
                    {/* Search Input */}
                    <div className='mb-4 flex flex-col mx-auto'>
                        <input
                            type="text"
                            placeholder="Search by name or specialization..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className='w-80 mx-auto border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                        />
                    

                    {/* Clear Filters Button */}
                   
                </div>

                {/* Results Count */}
                <div className='mb-6'>
                    <p className='text-lg font-semibold text-gray-700'>
                        Found <span className='text-cyan-600'>{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Doctors Grid */}
                {filteredDoctors.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {filteredDoctors.map(doctorData => (
                            <DoctorCard key={doctorData.id} doctorData={doctorData} />
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center py-16 bg-white rounded-lg'>
                        <svg className='w-16 h-16 text-gray-400 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <p className='text-lg text-gray-600 font-semibold'>No doctors found</p>
                        <p className='text-gray-500'>Try adjusting your search name or specialization</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchDoctor;