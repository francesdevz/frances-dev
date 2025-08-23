import React from "react"
import { PointerHighlight } from "./pointer-highlight"

const Experiences = () => {
    return (
        <div 
            className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8"
            id="experience"
        >            
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 mt-20">
                <div className="flex flex-col text-center md:text-left">
                    <PointerHighlight
                        rectangleClassName="bg-blue dark:bg-blue-700 border-neutral-300 dark:border-neutral-600 leading-loose w-120"
                        pointerClassName="text-white-500 h-4 w-4"
                        containerClassName="inline-block mr-1"
                    >
                        <p className="relative z-10 mt-4 text-lg text-white opacity-90">
                            Professional Experience
                        </p>
                    </PointerHighlight>                  
                    <hr className="mt-4"/>
                </div>
                <div className="w-full flex flex-col lg:flex-row flex-wrap gap-8">
                    <div className="bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-lg flex-1 min-w-[300px]">
                        <div className="flex flex-col md:flex-col gap-4 md:gap-8">
                            <div className="md:w-1/4">
                                <p className="relative z-10 text-lg text-white opacity-90">
                                   Alliance Software Inc.
                                </p>
                               <p className="relative z-10 text-lg text-white opacity-90">
                                    Software Engineer - II
                                </p>
                                 <p className="relative z-10 text-lg text-white opacity-90">
                                    Dec 2023 - Present
                                </p>
                            </div>    
                            <div className="md:w-3/4">
                                <p className="text-white text-justify leading-relaxed">
                                    I architected and built dynamic, data-heavy front-end interfaces in React, creating advanced state management solutions and complex business logic to deliver a seamless user experience. On the back-end, I designed and developed scalable Spring Boot services and MySQL databases that powered these interfaces, ensuring robust data flow and system reliability that directly supported core business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Experiences