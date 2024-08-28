import { BackLogItem } from "@/components/BackLogItem";

export default function StockManager() {
  return (
    <main>
      <div className="p-6 max-w-[800px] m-auto space-y-4">
        <h1 className="text-center text-lg font-bold">Stock Manager</h1>
        <h2 className="font-bold">Problem</h2>
        <p>
          I worked at a construction company where the supervisors of the works
          requested materials from the buyers, who checked the quantities
          available in the warehouse and bought the difference. This whole
          process was done via email, phone, or verbally. This process was slow,
          and information was lost.
        </p>
        <h2 className="font-bold">Solution</h2>
        <p>
          A system where the site supervisor can generate material requests, and
          the buyer receives the material list considering the materials already
          available in the warehouse.
        </p>
        <h2 className="font-bold text-center">Backlog</h2>
        <section className="space-y-4">
          <BackLogItem
            name="Authentication"
            status="Done"
            description="The master administrator must be able to register a company"
            tasks={[
              { name: "[Backend] Password encyptation", status: "Done" },
              { name: "[Backend] JWT Generator", status: "Done" },
              { name: "[Backend] Login route", status: "Done" },
            ]}
          />
          <BackLogItem
            name="Company registration"
            status="Done"
            description="The master administrator must be able to register a company"
            tasks={[
              { name: "[Frontend] Form page", status: "Done" },
              { name: "[Backend] API route", status: "Done" },
            ]}
          />
          <BackLogItem
            name="User registration"
            status="Done"
            description="The master administrator must be able to generate a registration link to the company manager where the manager must register personally. The link must be sent automatically via email. The registration link can only work once"
            tasks={[
              { name: "[Frontend] Initial form", status: "Done" },
              { name: "[Backend] E-mail sender", status: "Done" },
              { name: "[Frontend] User form", status: "Done" },
            ]}
          />
          <BackLogItem
            name="Products, stations and suppliers CRUDs"
            status="Done"
            description="Should be possible create, read, update and delete Products, stations and suppliers from database"
            tasks={[
              { name: "[Frontend] Pages", status: "Done" },
              { name: "[Backend] Logical management", status: "Done" },
            ]}
          />
          <BackLogItem
            name="Material requisition system"
            status="Doing"
            description="The user should create a material requisition, where automatically the system check the inventory to get the difference and send to buyer"
            tasks={[
              { name: "[Frontend] Requester page", status: "Done" },
              { name: "[Backend] Logical management", status: "Doing" },
              { name: "[Backend] Integration with inventory", status: "To do" },
              { name: "[Frontend] Buyer page", status: "To do" },
              {
                name: "[Backend] data distribution and status filter",
                status: "To do",
              },
              { name: "[Frontend] Storekeeper page", status: "To do" },
            ]}
          />
          <BackLogItem
            name="Budget forecast"
            status="To do"
            description="Upon receiving a material request, the buyer must be able to generate a report with a preliminary budget based on the latest purchase values ​​and suppliers of the requested items"
            tasks={[{ name: "Not described yet", status: "To do" }]}
          />
        </section>
      </div>
    </main>
  );
}
