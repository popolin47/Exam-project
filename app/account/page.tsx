import { Link, background } from '@chakra-ui/react';
import React from 'react';




export default function Home() {
  return  (
    <div>
        <div className='flex items-center justify-center pt-7 m-32'>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h1 className='text-center m-12 font-extrabold'>Please Login First :3</h1>
            <div className='items-center justify-between m-12  '>
                
            <Link
                href="/login"
                className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
            </Link>
            <Link
                href="/"
                className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ready to Exam
            </Link>
            </div>
        </div>
        </div>
    </div>
  );
}
