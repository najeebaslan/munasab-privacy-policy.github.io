
import React from "react";

interface FullPolicyContentProps {
  section: string;
}

const FullPolicyContent = ({ section }: FullPolicyContentProps) => {
  // Content from the translation file
  const contentMap = {
    "introduction": (
      <div className="space-y-4">
        <p>
          Welcome to our app. By using the app, you agree to these terms and conditions. Please read them carefully.
        </p>
        <p>
          Munasab is an innovative application that provides a comprehensive platform for managing and booking services related to events and occasions.
          Whether you're planning a wedding, corporate event, or any special occasion, Munasab aims to simplify the search and booking process
          while enabling service providers to manage their offerings effectively.
        </p>
      </div>
    ),
    "information-collected": (
      <div className="space-y-4">
        <p>
          We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.
        </p>
        <h4 className="font-medium text-lg mt-4 mb-2">Types of information we collect:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account Information: When you create an account, we collect your name, email address, phone number, and account type (client or owner).</li>
          <li>Profile Information: Optional information such as gender and profile pictures that you choose to provide to enhance your experience.</li>
          <li>Location Information: With your consent, we collect location data to provide location-based services.</li>
          <li>Service Information: If you're a service provider, we collect details about the services you offer.</li>
          <li>Communication Data: When you communicate with other users through our chat feature, we store those messages.</li>
        </ul>
      </div>
    ),
    "how-we-use-info": (
      <div className="space-y-4">
        <p>
          We use the information we collect to provide and improve our services, to communicate with you, and to protect the app and its users.
        </p>
        <h4 className="font-medium text-lg mt-4 mb-2">Specifically, we use your information to:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide our services and facilitate bookings between users and service providers</li>
          <li>Personalize your experience and offer content that matches your interests and preferences</li>
          <li>Improve and develop new features for our app</li>
          <li>Send notifications about bookings, offers, and updates</li>
          <li>Ensure the security and proper functioning of our services</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Respond to your inquiries and provide customer support</li>
        </ul>
      </div>
    ),
    "sharing-info": (
      <div className="space-y-4">
        <p>
          We do not share your personal information with third parties except as described in this policy or with your consent.
        </p>
        <h4 className="font-medium text-lg mt-4 mb-2">We may share information in the following circumstances:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>With service providers who need access to such information to carry out work on our behalf</li>
          <li>Between users and service providers to facilitate bookings and communications</li>
          <li>When required by law or legal process</li>
          <li>In connection with a merger, sale, or acquisition of all or a portion of our company</li>
          <li>To protect the rights, property, or safety of our users or others</li>
        </ul>
        <p className="mt-4">
          We never sell your personal information to third parties for marketing purposes.
        </p>
      </div>
    ),
    "security": (
      <div className="space-y-4">
        <p>
          We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access.
        </p>
        <h4 className="font-medium text-lg mt-4 mb-2">Our security measures include:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encryption of sensitive data both in transit and at rest</li>
          <li>Regular security assessments and audits</li>
          <li>Access controls that limit who can access user information</li>
          <li>Employee training on privacy and security practices</li>
          <li>Secure authentication methods including verification codes</li>
        </ul>
        <p className="mt-4">
          While we implement safeguards designed to protect your information, no security system is impenetrable. 
          We cannot guarantee the security of information you transmit to us, and you do so at your own risk.
        </p>
      </div>
    )
  };

  return contentMap[section as keyof typeof contentMap] || <p>Section content not available</p>;
};

export default FullPolicyContent;
