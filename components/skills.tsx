"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Palette, Server, Settings } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis"],
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "Photoshop", "Responsive Design", "UI/UX", "Wireframing"],
  },
  {
    category: "DevOps",
    icon: <Settings className="h-6 w-6" />,
    items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
  },
  {
    category: "Other",
    icon: <Code className="h-6 w-6" />,
    items: ["TDD", "Agile", "Scrum", "Problem Solving", "Team Collaboration", "Technical Writing"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">``
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

