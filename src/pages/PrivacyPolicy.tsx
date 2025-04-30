
import React, { useState } from "react";
import { Shield, Book, FileText, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PrivacyPolicyHeader from "@/components/privacy-policy/PrivacyPolicyHeader";
import PolicyNavigation from "@/components/privacy-policy/PolicyNavigation";
import PolicySection from "@/components/privacy-policy/PolicySection";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Info className="h-5 w-5" />,
      content: "Welcome to our app. By using the app, you agree to these terms and conditions. Please read them carefully."
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      icon: <FileText className="h-5 w-5" />,
      content: "We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide."
    },
    {
      id: "how-we-use-info",
      title: "How We Use Your Information",
      icon: <Book className="h-5 w-5" />,
      content: "We use the information we collect to provide and improve our services, to communicate with you, and to protect the app and its users."
    },
    {
      id: "sharing-info",
      title: "Sharing Your Information",
      icon: <FileText className="h-5 w-5" />,
      content: "We do not share your personal information with third parties except as described in this policy or with your consent."
    },
    {
      id: "security",
      title: "Security",
      icon: <Shield className="h-5 w-5" />,
      content: "We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access."
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PrivacyPolicyHeader appName="Munasab" lastUpdated="2025/2/12" />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Sidebar (visible on md+ screens) */}
          <div className="hidden md:block">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-blue-700">Policy Sections</h2>
              <PolicyNavigation 
                sections={sections} 
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
              
              <Separator className="my-6" />
              
              <Button 
                variant="outline" 
                className="w-full mt-4 border-blue-600 text-blue-700 hover:bg-blue-50"
                onClick={() => window.print()}
              >
                Print Policy
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <ScrollArea className="h-[calc(100vh-200px)] md:h-auto pr-4">
                {sections.map((section) => (
                  <PolicySection 
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    icon={section.icon}
                    content={section.content}
                    isActive={activeSection === section.id}
                  />
                ))}
                
                <div className="mt-12 border-t pt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      By using Munasab, you agree to our Privacy Policy and Terms of Service.
                    </p>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                      Agree
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
          
          {/* Mobile Navigation (visible only on small screens) */}
          <div className="block md:hidden">
            <div className="bg-white rounded-lg shadow-md p-4 mt-6">
              <h3 className="text-sm font-medium mb-3 text-gray-500">Navigate to section:</h3>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <Button 
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {section.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
