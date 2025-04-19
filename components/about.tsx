"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image src="/placeholder.svg?height=600&width=600" alt="Your Name" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a passionate developer with over 5 years of experience in creating beautiful, functional websites and
              applications. My journey in tech began when I built my first website at the age of 15, and I've been
              hooked ever since.
            </p>
            <p className="text-muted-foreground">
              I specialize in front-end development with React and Next.js, but I'm also comfortable working with
              back-end technologies. I believe in writing clean, maintainable code and creating intuitive user
              experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
              with new recipes in the kitchen.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-medium mb-2">Education</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>BS in Computer Science</span>
                  <span className="text-muted-foreground">Thapathali Campus, 2023-2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Web Development Bootcamp</span>
                  <span className="text-muted-foreground">Coding Academy, 2017</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

