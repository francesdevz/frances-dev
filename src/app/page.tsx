"use client"
import { useEffect, useState } from "react"
import { NavigationBar } from "./components/ui/navbar";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect-component";
import Experiences from "./components/ui/experience";
import { HeroParallaxMain } from "./components/ui/hero-parallax-component";
import TechStacks from "./components/ui/techstack";
import WorkWithMeForm from "./components/ui/Form";
import Footer from "./components/ui/footer";
import LoadingScreen from "./components/ui/LoadingScreen"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} duration={4000} />
      ) : (
        <div>
          <NavigationBar/>
          <BackgroundRippleEffect/>
          <Experiences/>
          <HeroParallaxMain/>
          <TechStacks/>
          <WorkWithMeForm/>
          <Footer/>
        </div>
      )}
    </>
  );

}
