import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
          <HashLoader className='text-7xl flex mx-auto py-50' />
        </div>
    );
};

export default loading;