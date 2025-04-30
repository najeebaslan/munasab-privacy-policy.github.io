
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import FullPolicyContent from "./FullPolicyContent";

interface PolicySectionProps {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const PolicySection = ({ id, title, content, icon, isActive }: PolicySectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "scroll-mt-24 py-6",
        isActive ? "animate-pulse-once" : ""
      )}
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      
      <div className="text-gray-700 space-y-4 pl-12">
        {/* We'll use the detailed content component here */}
        <FullPolicyContent section={id} />
      </div>
      
      <Separator className="mt-8" />
    </section>
  );
};

export default PolicySection;
