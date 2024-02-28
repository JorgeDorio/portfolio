import { ProjectCard } from "@/components/projectCard";

export default function Portfolio() {
  return (
    <main className="p-6 flex gap-4">
      <ProjectCard
        href="portfolio"
        title="Portfolio"
        stacks={["react"]}
        description="Created to showcase my projects, my professional experiences and talk about myself"
        status="Development"
      />
      <ProjectCard
        href="warehouse"
        title="Warehouse System"
        stacks={["react", "dotnet"]}
        description="Warehouse system where it is possible to request materials and control stock"
        status="Prototyping"
      />
    </main>
  );
}
