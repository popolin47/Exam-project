import React from 'react';
import { users } from '../../data';
import {
  Button,
  Center,
  Icon,
  Link,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const foundUser = users.find((user) => user.id.toString() === slug);

  return (
    <div>
      {foundUser ? (
        
          <div className="flex items-center justify-center pt-14" >
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={foundUser.imgsrc} alt="ss" />

      <div className="p-5">
          <h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white items-center justify-center">
            {foundUser.fname}   {foundUser.sname} <br/>
          </h1>
          <div>
            <h3>tel: {foundUser.tel} <br/>year: {foundUser.year}<br/> Section: {foundUser.sec}</h3>
          </div>
        <div className='flex items-center justify-center'>
            <Link
                href="/"
                className="inline-flex justify-center items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ready to Exam
            </Link>
        </div>
          </div>
      </div>
    </div>
       
      ) : (
        <Center>
          <p>User not found</p>
        </Center>
      )}
    </div>
  );
}