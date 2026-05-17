import React from 'react';
import { Link, Button } from "@heroui/react";
import Image from 'next/image';
import NavLink from './Navlink';

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg bg-cyan-100/50">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Image src={'https://img.magnific.com/premium-vector/stethoscope-symbol-health-logo-silhouette-vector-white-background_931294-1816.jpg'} className='rounded-[50%]' alt={'logo'} width={40} height={40}></Image>
                        <p className="font-bold">DocAppoint</p>
                    </div>
                    <ul className="flex items-center gap-6">
                        <li className='font-semibold'><NavLink href='/'>Home</NavLink></li>
                        <li className='font-semibold'><NavLink href='/allappoint'>All Appoint</NavLink></li>
                        <li className='font-semibold'><NavLink href='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                    <ul className="flex items-center gap-4">
                        <li><Button>Log In</Button></li>
                        <li><Button>Sign Up</Button></li>
                    </ul>

                </header>
            </nav>
            {/* With right-aligned content */}

        </div>
    );
};

export default Navbar;