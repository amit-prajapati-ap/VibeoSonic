import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { HoverBorderGradient } from "./ui/hover-border-gradient"

const Hero = () => {
  return (
    <div className="h-auto md:min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-50 left-0 md:-top-40 md:left-40"
          fill="white"
        />
        <Spotlight
          className="hidden xl:block -top-50 right-0 md:-top-30 rotate-[110deg]"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-nuetral-300">Master the art of music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, we&apos;ve got you covered.</p>

        <div className="mt-10 flex items-center justify-center">
          <Link href={'/courses'}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="cursor-pointer"
            >
              <span>Explore Courses</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
