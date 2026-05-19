'use client'
import React, { useState } from 'react';
import { Button } from "@heroui/react";
import Image from 'next/image';
import NavLink from './Navlink';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const userData = authClient.useSession();
    const data = userData?.data?.user

    const handleSignOut = async () => {
        await authClient.signOut();
        callbackUrl: "/"
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className="sticky top-0 px-6 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg bg-cyan-100/50">
                <header className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={'https://img.magnific.com/premium-vector/stethoscope-symbol-health-logo-silhouette-vector-white-background_931294-1816.jpg'}
                            className='rounded-[50%]'
                            alt={'logo'}
                            width={40}
                            height={40}
                        />
                        <p className="font-bold">DocAppoint</p>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li className='font-semibold'><NavLink href='/'>Home</NavLink></li>
                        <li className='font-semibold'><NavLink href='/allappoint'>All Appointments</NavLink></li>
                        {
                            data &&
                            <li className='font-semibold'><NavLink href='/dashboard'>Dashboard</NavLink></li>
                        }
                        {
                            !data &&
                            <li className='font-semibold border-none'><Link href='/login' className='bg-none border-none'>Dashboard</Link></li>
                        }
                    </ul>

                    {/* Desktop Auth Section */}
                    <div className="hidden md:flex items-center gap-4">
                        {
                            data &&
                            <>
                                <Link href='/'><Image className='rounded-[50%] w-10 h-10' src={data.image} alt="profile pic" width={100} height={100} /></Link>
                                <Button onClick={handleSignOut} variant='danger'>Sign Out</Button>
                            </>
                        }
                        {!data &&
                            <>
                                <Link href='/login'><Button>Log In</Button></Link>
                                <Link href='/signup'><Button>Sign Up</Button></Link>
                            </>
                        }
                    </div>

                    {/* Mobile Menu Toggle Button */}

                    <div className="md:hidden flex items-center gap-2">
                         {
                            data && 
                            <>
                                    <Link href='/' onClick={closeMenu}><Image className='rounded-[50%] w-10 h-10' src={data.image} alt="profile pic" width={100} height={100} /></Link>
                                <Button onClick={() => { handleSignOut(); closeMenu(); }} variant='danger' className='w-20'>Sign Out</Button>
                            </>
                        }
                        {
                            !data && <>
                             <Link href='/login' onClick={closeMenu} className='w-full'><Button className='w-full'>Log In</Button></Link>
                             </>
                        }
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center text-4xl cursor-pointer"
                        >
                        {isMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
                    </button>
                        </div>
                </header>

               
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4 absolute top-16 left-0 right-0 shadow-lg">
                        
                        <ul className="flex flex-col gap-4 px-6">
                            <li className='font-semibold'><NavLink href='/' onClick={closeMenu}>Home</NavLink></li>
                            <li className='font-semibold'><NavLink href='/allappoint' onClick={closeMenu}>All Appointments</NavLink></li>
                            {
                                data &&
                                <li className='font-semibold'><NavLink href='/dashboard' onClick={closeMenu}>Dashboard</NavLink></li>
                            }
                            {
                                !data &&
                                <li className='font-semibold border-none'><Link href='/login' onClick={closeMenu} className='bg-none border-none'>Dashboard</Link></li>
                            }
                        </ul>

                        {/* Mobile Auth Section */}
                        <div className="flex flex-col gap-3 px-6 mt-4 border-t border-gray-200 pt-4">
                            {!data &&
                                <>
                                    <Link href='/signup' onClick={closeMenu} className='w-full'><Button className='w-full'>Sign Up</Button></Link>
                                </>
                            }
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;