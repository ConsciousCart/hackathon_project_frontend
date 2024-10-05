// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   Camera,
//   FileText,
//   PieChart,
//   BarChart2,
//   User,
// } from "lucide-react";

// type Tab = "Scan" | "Invoices" | "Invoice analysis" | "Analysis" | "Profile";

// interface MobileMenuProps {
//   initialActiveTab?: Tab;
//   onTabChange?: (tab: Tab) => void;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({
//   initialActiveTab = "Scan",
//   onTabChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<Tab>(initialActiveTab);

//   const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
//     { id: "Scan", icon: <Camera size={20} />, label: "Scan" },
//     { id: "Invoices", icon: <FileText size={20} />, label: "Invoices" },
//     {
//       id: "Invoice analysis",
//       icon: <PieChart size={20} />,
//       label: "Invoice Analysis",
//     },
//     {
//       id: "Analysis",
//       icon: <BarChart2 size={20} />,
//       label: "Monthly analysis",
//     },
//     { id: "Profile", icon: <User size={20} />, label: "Profile" },
//   ];

//   const handleTabClick = (tab: Tab) => {
//     setActiveTab(tab);
//     setIsOpen(false);
//     if (onTabChange) {
//       onTabChange(tab);
//     }
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
//       <div className="flex items-center justify-between px-4 py-2">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="focus:outline-none"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <span className="font-semibold">{activeTab}</span>
//       </div>
//       {isOpen && (
//         <div className="absolute bottom-full left-0 right-0 bg-gray-800 shadow-lg">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`flex items-center w-full px-4 py-3 ${
//                 activeTab === tab.id ? "bg-gray-700" : ""
//               }`}
//               onClick={() => handleTabClick(tab.id)}
//             >
//               {tab.icon}
//               <span className="ml-3">{tab.label}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileMenu;


import React, { useState } from "react";
import {
  Camera,
  FileText,
  PieChart,
  BarChart2,
  User,
} from "lucide-react";

type Tab = "Scan" | "Invoices" | "Invoice analysis" | "Analysis" | "Profile";

interface MobileMenuProps {
  initialActiveTab?: Tab;
  onTabChange?: (tab: Tab) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  initialActiveTab = "Scan",
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialActiveTab);

  const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
    { id: "Scan", icon: <Camera size={20} />, label: "Scan" },
    { id: "Invoices", icon: <FileText size={20} />, label: "Invoices" },
    {
      id: "Invoice analysis",
      icon: <PieChart size={20} />,
      label: "Invoice",
    },
    {
      id: "Analysis",
      icon: <BarChart2 size={20} />,
      label: "Analysis",
    },
    { id: "Profile", icon: <User size={20} />, label: "Profile" },
  ];

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
      <div className="flex justify-between items-stretch">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center justify-center flex-1 py-2 px-1 relative ${
              activeTab === tab.id 
                ? "bg-gray-700 border-t-2 border-yellow-400" 
                : "border-t-2 border-transparent"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;