'use client'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json"
import Image from "next/image";
interface CourseType {
    title: string,
    description: string,
    image: string
}
const page = () => {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-4xl font-bold text-center">All courses {courseData.courses.length}</h1>
            <div className="flex flex-wrap justify-center">
                {courseData.courses.map((course: CourseType) => (
                    <CardContainer key={course.title} className="inter-var mx-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://eduturns.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    href="https://mern-auth-ui-weld.vercel.app/"
                                    translateZ={20}
                                    as="a"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default page
