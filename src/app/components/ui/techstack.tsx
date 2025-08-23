import { TechStacksMap }  from "./TechStackComponent"

const TechStacks = () => {
    return (
       <div 
        className="relative mt-60 flex min-h-screen w-full flex-col items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8"
        id="tech-stacks"
       >            
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 mt-20">
                <div className="flex flex-col text-center text-left ">
                   <p className="relative z-10 mt-4 text-lg text-white opacity-90">
                       Tech Stack
                    </p>
                    <hr className="mt-4"/>
                </div>
                <TechStacksMap/>
            </div>    
        </div>
    )
}

export default TechStacks