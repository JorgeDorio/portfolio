import { ProjectCard } from "@/components/projectCard";

export default function Portfolio() {
  return (
    <main>
      <h1 className="text-center text-lg font-bold">My personal projects</h1>
      <div className="p-6 flex gap-4 flex-wrap justify-center">
        <ProjectCard
          href="stock-manager"
          title="Stock Manager"
          stacks={["react", "dotnet"]}
          description="Inventory management and purchasing system"
          status="Prototyping"
        />
      </div>
    </main>
  );
}
