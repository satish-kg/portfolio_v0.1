import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] mx-auto p-4 py-16 md:px-20">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">Contact</h1>
            <form
                action="https://getform.io/f/fe0a60cc-3828-4bd4-a2b8-bd4dbf730968"
                method="POST"
                encType="multipart/form-data"
                className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                    Name:
                    </label>
                    <input
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    name="name"
                    autoComplete="on"
                    placeholder="Enter your name"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                    Phone:
                    </label>
                    <input
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    name="phone"
                    autoComplete="on"
                    placeholder="Enter your phone number"
                    />
                </div>
                </div>
                
                <div className="flex flex-col mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2">Email:</label>
                <input
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="email"
                    name="email"
                    autoComplete="on"
                    placeholder="Enter your email"
                />
                </div>
                
                <div className="flex flex-col mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2">Subject:</label>
                <input
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    name="subject"
                    placeholder="Enter subject of the mail"
                />
                </div>
                
                <div className="flex flex-col mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2">Message:</label>
                <textarea
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows="5"
                    name="message"
                    placeholder="Enter your message"
                ></textarea>
                </div>
                
                <button className="mt-6 w-full bg-[#001b5e] text-white py-3 rounded-lg font-medium hover:bg-[#003399] transition duration-300">
                Send Message
                </button>
            </form>
            </div>

    )
}

export default Contact;