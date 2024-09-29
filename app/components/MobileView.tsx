import React, { useState } from "react";
import AnalysisScreen from "./AnalysisScreen";
import UploadPDFButton from "./UploadPDFButton";
import MobileViewFooter from "./MobileViewFooter";
import SyncEmailButton from "./SyncEmailButton";
import HowHealthyAreYou from "./HowHealthyAreYou";
import InvoiceScanner from "./InvoiceScanner";
import ProfileSection from "./ProfileScreen";

const MobileView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Scan" | "Report" | "Analysis" | "Profile"
  >("Scan");
  const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);

  const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
    // Check if at least one option is selected
    if (Object.values(profile).some((value) => value)) {
      setHealthProfileCompleted(true);
    }
  };

  const handleCapture = (imageDataUrl: string) => {
    // Handle the captured image
    console.log("Image captured:", imageDataUrl);
    // Add your logic here to process the captured image
  };

  return (
    <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
      {/* ACTIVE TAB CONTENT */}
      {activeTab === "Profile" ? (
        <ProfileSection />
      ) : (
        <>
          {!healthProfileCompleted ? (
            <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
              <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
            </div>
          ) : (
            /* SCAN INVOICE COMPONENT */
            <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
              <InvoiceScanner onCapture={handleCapture} />

              {/* DIVIDER */}
              <div className="flex items-center justify-center my-6 w-full">
                <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
              </div>

              {/* UPLOAD PDF AND SYNC EMAIL BUTTONS */}
              <div className="w-full">
                <UploadPDFButton />
                <SyncEmailButton />
              </div>
            </div>
          )}
        </>
      )}

      {/* FOOTER */}
      {healthProfileCompleted && (
        <MobileViewFooter onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default MobileView;