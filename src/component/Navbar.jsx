'use client'
import React from 'react';
import { Button } from "@heroui/react";
import Image from 'next/image';
import NavLink from './Navlink';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const Navbar = () => {
    const userData = authClient.useSession();
    const data = userData?.data?.user
    console.log(data)
    const handleSignOut = async () => {
        await authClient.signOut();
    }
    return (
        <div>
            <nav className="sticky top-0 px-15 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg bg-cyan-100/50">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Image src={'https://img.magnific.com/premium-vector/stethoscope-symbol-health-logo-silhouette-vector-white-background_931294-1816.jpg'} className='rounded-[50%]' alt={'logo'} width={40} height={40}></Image>
                        <p className="font-bold">DocAppoint</p>
                    </div>
                    <ul className="flex items-center gap-6">
                        <li className='font-semibold'><NavLink href='/'>Home</NavLink></li>
                        <li className='font-semibold'><NavLink href='/allappoint'>All Appoint</NavLink></li>
                        {
                            data &&
                            <li className='font-semibold'><NavLink href='/dashboard'>Dashboard</NavLink></li>
                        }
                        {
                            !data &&
                            <li className='font-semibold border-none'><Link href='/login' className='bg-none border-none'>Dashboard</Link></li>
                        }
                    </ul>
                    {
                        data &&
                        <ul className="flex items-center gap-4">
                            <Link href='/'><li><Image className='rounded-[50%]' src={data.image} alt="profile pic" width={50} height={50}></Image></li></Link>
                            <Link href='/'><li><Button onClick={handleSignOut} variant='danger'>Sign Out</Button></li></Link>
                        </ul>
                    }
                    {!data &&
                        <ul className="flex items-center gap-4">
                            <Link href='/login'><li><Button>Log In</Button></li></Link>
                            <Link href='/signup'><li><Button>Sign Up</Button></li></Link>
                        </ul>
                    }
                </header>
            </nav>
            {/* With right-aligned content */}

        </div>
    );
};

export default Navbar;