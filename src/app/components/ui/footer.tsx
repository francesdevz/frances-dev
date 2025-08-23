import {
  IconBrandLinkedinFilled,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandThreads
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-dark-900 text-neutral-400 py-8 px-4 md:px-8">
      <hr className="mb-8"/>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {currentYear} / Frances Khem Andre Donaire
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandGithub className="w-6 h-5"/>
              </a>              
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandThreads className="w-6 h-5"/>
              </a>              
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandGmail className="w-6 h-5"/>
              </a>              
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandLinkedinFilled className="w-6 h-5"/>
              </a>              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}