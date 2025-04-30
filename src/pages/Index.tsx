
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Munasab Privacy Policy Builder</h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage and access your application's privacy policy with a clean, professional interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/privacy-policy">
              <Shield className="mr-2 h-5 w-5" />
              View Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
