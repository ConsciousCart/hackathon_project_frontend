import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { UserButton } from "@clerk/nextjs";

interface HowHealthyAreYouProps {
  onComplete: (profile: { [key: string]: boolean }) => void;
}

const HowHealthyAreYou: React.FC<HowHealthyAreYouProps> = ({ onComplete }) => {
  const [healthProfile, setHealthProfile] = useState({
    diabetic: false,
    strictHealthGoals: false,
    normal: false,
  });

  const handleCheckboxChange = (key: keyof typeof healthProfile) => {
    setHealthProfile(() => {
      const newProfile: typeof healthProfile = {
        diabetic: false,
        strictHealthGoals: false,
        normal: false,
        [key]: true,
      };
      return newProfile;
    });
  };

  const handleSave = () => {
    onComplete(healthProfile);
  };

  return (
    <div className="bg-black text-white overflow-hidden w-full p-4 flex flex-col h-full">
      <div className="h-1/2">
        <div className="flex items-center justify-between">
          <TypographyP className="text-3xl lg:text-xl font-semibold">
            Health Snapshot
          </TypographyP>
          <UserButton
            signInUrl="/sign-in"
            appearance={{
              elements: {
                userButtonPopoverActionButton:
                  "bg-blue-500 text-white py-2 px-3 rounded",
              },
            }}
          />
        </div>
        <div className="flex flex-col my-3 space-y-3">
          {Object.entries(healthProfile).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-3">
              <Checkbox
                id={key}
                checked={value}
                onCheckedChange={() =>
                  handleCheckboxChange(key as keyof typeof healthProfile)
                }
                className={`border-2 ${
                  value ? "border-[#CCFF00]" : "border-gray-500"
                }`}
              />
              <Label htmlFor={key} className="text-xl lg:text-base capitalize">
                {key === "strictHealthGoals" ? "Strict health goals" : key}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <button
        className="w-full bg-yellow-400 py-3 mb-3 text-black font-bold rounded-md"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default HowHealthyAreYou;
