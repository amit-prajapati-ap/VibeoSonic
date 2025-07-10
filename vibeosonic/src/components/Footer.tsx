import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-gray-400 pt-12 flex flex-col items-center'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:text-lg text-base sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>About Us</h2>
            <div>
                <p>VibeoSonic helps you learn music anytime, anywhere with expert-led lessons, interactive tools, and personalized progress tracking for all skill levels.
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>Quick Links</h2>
            <div className='flex flex-col gap-2'>
                <Link href={'/'} className='max-w-12'>Home</Link>
                <Link href={'/courses'} className='max-w-12'>Courses</Link>
                <Link href={'/contact'} className='max-w-12'>Contact</Link>
                <Link href={'/about'} className='max-w-12'>About</Link>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>Follow Us</h2>
            <div className='flex flex-col gap-2'>
                <a href="https://x.com/Prajapatiamitap" target='_blank' className='flex gap-2 max-w-28 items-center'><FaTwitter size={24}/> Twitter(X)</a>
                <a href="https://www.linkedin.com/in/amit-prajapati-0544882b5/" target='_blank' className='flex gap-2 max-w-28 items-center'><FaLinkedin size={24}/> LinkedIn</a>
                <a href="https://github.com/amit-prajapati-ap" target='_blank' className='flex gap-2 max-w-28 items-center'><FaGithub size={24}/> GitHub</a>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-teal-400 via-gray-300 to-teal-300'>Contact Us</h2>
            <div className='flex flex-col'>
                <p>Chandigarh, India</p>
                <p>Chandigarh 134017</p>
                <p>Email: apamit@gmail.com</p>
            </div>
        </div>
      </div>

      <div className='text-center text-gray-500 py-4'>© 2025 VibeoSonic. All rights reserved.</div>
    </div>
  )
}

export default Footer
