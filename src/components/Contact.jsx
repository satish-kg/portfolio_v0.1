import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040] m-auto p-4 py-16 md:pl-20'>
            <h1 className='py-4 text-center text-[#001b5e] pb-5 text-4xl font-bold'>Contact</h1>
            <form action='https://getform.io/f/fe0a60cc-3828-4bd4-a2b8-bd4dbf730968' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' autoComplete='on' name='name' placeholder='Enter your name'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' autoComplete='on' placeholder='Enter your phone number'></input>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' autoComplete='on' placeholder='Enter your email'></input>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='sumject' placeholder='Enter subject of the mail'></input>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message' placeholder='Enter your message'></textarea>
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 mb-4 w-full p-4 rounded-lg'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact;