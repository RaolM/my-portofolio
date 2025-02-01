import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    { name: "Project 1", description: "A web application built with React and Node.js" },
    { name: "Project 2", description: "An e-commerce platform using Laravel and MySQL" },
    { name: "Project 3", description: "A responsive website designed with Tailwind CSS" },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <Button variant="outline">View Project</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

