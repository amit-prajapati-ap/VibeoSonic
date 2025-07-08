'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const WhyChooseUs = () => {

    const content = [
        {
            title: "Interactive Learning",
            description: `Our platform redefines how you learn music by making the process deeply interactive and immersive. Traditional music education often relies on one-way teaching, but we flip the model. With built-in practice modules, rhythm games, and AI-led guidance, you actively engage with your lessons every step of the way. You’re not just watching or listening—you’re performing, experimenting, and improving in real-time. Interactive exercises allow you to apply concepts instantly, whether you’re learning chord progressions, tuning techniques, or vocal warmups. This hands-on approach accelerates skill development and keeps learners engaged longer. Whether you're a complete beginner or looking to sharpen your existing skills, our interactive system adapts to your pace. No more dull theory lectures—every lesson is designed to be an experience.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-500))] text-white">
                    Interactive Learning
                </div>
            ),
        },
        {
            title: "Real-Time Feedback",
            description: `One of the key challenges in learning music online is the lack of immediate correction. With our platform’s real-time feedback engine, powered by advanced AI and audio analysis, you’ll receive instant insights as you play or sing. Whether you're off pitch, out of tempo, or playing the wrong chord, the system alerts you immediately. This mirrors the value of having a personal instructor present—except it’s always available. Visual indicators, performance graphs, and voice modulation detection help you understand not only what went wrong, but why. It bridges the gap between practice and perfection. Plus, real-time feedback creates a tight feedback loop, essential for mastering complex skills quickly. Practice smarter, not longer.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--cyan-500))] text-white">
                    Real-Time Feedback
                </div>
            ),
        },
        {
            title: "Structured Progress",
            description: `Learning music is not just about random practice—it’s about progression. Our platform offers a structured, milestone-based journey tailored to your instrument and skill level. You’ll start with the basics and gradually move through levels that cover rhythm, technique, music theory, improvisation, and performance. Each level is carefully designed to reinforce prior skills while introducing new challenges. Badges and checkpoints mark your progress, so you never feel lost. Moreover, the learning path adjusts dynamically based on your performance in exercises and assessments. Whether you're learning piano, guitar, vocals, or drums, you get a roadmap that keeps you on track. We take the guesswork out of what to learn next.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--amber-500))] text-white">
                    Structured Progress
                </div>
            ),
        },
        {
            title: "Community & Collaboration",
            description: `Music is meant to be shared. Our platform includes built-in community features that let you learn alongside others, exchange feedback, and collaborate on projects. Join open jam sessions, participate in peer challenges, or simply vibe with other artists. Community spaces are moderated, supportive, and theme-driven—be it by genre, skill level, or instrument. You can even co-create compositions and upload performances for community review. Whether you're into classical ragas or indie rock, there's a corner for you. The social aspect of music learning keeps motivation high and brings a sense of belonging. It's not just an app; it's your band, your classroom, and your stage.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--fuchsia-500))] text-white">
                    Community & Collaboration
                </div>
            ),
        },
        {
            title: "AI-Powered Voice Coaching",
            description: `Vocalists often struggle with finding accurate, consistent feedback. Our AI-powered voice coach listens to your recordings, analyzes pitch, tone, breathing patterns, and vibrato, and offers specific, actionable feedback. Unlike static tutorials, the AI evolves with your voice, recognizing patterns over time. It can identify if you’re straining, missing notes, or lacking resonance, and guide you through real-time adjustments. It also suggests personalized warmups and scale practices based on your vocal type and daily condition. This is next-level vocal training—smart, adaptive, and always available. Think of it as your 24/7 vocal mentor.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--blue-500))] text-white">
                    AI-Powered Voice Coaching
                </div>
            ),
        },
        {
            title: "Flexible Scheduling",
            description: `Modern learners have busy, unpredictable lives. Our platform is designed for maximum flexibility. Choose when to learn, how long to practice, and how often to repeat lessons. Whether you’re a college student, working professional, or full-time artist, the app adjusts to your availability. Lessons are modular and self-paced, so you can squeeze in a quick jam session between meetings or binge through a weekend crash course. Daily streak reminders, calendar syncs, and intelligent scheduling ensure you're always on track without overwhelming your schedule. We believe music should fit your life, not fight it.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-400),var(--lime-500))] text-white">
                    Flexible Scheduling
                </div>
            ),
        },
        {
            title: "Gamified Experience",
            description: `Gamification adds fun and pressure-free motivation to your music learning journey. Every time you master a skill, complete a lesson, or pass a challenge, you earn points, badges, and level-ups. Leaderboards let you compare progress with friends or global users. Daily practice streaks keep you accountable, and special unlockables like bonus tracks or advanced exercises make the learning journey exciting. This format boosts retention, keeps learners engaged, and turns routine practice into something you look forward to. It’s like Duolingo, but for music.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--rose-500))] text-white">
                    Gamified Experience
                </div>
            ),
        },
        {
            title: "Multi-Instrument Support",
            description: `Why limit yourself to one instrument? Our platform supports vocals, piano, guitar, bass, drums, and more—all in a single account. You can seamlessly switch between instruments, access dedicated lessons, and even try cross-instrument exercises. It's ideal for multi-instrumentalists or anyone curious to explore different sounds. The app keeps separate progress tracking for each instrument, so your growth is organized and clear. Plus, combination lessons let you understand how instruments interact in real band settings. Learn harmony, arrangement, and musical layering all in one platform.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-400),var(--orange-400))] text-white">
                    Multi-Instrument Support
                </div>
            ),
        },
        {
            title: "Certificate & Showcase",
            description: `Every achievement deserves recognition. Upon completion of levels and courses, you receive digital certificates you can share on LinkedIn, portfolios, or resumes. But we go further—we host virtual showcases and competitions where you can perform live or submit recorded performances to a global audience. These events are reviewed by music educators and industry experts. It’s not just learning—it’s a launchpad. You get a portfolio of performance clips, improvement metrics, and credentials to show off your growth as a musician. Perfect for aspiring pros, educators, or hobbyists with ambition.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--indigo-400))] text-white">
                    Certificate & Showcase
                </div>
            ),
        },
        {
            title: "Personalized Learning Engine",
            description: `Every learner is unique. Our AI-powered personalization engine tracks your performance, learning habits, and musical preferences to create a custom roadmap just for you. If you’re excelling in rhythm but struggling with scales, the engine adjusts your curriculum to reinforce weak areas. It even recommends content based on the genres and artists you love. Think of it as Spotify meets a private tutor. You’re never stuck on generic material—you’re always on a path designed just for your musical DNA. This adaptive approach ensures you stay engaged, improve steadily, and enjoy every minute of your journey.`,
            content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-700),var(--sky-500))] text-white">
                    Personalized Learning Engine
                </div>
            ),
        },
    ];



    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs
