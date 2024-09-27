// import { UserButton } from '@clerk/nextjs';
// import React, { useState, useRef } from 'react';
// import { Camera } from 'lucide-react';
// import UploadPDFButton from './UploadPDFButton';
// import MobileViewFooter from './MobileViewFooter';
// import SyncEmailButton from './SyncEmailButton';
// import Header from './Header';
// import { useUser } from '@clerk/nextjs';
// import Image from 'next/image';

// interface InvoiceScannerProps {
//   onCapture: (imageDataUrl: string) => void;
// }

// const InvoiceScanner: React.FC<InvoiceScannerProps> = ({ onCapture }) => {
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [activeTab, setActiveTab] = useState<'Scan' | 'Report' | 'Analysis' | 'Profile'>('Scan');
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const { user } = useUser();

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: 'environment' },
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current?.play();
//         };
//       }
//     } catch (err) {
//       console.error('Error accessing the camera:', err);
//       setIsCameraActive(false);
//     }
//   };

//   const stopCamera = () => {
//     if (videoRef.current && videoRef.current.srcObject) {
//       const stream = videoRef.current.srcObject as MediaStream;
//       stream.getTracks().forEach((track) => track.stop());
//       videoRef.current.srcObject = null;
//     }
//   };

//   const toggleCamera = () => {
//     setIsCameraActive(!isCameraActive);
//     if (!isCameraActive) {
//       startCamera();
//     } else {
//       stopCamera();
//     }
//   };

//   const captureImage = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext('2d');
//       if (context) {
//         canvasRef.current.width = videoRef.current.videoWidth;
//         canvasRef.current.height = videoRef.current.videoHeight;
//         context.drawImage(
//           videoRef.current,
//           0,
//           0,
//           canvasRef.current.width,
//           canvasRef.current.height
//         );
//         const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
//         onCapture(imageDataUrl); // Pass the image to the parent
//       }
//     }
//     setIsCameraActive(false);
//   };

//   return (
//     <div className="flex overflow-hidden h-[100vh] bg-black flex-col items-center justify-between">
//       {/* HEADER */}
//       <Header className="text-white w-max relative" />

//       {/* ACTIVE TAB CONTENT */}
//       {activeTab === 'Profile' && user ? (
//         <>
//           {/* USER PROFILE INFO */}
//           <div className="text-white">
//             <h2 className="text-2xl font-bold mb-4">Profile</h2>
          
//           <Image
//             src={user.imageUrl}
//             alt="User Profile"
//             className="rounded-full mb-4 mx-auto"
//             width={96}
//             height={96}
//           />
//           <p>
//             Name: <span>{user.fullName}</span>
//           </p>
//           <p>Email: <span>{user.emailAddresses[0].emailAddress}</span></p>
    
//           {/* MANAGE ACCOUNT AND SIGN OUT */}
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
    
//             {/* Clerk's Manage Account */}
//             <div className="mb-4">
//               <UserButton 
//                 signInUrl='/sign-in'
//                 appearance={{
//                   elements: {
//                     userButtonPopoverActionButton: "bg-blue-500 text-white py-2 px-4 rounded mt-2",
//                   },
//                 }} 
//               />
//             </div>
//           </div>
//         </div>
//       </>
//       ) : (
//         <>
//           {/* SCAN INVOICE COMPONENT */}
//           <div className="flex flex-col items-center justify-center p-4 w-full max-w-sm">
//             {/* LIVE CAMERA */}
//             <div className="w-full">
//               <div className="relative mb-4 w-64 h-64 mx-auto">
//                 {isCameraActive ? (
//                   <div className="w-full h-full rounded-full overflow-hidden">
//                     <video
//                       ref={videoRef}
//                       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
//                       autoPlay
//                       playsInline
//                       muted
//                     />
//                   </div>
//                 ) : (
//                   <div className="h-[178px] w-[178px] mx-auto bg-gray-700 rounded-full flex items-center justify-center">
//                     <Camera size={68} className="text-gray-400" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 className="w-full py-4 bg-yellow-400 text-black font-bold rounded-md mb-4"
//                 onClick={isCameraActive ? captureImage : toggleCamera}
//               >
//                 {isCameraActive ? 'Capture Invoice' : 'Scan Invoice'}
//               </button>
//               <canvas
//                 ref={canvasRef}
//                 style={{ display: 'none' }}
//                 className="rounded-full"
//               />
//             </div>

