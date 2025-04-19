"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Roshan Poudel</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          A passionate developer specializing in web development, UI/UX design, and building digital experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View my work</a>
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ros4n" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/roshan-poudel-268266343/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/Rosh4n___" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 hidden md:block"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}

