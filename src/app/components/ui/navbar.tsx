"use client"
import { useState } from "react"
import { HoveredLink, Menu, MobileMenu, MobileLink } from "../../components/ui/navbar-menu"
import { cn } from "../../lib/utils"

export function NavigationBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}>
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <HoveredLink href="#tech-stacks">Tech Stack</HoveredLink>
          <HoveredLink href="#experience">Experience</HoveredLink>
          <HoveredLink href="#download-resume">Download Resume</HoveredLink>
        </Menu>
      </div>

      <div className="md:hidden relative">
        <div className="bg-black dark:bg-black border border-white/[0.2] rounded-full shadow-input flex justify-between items-center px-6 py-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-neutral-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
          <MobileLink href="#tech-stacks" onClick={closeMobileMenu}>
            Tech Stack
          </MobileLink>
          <MobileLink href="#experience" onClick={closeMobileMenu}>
            Experience
          </MobileLink>
          <MobileLink href="#download-resume" onClick={closeMobileMenu}>
            Download Resume
          </MobileLink>
        </MobileMenu>
      </div>
    </div>
  )
}
