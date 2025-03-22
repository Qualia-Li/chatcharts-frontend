import Link from "next/link"
import { Container } from "./ui/container"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-gray-200 bg-white/90 backdrop-blur-md z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">ChatSlide</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <div className="space-x-3">
              <Button variant="outline" size="sm">
                <Link href="https://chatslide.ai/signin">Log In</Link>
              </Button>
              <Button variant="default" size="sm">
                <Link href="https://chatslide.ai/signup">Try Free</Link>
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
} 