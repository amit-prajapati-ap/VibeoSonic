'use client'
import Link from 'next/link'
import coursedata from '../data/music_courses.json'
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

const FeaturedCourses = () => {

    const featuredCourses = coursedata.courses.filter((course:Course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>FEATURED COURSES</h2>
                    <p className='text-3xl mt-4 sm:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-tl from-gray-500 via-white to-blue-600'>Learn With the Best</p>
                </div>
            </div>

            <div className='mt-10 mx-16'>
                <div className='grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>{featuredCourses.map((course:Course) => (
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className='text-sm text-black mt-4 dark:text-neutral-200'>Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}</div>
            </div>

            <div className="mt-10 flex items-center justify-center">
                <Link href={'/courses'}>
                    <HoverBorderGradient
                        containerClassName="rounded-md"
                        as="button"
                        className="cursor-pointer"
                    >
                        <span>View All Courses</span>
                    </HoverBorderGradient>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
