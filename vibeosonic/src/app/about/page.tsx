'use client'

import { HeroHighlight } from "@/components/ui/hero-highlight"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <div>
            <HeroHighlight className="flex max-w-6xl flex-col-reverse lg:flex-row 2xl:mx-auto md:mx-16 mx-8 my-56 gap-10 relative z-10">
                    <div className='flex flex-col md:items-start items-center gap-8 w-full z-50'>
                        <h2 className='text-[40px] leading-12 font-bold text-blue-600 text-center md:text-left'><span className='text-blue-400'>Empower your future</span> with the courses designed to fit your choice.</h2>
                        <p className='text-gray-200 text-center md:text-left'>VibeoSonic is a modern, full-stack music learning platform designed to simplify and elevate digital music education. It features secure authentication, seamless payment integration, and an intuitive UI for both learners and instructors. With real-time progress tracking, responsive design, and high-quality content delivery, VibeoSonic empowers users to explore, enroll, and engage with music courses effortlessly—anytime, anywhere..</p>
                        <Link href={'/courses'} className='px-4 py-2 w-28 text-white rounded-md bg-purple-700 hover:opacity-90 transition-opacity duration-200'>Enroll Now</Link>
                    </div>
                    <div className='h-[400px] xl:w-[800px] max-w-[400px] sm:max-w-full rounded-full border border-purple-500 overflow-hidden p-8 mx-auto'>
                        <Image src="/courses/music-prod.jpg" alt="Educational Image" className='object-cover rounded-full w-full h-full' />
                    </div>
                    <div className='lg:block hidden absolute w-8 h-8 bg-purple-600 rounded-full right-1/2 z-10'></div>
                    <div className='lg:block hidden absolute w-8 h-8 bg-purple-600 rounded-full right-0 bottom-0'></div>
            </HeroHighlight>
        </div>
    )
}

export default page
