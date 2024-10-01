// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     // Check if at least one option is selected
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleCapture = (imageDataUrl: string) => {
//     // Handle the captured image
//     console.log("Image captured:", imageDataUrl);
//     // Add your logic here to process the captured image
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices />
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner onCapture={handleCapture} />

//                 {/* DIVIDER */}
//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 {/* UPLOAD PDF AND SYNC EMAIL BUTTONS */}
//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {/* ACTIVE TAB CONTENT */}
//       {renderActiveTabContent()}

//       {/* FOOTER */}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     // Check if at least one option is selected
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = () => {
//     setUploadMessage("Invoice uploaded successfully!");
//     // You might want to switch to the 'Invoices' tab or update the UI in some way
//     // setActiveTab('Invoices');
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices />
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                 />
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 {/* DIVIDER */}
//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 {/* UPLOAD PDF AND SYNC EMAIL BUTTONS */}
//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {/* ACTIVE TAB CONTENT */}
//       {renderActiveTabContent()}

//       {/* FOOTER */}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(),
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setActiveTab('Invoices');
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                 />
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;

// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(),
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setActiveTab("Invoices");
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />;
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                 />
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"Scan" | "Invoices" | "Analysis" | "Profile">("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);

//   // Handle completion of the health profile
//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   // Handle successful invoice upload
//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(), // Use the current date
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setActiveTab("Invoices"); // Switch to the Invoices tab
//   };

//   // Handle invoice upload error
//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//   };

//   // Render the content based on the active tab
//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />; // Render the updated ListOfInvoices
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 {/* Use the updated InvoiceScanner */}
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess} 
//                   onUploadError={handleUploadError} 
//                 />
                
//                 {/* Show upload message (success or error) */}
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {/* Display footer if health profile is completed */}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(),
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setActiveTab("Invoices"); // Switch tab to "Invoices"
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />;
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                   onTabChange={setActiveTab} // Pass tab change handler here
//                 />
//                 {uploadMessage && (
//                   <div
//                     className={`mt-4 p-2 rounded ${
//                       uploadMessage.includes("Failed")
//                         ? "bg-red-100 text-red-800"
//                         : "bg-green-100 text-green-800"
//                     }`}
//                   >
//                     {uploadMessage}
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(),
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setUploadSuccess(true); // Set success state
//     // setActiveTab("Invoices"); // Removed tab switching for now
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//     setUploadSuccess(false); // Reset success state if there is an error
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />;
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                 />
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 {uploadSuccess && ( // Show success message if upload was successful
//                   <div className="mt-4 text-green-600 font-bold text-center">
//                     Uploaded successfully!
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;


// import React, { useState } from "react";
// import AnalysisScreen from "./AnalysisScreen";
// import UploadPDFButton from "./UploadPDFButton";
// import MobileViewFooter from "./MobileViewFooter";
// import SyncEmailButton from "./SyncEmailButton";
// import HowHealthyAreYou from "./HowHealthyAreYou";
// import InvoiceScanner from "./InvoiceScanner";
// import ProfileSection from "./ProfileScreen";
// import ListOfInvoices from "./ListOfInvoices";

// interface Invoice {
//   dateUploaded: string;
//   invoice: string;
// }

// const MobileView: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<
//     "Scan" | "Invoices" | "Analysis" | "Profile"
//   >("Scan");
//   const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState<string | null>(null);
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [uploadSuccess, setUploadSuccess] = useState(false);

//   const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
//     if (Object.values(profile).some((value) => value)) {
//       setHealthProfileCompleted(true);
//     }
//   };

//   const handleUploadSuccess = (invoiceName: string) => {
//     const newInvoice: Invoice = {
//       dateUploaded: new Date().toLocaleDateString(),
//       invoice: invoiceName,
//     };
//     setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
//     setUploadMessage("Invoice uploaded successfully!");
//     setUploadSuccess(true);
//   };

//   const handleUploadError = (error: string) => {
//     setUploadMessage(`Failed to upload invoice: ${error}`);
//     setUploadSuccess(false);
//   };
//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case "Profile":
//         return <ProfileSection />;
//       case "Analysis":
//         return <AnalysisScreen />;
//       case "Invoices":
//         return <ListOfInvoices invoices={invoices} />;
//       default:
//         return (
//           <>
//             {!healthProfileCompleted ? (
//               <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
//                 <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
//               </div>
//             ) : (
//               <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
//                 <InvoiceScanner 
//                   onUploadSuccess={handleUploadSuccess}
//                   onUploadError={handleUploadError}
//                 />
//                 {uploadMessage && (
//                   <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//                     {uploadMessage}
//                   </div>
//                 )}

//                 <div className="flex items-center justify-center my-6 w-full">
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
//                   <span className="text-gray-400 text-sm">or</span>
//                   <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
//                 </div>

//                 <div className="w-full">
//                   <UploadPDFButton />
//                   <SyncEmailButton />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
//       {renderActiveTabContent()}
//       {healthProfileCompleted && (
//         <MobileViewFooter onTabChange={setActiveTab} />
//       )}
//     </div>
//   );
// };

// export default MobileView;



import React, { useState } from "react";
import AnalysisScreen from "./AnalysisScreen";
import UploadPDFButton from "./UploadPDFButton";
import MobileViewFooter from "./MobileViewFooter";
import SyncEmailButton from "./SyncEmailButton";
import HowHealthyAreYou from "./HowHealthyAreYou";
import InvoiceScanner from "./InvoiceScanner";
import ProfileSection from "./ProfileScreen";
import ListOfInvoices from "./ListOfInvoices";

interface Invoice {
  dateUploaded: string;
  invoice: string;
}

const MobileView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Scan" | "Invoices" | "Analysis" | "Profile">("Scan");
  const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Assuming you have a method to fetch the user's email

  const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
    if (Object.values(profile).some((value) => value)) {
      setHealthProfileCompleted(true);
    }
  };

  const handleUploadSuccess = (invoiceName: string) => {
    const newInvoice: Invoice = {
      dateUploaded: new Date().toLocaleDateString(),
      invoice: invoiceName,
    };
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
    setUploadMessage("Invoice uploaded successfully!");
    setUploadSuccess(true);
  };

  const handleUploadError = (error: string) => {
    setUploadMessage(`Failed to upload invoice: ${error}`);
    setUploadSuccess(false);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileSection />;
      case "Analysis":
        return <AnalysisScreen />;
      case "Invoices":
        return <ListOfInvoices invoices={invoices} />;
      default:
        return (
          <>
            {!healthProfileCompleted ? (
              <div className="flex flex-col items-center justify-center px-4 py-0 h-2/3 lg:h-full w-full">
                <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
              </div>
            ) : (
              <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
                <InvoiceScanner 
                  onUploadSuccess={handleUploadSuccess}
                  onUploadError={handleUploadError}
                />
                {uploadMessage && (
                  <div className={`mt-4 p-2 rounded ${uploadMessage.includes('Failed') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {uploadMessage}
                  </div>
                )}

                <div className="flex items-center justify-center my-6 w-full">
                  <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
                  <span className="text-gray-400 text-sm">or</span>
                  <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
                </div>

                <div className="w-full">
                  <UploadPDFButton />
                  <SyncEmailButton />
                </div>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="flex bg-black flex-col items-center justify-between w-screen lg:max-w-xs h-screen lg:h-full overflow-hidden lg:rounded-md">
      {renderActiveTabContent()}
      {healthProfileCompleted && (
        <MobileViewFooter onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default MobileView;
