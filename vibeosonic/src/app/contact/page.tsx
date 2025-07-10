'use client'

import React, { useState, FormEvent } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BackgroundBeams } from '@/components/ui/background-beams'

const page = () => {
    const [isSending, setIsSending] = useState<boolean>(false)

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)
        setTimeout(() => {
            toast.success('Message Sent Successfully', {
            autoClose: 3000,
            theme: 'dark',
        })
        setIsSending(false)
        }, 2000);
    }

    return (
        <div className='text-white bg-black min-h-screen'>
            <section
                id="contact"
                className="px-[7vw] py-36 max-w-[1900px] mx-auto font-sans relative z-10"
            >
                <ToastContainer />

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
                    <div className="w-24 h-1 mx-auto mt-2 bg-[#8245ec]"></div>
                    <p className="text-gray-300 mt-4 text-lg font-semibold">
                        I'd love to hear from you, reach out for any opportunities or questions!
                    </p>
                </div>

                <div className="mx-auto max-w-[1024px] flex justify-between gap-4 flex-col md:flex-row bg-slate-950 rounded-2xl p-4 xs:p-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md">
                    {/* Contact Header */}
                    <div className="flex flex-col justify-between gap-4 text-purple-600 w-full">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-semibold">CONTACT WITH ME 🚀</h2>
                            <div className="h-1 w-16 bg-purple-600"></div>
                        </div>
                        <p className="font-[500]">Email Us On: apamit6239@gmail.com</p>
                    </div>

                    {/* Contact Body */}
                    <form onSubmit={sendEmail} className="w-full flex flex-col gap-4">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="EMAIL*"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white focus:outline-none border border-gray-600 focus:border-purple-600"
                        />
                        <input
                            type="text"
                            name="user_name"
                            placeholder="NAME*"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white focus:outline-none border border-gray-600 focus:border-purple-600"
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="SUBJECT*"
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white focus:outline-none border border-gray-600 focus:border-purple-600"
                        />
                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            rows={4}
                            required
                            className="w-full p-3 rounded-md bg-[#131025] text-white focus:outline-none border border-gray-600 focus:border-purple-600"
                        />

                        {/* Send Button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 text-white font-semibold rounded-md hover:opacity-90 transition duration-300 text-xl ${isSending ? 'cursor-not-allowed opacity-70' : ''
                                }`}
                        >
                            {isSending ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </section>
            <BackgroundBeams className='z-1' />
        </div>
    )
}

export default page
