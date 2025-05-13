
'use client'
import React from 'react';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Navigation Links */}
          <div className="flex space-x-8">
           
            <Link href="/labtest" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600">
              LabTest
            </Link>
            <Link href="/booking" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-blue-600">
              Booking
            </Link>
          </div>

          {/* Right: User Icon (visible after login) */}
          <div className="flex items-center">
            <UserCircleIcon className="h-8 w-8 text-gray-700 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;