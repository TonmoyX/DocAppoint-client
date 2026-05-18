import React from 'react';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center px-5'>
            <div className='text-center'>
                <FaExclamationTriangle className='text-8xl text-cyan-600 mx-auto mb-8 animate-bounce' />
                <h1 className='text-7xl font-bold text-cyan-900 mb-4'>404</h1>
                <h2 className='text-4xl font-bold text-cyan-600 mb-4'>Page Not Found</h2>
                <p className='text-xl text-cyan-400 mb-8 max-w-md mx-auto'>
                    Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link href="/">
                    <button className='px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;