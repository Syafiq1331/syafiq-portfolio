import React from 'react'
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import ProjectItem from './ProjectItem';

export default function SectionProjects() {
    return (
        <section className='py-28' id='Projects'>
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Some of my projects</SectionText>
                <div className='flex -mx-4 mt-20 flex-wrap'>
                    <div className='md:w-6/12 w-full px-4 pb-8'>
                        <a href="https://syafiq1331.github.io/Simple-Bookshelf/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/1.png"
                                name="Bookshelf App"
                                description="Bookshelf App is a web application to manage your book collection. This app is built with native javascript for dicoding submission"
                            />
                        </a>
                    </div>
                    <div className='md:w-6/12 w-full px-4 pb-8'>
                        <a href="https://syafiq1331.github.io/faqihDev/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/2.png"
                                name="Faqih Portfolio"
                                description="Faqih Portfolio is a web application to show my portfolio. This app is built with React Js & tailwindcss for css framework"
                            />
                        </a>
                    </div>

                    <div className='md:w-6/12 w-full px-4 pb-8 md:pb-0'>
                        <a href="https://syafiq1331.github.io/boostraps5_template/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/3.png"
                                name="Boostrap5 Template"
                                description="Boostrap5 Template for make a blog"
                            />
                        </a>
                    </div>
                    <div className='md:w-6/12 w-full px-4 pb-8 md:pb-0'>
                        <a href="https://syafiq1331.github.io/PemudaCoding_LandingPage/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/4.png"
                                name="Pemuda Coding blog"
                                description="Pemuda Coding blog is a blog for sharing about programming. This blog is built with bootstrap 5"
                            />
                        </a>
                    </div>

                    <div className='md:w-6/12 w-full px-4 pb-8'>
                        <a href="https://syafiq1331.github.io/QuizApp/index.html" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/5.png"
                                name="Quiz App"
                                description="Quiz App is a web application to make a quiz. This app is built with native Javascript"
                            />
                        </a>
                    </div>
                    <div className='md:w-6/12 w-full px-4 pb-8'>
                        <a href="https://syafiq1331.github.io/PokemonAPI/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/6.png"
                                name="Simple pokemon app"
                                description="Simple pokemon app is a web application to show pokemon list. This app is built with React Js"
                            />
                        </a>
                    </div>

                    <div className='md:w-6/12 w-full px-4 pb-8 md:pb-0'>
                        <a href="https://syafiq1331.github.io/tekajefest/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/7.png"
                                name="Tekaje Fest landing page"
                                description="Tekaje Fest landing page is a landing page for Tekaje Fest. This landing page is built with bootstrap 5"
                            />
                        </a>
                    </div>
                    
                    <div className='md:w-6/12 w-full px-4 pb-8 md:pb-0'>
                        <a href="http://syafiqrzf.my.id/" target="_blank" rel="noopener noreferrer">
                            <ProjectItem
                                image="/projects/8.png"
                                name="Pemuda Coding landing page company"
                                description="Pemuda Coding landing page company is a landing page for Pemuda Coding. This landing page is built with next js & tailwindcss"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
