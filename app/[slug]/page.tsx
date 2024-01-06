import React from 'react';
import { exams } from '../data';
import { useRouter } from 'next/router';
import {
  Button,
  Center,
  Icon,
  Link,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

export default function Page({ params }: { params: { slug: string, questionSlug: string } }) {
    const router = useRouter();
    const { slug, questionSlug } = router.query;
    const examIndex = parseInt(slug as string);
    const questionIndex = parseInt(questionSlug as string);

    const exam = exams[examIndex];

    if (!exam || isNaN(examIndex) || isNaN(questionIndex) || !exam.questions[questionIndex]) {
        return (
            <div className='flex items-center justify-center pt-14'>
                <h1>Question Not Found</h1>
            </div>
        );
    }

    const currentQuestion = exam.questions[questionIndex];

    return (
        <div>
            <div className='flex items-center justify-center pt-48'>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exam.name}</h5>
                    <p className=" py-5 font-normal text-gray-700 dark:text-gray-400">
                        Question{questionIndex}: {currentQuestion.question}
                    </p>
                    <Link
                        href={`/exam/${slug}/question/${parseInt(questionSlug as string) + 1}`}
                        className="pt-12 inline-flex justify-center items-center px-2 sm:px-3 py-5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-#265874 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Next Question
                    </Link>
                </div>
            </div>
        </div>
    );
}