//             {/* DIVIDER */}
//             <div className="flex items-center justify-center my-10 w-full">
//               <div className="border-t border-2 w-[180px] border-gray-900 flex-grow mr-2"></div>
//               <span className="text-gray-400">or</span>
//               <div className="border-t border-2 w-[180px] border-gray-900 flex-grow ml-2"></div>
//             </div>

//             {/* UPLOAD PDF AND SYNC EMAIL BUTTONS */}
//             <div className="w-full">
//               <UploadPDFButton />
//               <SyncEmailButton />
//             </div>
//           </div>
//         </>
//       )}
//       {/* FOOTER ALWAYS VISIBLE */}
//       <MobileViewFooter onTabChange={setActiveTab} />
      
//     </div>
//   );
// };

// export default InvoiceScanner;


import { UserButton } from '@clerk/nextjs';
import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import UploadPDFButton from './UploadPDFButton';
import MobileViewFooter from './MobileViewFooter';
import SyncEmailButton from './SyncEmailButton';
import Header from './Header';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

interface InvoiceScannerProps {
  onCapture: (imageDataUrl: string) => void;
}

const InvoiceScanner: React.FC<InvoiceScannerProps> = ({ onCapture }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [activeTab, setActiveTab] = useState<'Scan' | 'Report' | 'Analysis' | 'Profile'>('Scan');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { user } = useUser();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
        };
      }
    } catch (err) {
      console.error('Error accessing the camera:', err);
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
    if (!isCameraActive) {
      startCamera();
    } else {
      stopCamera();
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
        onCapture(imageDataUrl); // Pass the image to the parent
      }
    }
    setIsCameraActive(false);
  };

  return (
    <div className="flex bg-black flex-col items-center justify-between min-h-screen">
      {/* HEADER */}
      <Header className="text-white w-max relative" />

      {/* ACTIVE TAB CONTENT */}
      {activeTab === 'Profile' && user ? (
        <>
          {/* USER PROFILE INFO */}
          <div className="text-white flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Profile</h2>
            <Image
              src={user.imageUrl}
              alt="User Profile"
              className="rounded-full mb-4"
              width={96}
              height={96}
            />
            <p className="text-sm">
              Name: <span>{user.fullName}</span>
            </p>
            <p className="text-sm">Email: <span>{user.emailAddresses[0].emailAddress}</span></p>

            {/* MANAGE ACCOUNT AND SIGN OUT */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Account Settings</h3>
              <div className="mb-4">
                <UserButton 
                  signInUrl='/sign-in'
                  appearance={{
                    elements: {
                      userButtonPopoverActionButton: "bg-blue-500 text-white py-2 px-3 rounded",
                    },
                  }} 
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* SCAN INVOICE COMPONENT */}
          <div className="flex flex-col items-center justify-center p-4 w-full max-w-xs">
            {/* LIVE CAMERA */}
            <div className="w-full">
              <div className="relative mb-4 w-48 h-48 mx-auto">
                {isCameraActive ? (
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <video
                      ref={videoRef}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
                      autoPlay
                      playsInline
                      muted
                    />
                  </div>
                ) : (
                  <div className="h-[178px] w-[178px] mx-auto bg-gray-700 rounded-full flex items-center justify-center">
                    <Camera size={48} className="text-gray-400" />
                  </div>
                )}
              </div>
              <button
                className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md mb-4"
                onClick={isCameraActive ? captureImage : toggleCamera}
              >
                {isCameraActive ? 'Capture Invoice' : 'Scan Invoice'}
              </button>
              <canvas
                ref={canvasRef}
                style={{ display: 'none' }}
                className="rounded-full"
              />
            </div>

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
        </>
      )}

      {/* FOOTER ALWAYS VISIBLE */}
      <MobileViewFooter onTabChange={setActiveTab} />
    </div>
  );
};

export default InvoiceScanner;
