import Link from "next/link"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'Mastering Rhythm & Timing',
            description: 'Explore core rhythmic patterns and timing techniques to boost your sense of groove.',
            slug: 'mastering-rhythm-timing',
            isFeatured: true,
        },
        {
            title: 'Introduction to Songwriting',
            description: 'Learn how to structure lyrics and melodies to write songs that connect with listeners.',
            slug: 'introduction-to-songwriting',
            isFeatured: true,
        },
        {
            title: 'Building Chords & Progressions',
            description: 'Understand how chords are built and how to use progressions to create emotional impact.',
            slug: 'building-chords-progressions',
            isFeatured: true,
        },
        {
            title: 'Improvisation for Beginners',
            description: 'Break free from sheet music and develop the skills to improvise confidently on any instrument.',
            slug: 'improvisation-for-beginners',
            isFeatured: true,
        },
        {
            title: 'Ear Training Essentials',
            description: 'Sharpen your listening skills to identify pitch, intervals, and chords by ear.',
            slug: 'ear-training-essentials',
            isFeatured: true,
        }
    ];

    return (
        <div className="p-12 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>FEATURES WEBINARS</h2>
                    <p className='text-3xl mt-4 sm:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-tl from-gray-500 via-white to-blue-600'>Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect items={featuredWebinars.map((webinar) => ({ title: webinar.title, description: webinar.description, link: `/courses/${webinar.slug}` }))} />
                </div>

                <div className=" flex items-center justify-center">
                    <Link href={'/courses'}>
                        <HoverBorderGradient
                            containerClassName="rounded-md"
                            as="button"
                            className="cursor-pointer"
                        >
                            <span>View All Webinars</span>
                        </HoverBorderGradient>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars
