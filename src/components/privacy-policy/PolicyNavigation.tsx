
import React from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface PolicyNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const PolicyNavigation = ({ sections, activeSection, onSectionClick }: PolicyNavigationProps) => {
  return (
    <nav>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-left rounded-md text-sm transition-colors",
                activeSection === section.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <span className="mr-2 opacity-70">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PolicyNavigation;
