"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const months = [
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];
const days = ["Mon", "", "Wed", "", "Fri", "", ""];

const getColor = (count: number) => {
  if (count === 0) return "bg-gray-800";
  if (count === 1) return "bg-green-900";
  if (count === 2) return "bg-green-700";
  return "bg-green-500";
};

const generateRandomContributions = () => {
  const contributions = [];
  let totalContributions = 0;

  for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 52; j++) {
      const count = Math.floor(Math.random() * 4);
      row.push(count);
      totalContributions += count;
    }
    contributions.push(row);
  }

  return { contributions, totalContributions };
};

export function ContributionGraph() {
  const { contributions, totalContributions } = React.useMemo(
    generateRandomContributions,
    []
  );

  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {totalContributions} contributions in the last year
        </h2>
        <button className="text-sm text-gray-400 flex items-center">
          Contribution settings
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <div className="flex mb-2">
          {months.map((month, i) => (
            <div key={i} className="flex-1 text-xs text-gray-400">
              {month}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col mr-2 text-xs text-gray-400">
            {days.map((day, i) => (
              <div key={i} className="h-[15px] leading-[15px]">
                {day}
              </div>
            ))}
          </div>
          <div className="flex-1">
            {contributions.map((row, i) => (
              <div key={i} className="flex gap-[2px] mb-[2px]">
                {row.map((day, j) => (
                  <div
                    key={j}
                    className={`w-[10px] h-[10px] ${getColor(day)}`}
                    aria-label={`${day} contributions on day ${j + 1} of week ${
                      Math.floor(j / 7) + 1
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
          <a href="#" className="hover:text-gray-300">
            Learn how we count contributions
          </a>
          <div className="flex items-center">
            <span className="mr-2">Less</span>
            <div className="flex gap-[2px]">
              <div className="w-[10px] h-[10px] bg-gray-800" />
              <div className="w-[10px] h-[10px] bg-green-900" />
              <div className="w-[10px] h-[10px] bg-green-700" />
              <div className="w-[10px] h-[10px] bg-green-500" />
            </div>
            <span className="ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
