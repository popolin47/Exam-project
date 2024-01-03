import React from 'react';
import { exams } from '../../data';
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
    const index = parseInt(slug);
    const exam = exams[index];

  if (!exam) {
    return (
        <div className='flex items-center justify-center pt-14'>
            <h1>Exam Not Found</h1>
        </div>
    );
  }


  return (
    <div>
        <div className='flex items-center justify-center pt-48'>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">


            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exam.name}</h5>
            <p className=" py-5 font-normal text-gray-700 dark:text-gray-400">Instructor: {exam.instructor}<br />
                Open Date Time: {exam.opendatetime}<br />
                Closed Date Time: {exam.cloasedatetime}</p>
            <Link
                href={'/exam/${index}/question/0'}
                className=" pt-12 inline-flex justify-center items-center px-2 sm:px-3 py-5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ready to Exam
            </Link>
            </div>
           
        </div>
    </div>
    );
}
