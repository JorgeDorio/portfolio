"use client";

import React, { useState, useEffect } from "react";

interface ITerminalProps {
  fullText: string;
}

const Terminal = ({ fullText }: ITerminalProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fullText.length > text.length) {
        setText(fullText.substring(0, text.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [text, fullText]);

  return (
    <div className="bg-[#131313] p-4 rounded-lg">
      <div>
        <span>╭─</span>
        <strong className="text-[#1EF956]">dorio@machine</strong>{" "}
        <strong className="text-[#BD93F9]">~/dev/portfolio</strong>{" "}
        <span className="text-[#FEE75D]">
          &lt;main
          <span className="text-[#ED4245]">●</span>
          &gt;
        </span>
      </div>
      <div>
        <span className="pr-2">╰─$</span>
        <span className="font-bold">{text}</span>
      </div>
    </div>
  );
};

export default Terminal;
