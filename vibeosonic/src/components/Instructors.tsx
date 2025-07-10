import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Boxes } from "./ui/background-boxes"

const Instructors = () => {
    const instructors = [
        {
            id: 1,
            name: 'Elena Briggs',
            designation: 'Vocal Coach',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            name: 'Marcus Lee',
            designation: 'Guitar Instructor',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 3,
            name: 'Priya Kapoor',
            designation: 'Classical Pianist',
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 4,
            name: 'David Chen',
            designation: 'Drumming Specialist',
            image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 5,
            name: 'Isabelle Moreau',
            designation: 'Music Theory Expert',
            image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        }
    ];

    return (
        <div className="relative h-[40rem] w-full overflow-hidden flex items-center justify-center flex-col">
            <Boxes />
            <div className="flex items-center justify-center flex-col z-10">
                <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300">Meet Our Instructors</h2>
                <p className="text-base text-center md:text-lg mt-4 sm:text-2xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-tl from-gray-500 via-white to-blue-600">Discover the talented professionals who will guide your musical journey</p>
            </div>
            <div className="flex flex-row items-center justify-center mb-10 w-full z-10 mt-8">
                <AnimatedTooltip items={instructors} />
            </div>
        </div>
    )
}

export default Instructors
