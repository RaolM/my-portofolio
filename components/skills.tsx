import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, FileJson, Layers, Server, Database, Globe, Terminal, Cpu } from 'lucide-react'

export function Skills() {
  const skills = [
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Palette },
    { name: "JavaScript", icon: FileJson },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "Laravel", icon: Database },
    { name: "React", icon: Globe },
    { name: "Git", icon: Terminal },
    { name: "RESTful APIs", icon: Cpu },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <skill.icon className="mr-2" />
                {skill.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experienced in using {skill.name} for building modern web applications.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

