
import React from "react";
import { Shield } from "lucide-react";

interface PrivacyPolicyHeaderProps {
  appName: string;
  lastUpdated: string;
}

const PrivacyPolicyHeader = ({ appName, lastUpdated }: PrivacyPolicyHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Shield className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{appName} Privacy Policy</h1>
          <p className="text-blue-100 mb-4">Last updated on {lastUpdated}</p>
          <p className="max-w-2xl text-blue-50 text-sm md:text-base">
            We value your privacy and are committed to protecting your personal information. 
            This policy explains how we collect, use, and safeguard your data when you use our app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyHeader;
