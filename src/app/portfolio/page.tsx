import { ProjectCard } from "@/components/projectCard";

export default function Portfolio() {
  return (
    <main>
      <h1 className="text-center text-lg font-bold">My personal projects</h1>
      <div className="p-6 flex gap-4 flex-wrap justify-center">
        <ProjectCard
          href="https://www.stclimatizacao.com/"
          title="ST - Climatização (LP)"
          stacks={["frontend"]}
          description="Inventory management and purchasing system"
          status="Done"
          target="_blank"
        />
         <ProjectCard
          href="https://mamutepesados.com.br/"
          title="Mamute (LP)"
          stacks={["frontend"]}
          description="Inventory management and purchasing system"
          status="Done"
          target="_blank"
        />
        <ProjectCard
          href="portfolio/stock-manager"
          title="Stock Manager"
          stacks={["frontend", "backend"]}
          description="Inventory management and purchasing system"
          status="Prototyping"
        />
      </div>
    </main>
  );
}
