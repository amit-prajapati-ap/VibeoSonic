'use client'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Ananya Sharma",
            title: "Aspiring Vocalist",
            quote: "This course transformed how I approach music. The structured lessons, real-time feedback, and practice tracks helped me find my voice and build confidence. I highly recommend it to anyone serious about learning music."
        },
        {
            name: "Rahul Mehta",
            title: "Guitar Enthusiast",
            quote: "I’ve tried multiple online music platforms, but this one stands out. The instructors break down every concept clearly, and the community support kept me motivated. It’s like having a personal mentor at home."
        },
        {
            name: "Meera Iyer",
            title: "High School Student",
            quote: "As a beginner, I was nervous, but the step-by-step guidance made it so easy to follow. The interactive exercises and feedback system were game changers. I actually look forward to every practice session now!"
        },
        {
            name: "Karan Desai",
            title: "Electronic Music Producer",
            quote: "The course gave me a solid foundation in music theory, which I had been avoiding for years. It’s practical, well-paced, and creatively designed. This platform truly bridges the gap between hobbyist and pro."
        },
        {
            name: "Priya Banerjee",
            title: "Freelance Music Teacher",
            quote: "The course content is gold—rich in detail, yet beginner-friendly. I’ve even recommended it to my own students. The platform’s focus on real application and creativity makes it a valuable resource for all ages."
        }
    ];
    return (
        <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <h2 className="sm:text-4xl md:text-5xl text-3xl mx-12 font-semibold tracking-wide bg-clip-text text-transparent z-10 mb-14 bg-gradient-to-b from-blue-400 via-gray-300 text-center to-red-300">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="w-full max-w-6xl">

                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
