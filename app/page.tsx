import { ModeToggle } from "@/components/mode-toggle"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            Portfolio
          </a>
          <nav className="hidden md:flex items-center  gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <ModeToggle />
        </div>
      </header>

      <main className="container pt-24 pb-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

