'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import React from 'react';

const Profile = () => {
       const user = authClient.useSession()?.data?.user;
       console.log(user)
    return (
        <div>
            <Card>
sdfdsfsdfdsfdsfsdfdsf
            </Card>
        </div>
    );
};

export default Profile;