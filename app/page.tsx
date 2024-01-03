import { Link, background } from '@chakra-ui/react';
import React from 'react';
import { exams } from './data';



export default function Home() {
  return  (
    <div>
    <div className="flex flex-col items-center justify-center pt-7">
      <h1 className="m-6 text-xl font-bold">Exams Available</h1>
      {exams.map((exam, index) => (
        <div
          key={index}
          className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 mx-2 sm:mx-4"
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{exam.name}</h5>
          <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            Instructor: {exam.instructor}<br />
            Open Date Time: {exam.opendatetime}<br />
            Closed Date Time: {exam.cloasedatetime}
          </p>
          <Link
            href={`/exam/${index}`}
            className="inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ready
            <svg
              className="rtl:rotate-180 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 ms-1 sm:ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
            </svg>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
