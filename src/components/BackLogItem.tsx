"use client";

import clsx from "clsx";
import { Braces, ChevronDown, ChevronLeft, Dot } from "lucide-react";
import { useState } from "react";

type Status = "To do" | "Doing" | "Done";

interface ITask {
  name: string;
  status: Status;
}

interface IBackLogItemProps {
  readonly status: Status;
  readonly name: string;
  readonly description?: string;
  readonly tasks?: ITask[];
}

export function BackLogItem({
  name,
  status,
  description,
  tasks = [],
}: IBackLogItemProps) {
  const [show, setShow] = useState(false);

  const statusClass = (status: Status) =>
    clsx("size-2 rounded-full", {
      "bg-gray-400": status == "To do",
      "bg-blue-400": status == "Doing",
      "bg-green-400": status == "Done",
    });

  const containerClass = () =>
    clsx("border border-black hover:border-white rounded", {
      "border-white": show,
    });

  const buttonClass = () =>
    clsx("flex justify-between w-full items-center p-2 rounded", {
      "bg-gray-950 border-b": show,
    });

  return (
    <div className={containerClass()}>
      <button className={buttonClass()} onClick={() => setShow(!show)}>
        <h3>{name}</h3>
        <span className="text-sm flex gap-1 items-center">
          <div className={statusClass(status)} />
          {status}
          {show ? <ChevronDown /> : <ChevronLeft />}
        </span>
      </button>
      {show && (
        <div className="p-2 space-y-2">
          <p>{description}</p>
          <div>
            {tasks.map((t, i) => (
              <div
                key={`task-${name}-${i}`}
                className="flex justify-between items-center"
              >
                <h4 className="flex">
                  <Dot /> {t.name}
                </h4>
                <span className="text-sm flex gap-1 items-center">
                  <div className={statusClass(t.status)} />
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
