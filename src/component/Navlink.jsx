'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
   const pathname = usePathname();
    const isActive = href === pathname
    return <Link href={href} className={`${isActive && 'bg-cyan-500 rounded-2xl px-3 py-2 text-white'}`}>{children}</Link>         
   
};

export default NavLink;