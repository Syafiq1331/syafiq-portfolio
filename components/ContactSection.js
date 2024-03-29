import React from 'react'
import SectionTitle from './SectionTitle';
import SectionText from './SectionText'
import ContactItem from './ContactItem';
import Field from './Field';
import Button from './Button';

export default function ContactSection() {
    return (
        <section className="container mx-auto px-10 2xl:px-0" id='Contacts'>
            <div className='bg-primaryGray flex flex-wrap rounded-lg'>
                <div className='md:w-6/12 w-full md:border-r border-b border-primaryGray-200'>
                    <div className="lg:py-16 lg:px-20 md:px-14 p-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionText left>Several ways to contact me.</SectionText>

                        <ContactItem
                            label="Gmail"
                            icon="/mail.svg"
                            value="syafiqrzf@gmail.com"
                            className="mt-10"

                        />

                        <ContactItem
                            label="Phone"
                            icon="/phone.svg"
                            value="081234567890"
                            className="mt-10"

                        />

                        <ContactItem
                            label="twitter"
                            icon="/twitter.svg"
                            value="@syafiqrzf"
                            className="mt-10"

                        />
                    </div>
                </div>
                {/* <div className='md:w-6/12 w-full'>
                    <form className='lg:py-16 lg:px-20 md:px-14 p-10'>
                        <div className='flex flex-wrap -mx-4 '>
                            <div className='lg:w-6/12 w-full px-4'>

                                <Field
                                    label="Name"
                                    name="Name"
                                    type="text"
                                />
                            </div>
                            <div className='lg:w-6/12 w-full px-4'>
                                <Field
                                    label="Email"
                                    name="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field
                            label="Subject"
                            name="subject"
                            type="text"
                        />

                        <Field
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className='text-right'>
                            <Button variant="black">Send</Button>
                        </div>
                    </form>
                </div> */}
            </div>
        </section>
    )
}
