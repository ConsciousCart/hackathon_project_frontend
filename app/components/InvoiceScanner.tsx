// import React, { useState, useRef, useEffect } from "react";
// import { Camera } from "lucide-react";

// interface InvoiceScannerProps {
//   onUploadSuccess?: (invoiceName: string) => void;
//   onUploadError?: (error: string) => void;
//   onTabChange: (tab: "Invoices" | "Scan" | "Analysis" | "Profile") => void; // Added tab change prop
// }

// const InvoiceScanner: React.FC<InvoiceScannerProps> = ({
//   onUploadSuccess,
//   onUploadError,
//   onTabChange, // Add this prop to change tabs
// }) => {
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (isCameraActive) {
//       startCamera();
//     } else {
//       stopCamera();
//     }
//   });

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" },
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current?.play();
//         };
//       }
//     } catch (err) {
//       console.error("Error accessing the camera:", err);
//       if (onUploadError) onUploadError("Failed to access camera");
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

//   const uploadImage = async (imageBlob: Blob) => {
//     setIsUploading(true);
//     try {
//       const formData = new FormData();
//       formData.append("file", imageBlob, "invoice.jpg");

//       const response = await fetch(
//         "https://consciouscart-backend-production.up.railway.app/api/upload-file",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         const result = await response.json();
//         const invoiceName = `Invoice_${new Date().toISOString()}`;
//         if (onUploadSuccess) onUploadSuccess(invoiceName);
//         setUploadSuccess(true);
//         onTabChange("Invoices"); // Switch to the "Invoices" tab after success
//       } else {
//         const errorText = await response.text();
//         console.error("Failed to upload file:", errorText);
//         if (onUploadError) onUploadError(errorText);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       if (onUploadError) onUploadError("Network error occurred");
//     } finally {
//       setIsUploading(false);
//       setIsCameraActive(false);
//     }
//   };

//   const captureAndUploadImage = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
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
//         canvasRef.current.toBlob((blob) => {
//           if (blob) {
//             uploadImage(blob);
//           } else {
//             console.error("Failed to create blob from canvas");
//             if (onUploadError) onUploadError("Failed to capture image");
//           }
//         }, "image/jpeg");
//       }
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
//         {isCameraActive ? (
//           <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             autoPlay
//             playsInline
//             muted
//           />
//         ) : (
//           <div className="h-[178px] w-[178px] mx-auto bg-gray-700 rounded-full flex items-center justify-center">
//             <Camera size={48} className="text-gray-400" />
//           </div>
//         )}
//       </div>
//       <button
//         className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md mb-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         onClick={
//           isCameraActive ? captureAndUploadImage : () => setIsCameraActive(true)
//         }
//         disabled={isUploading}
//       >
//         {isUploading
//           ? "Uploading..."
//           : isCameraActive
//           ? "Capture Invoice"
//           : "Scan Invoice"}
//       </button>
//       <canvas ref={canvasRef} style={{ display: "none" }} />

//       {uploadSuccess && (
//         <div className="mt-4 text-green-600 font-bold text-center">
//           Uploaded successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default InvoiceScanner;

// import React, { useState, useRef, useEffect } from "react";
// import { Camera } from "lucide-react";

// interface InvoiceScannerProps {
//   onUploadSuccess?: (invoiceName: string) => void;
//   onUploadError?: (error: string) => void;
// }

// const InvoiceScanner: React.FC<InvoiceScannerProps> = ({
//   onUploadSuccess,
//   onUploadError,
// }) => {
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadSuccess, setUploadSuccess] = useState(false); // Added state for success message
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (isCameraActive) {
//       startCamera();
//     } else {
//       stopCamera();
//     }
//   });

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" },
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current?.play();
//         };
//       }
//     } catch (err) {
//       console.error("Error accessing the camera:", err);
//       if (onUploadError) onUploadError("Failed to access camera");
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

//   const uploadImage = async (imageBlob: Blob) => {
//     setIsUploading(true);
//     try {
//       const formData = new FormData();
//       formData.append("file", imageBlob, "invoice.jpg");

//       const response = await fetch(
//         "https://consciouscart-backend-production.up.railway.app/api/upload-file",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         const invoiceName = `Invoice_${new Date().toISOString()}`;
//         if (onUploadSuccess) onUploadSuccess(invoiceName);
//         setUploadSuccess(true); // Set success message
//       } else {
//         const errorText = await response.text();
//         console.error("Failed to upload file:", errorText);
//         if (onUploadError) onUploadError(errorText);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       if (onUploadError) onUploadError("Network error occurred");
//     } finally {
//       setIsUploading(false);
//       setIsCameraActive(false);
//     }
//   };

//   const captureAndUploadImage = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
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
//         canvasRef.current.toBlob((blob) => {
//           if (blob) {
//             uploadImage(blob);
//           } else {
//             console.error("Failed to create blob from canvas");
//             if (onUploadError) onUploadError("Failed to capture image");
//           }
//         }, "image/jpeg");
//       }
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
//         {isCameraActive ? (
//           <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             autoPlay
//             playsInline
//             muted
//           />
//         ) : (
//           <div className="h-[178px] w-[178px] mx-auto bg-gray-700 rounded-full flex items-center justify-center">
//             <Camera size={48} className="text-gray-400" />
//           </div>
//         )}
//       </div>
//       <button
//         className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md mb-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         onClick={
//           isCameraActive ? captureAndUploadImage : () => setIsCameraActive(true)
//         }
//         disabled={isUploading}
//       >
//         {isUploading
//           ? "Uploading..."
//           : isCameraActive
//           ? "Capture Invoice"
//           : "Scan Invoice"}
//       </button>
//       <canvas ref={canvasRef} style={{ display: "none" }} />

//       {uploadSuccess && (
//         <div className="mt-4 text-green-600 font-bold text-center">
//           Uploaded successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default InvoiceScanner;

import React, { useState, useRef, useEffect } from "react";
import { Camera } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface InvoiceScannerProps {
  onUploadSuccess?: (invoiceName: string) => void;
  onUploadError?: (error: string) => void;
}

const InvoiceScanner: React.FC<InvoiceScannerProps> = ({
  onUploadSuccess,
  onUploadError,
}) => {
    const {user} = useUser()
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false); // Added state for success message
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const userEmail = user?.emailAddresses

  useEffect(() => {
    if (isCameraActive) {
      startCamera();
    } else {
      stopCamera();
    }
  });

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
        };
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
      if (onUploadError) onUploadError("Failed to access camera");
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

  const uploadImage = async (imageBlob: Blob) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      
      // Create a unique filename using the current date and time
      const now = new Date();
      const timestamp = now.toISOString().replace(/[:.]/g, "-"); // Replace colons and periods to make it filesystem-friendly
      const uniqueFileName = `invoice_${timestamp}_${userEmail}.jpg`;

      formData.append("file", imageBlob, uniqueFileName); // Use the unique filename

      const response = await fetch(
        "https://consciouscart-backend-production.up.railway.app/api/upload-file",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        if (onUploadSuccess) onUploadSuccess(uniqueFileName); // Pass the unique filename to the success handler
        setUploadSuccess(true); // Set success message
      } else {
        const errorText = await response.text();
        console.error("Failed to upload file:", errorText);
        if (onUploadError) onUploadError(errorText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      if (onUploadError) onUploadError("Network error occurred");
    } finally {
      setIsUploading(false);
      setIsCameraActive(false);
    }
  };

  const captureAndUploadImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
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
        canvasRef.current.toBlob((blob) => {
          if (blob) {
            uploadImage(blob);
          } else {
            console.error("Failed to create blob from canvas");
            if (onUploadError) onUploadError("Failed to capture image");
          }
        }, "image/jpeg");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
        {isCameraActive ? (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            playsInline
            muted
          />
        ) : (
          <div className="h-[178px] w-[178px] mx-auto bg-gray-700 rounded-full flex items-center justify-center">
            <Camera size={48} className="text-gray-400" />
          </div>
        )}
      </div>
      <button
        className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md mb-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={
          isCameraActive ? captureAndUploadImage : () => setIsCameraActive(true)
        }
        disabled={isUploading}
      >
        {isUploading
          ? "Uploading..."
          : isCameraActive
          ? "Capture Invoice"
          : "Scan Invoice"}
      </button>
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {uploadSuccess && (
        <div className="mt-4 text-green-600 font-bold text-center">
          Uploaded successfully!
        </div>
      )}
    </div>
  );
};

export default InvoiceScanner


