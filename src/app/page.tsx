import { NavigationBar } from "./components/ui/navbar";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect-component";
import Experiences from "./components/ui/experience";
import { HeroParallaxMain } from "./components/ui/hero-parallax-component";
import TechStacks from "./components/ui/techstack";
import WorkWithMeForm from "./components/ui/Form";
import Footer from "./components/ui/footer";




export default function Home() {
  return (
    <div>
      <NavigationBar/>
      <BackgroundRippleEffect/>
      <Experiences/>
      <HeroParallaxMain/>
      <TechStacks/>
      <WorkWithMeForm/>
      <Footer/>
    </div>
  );
}
