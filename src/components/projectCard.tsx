import clsx from "clsx";
import Link from "next/link";

type Status = "Prototyping" | "Development" | "Done";

interface IProjectCardProps {
  readonly href: string;
  readonly title: string;
  readonly stacks: string[];
  readonly description: string;
  readonly status: Status;
}

export function ProjectCard({
  href,
  title,
  stacks,
  description,
  status,
}: IProjectCardProps) {
  const statusClass = (status: Status) =>
    clsx("size-2 rounded-full", {
      "bg-yellow-400": status == "Prototyping",
      "bg-blue-400": status == "Development",
      "bg-green-400": status == "Done",
    });

  return (
    <Link href={`portfolio/${href}`}>
      <div className="border border-gray-400 rounded p-4 hover:border-white w-80 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{title}</h1>
          <span className="text-sm flex gap-1 items-center">
            <div className={statusClass(status)} />
            {status}
          </span>
        </div>
        <p className="text-sm mt-4 mb-2">{description}</p>
        <div className="flex gap-1 justify-end">
          {stacks.map((stack, i) => (
            <span
              key={`stack-${i}`}
              className="bg-white text-xs px-2 text-black rounded-full font-semibold"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
