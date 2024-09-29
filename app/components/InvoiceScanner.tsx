import { useState, useRef } from "react";
import { Camera } from "lucide-react";
interface InvoiceScannerProps {
  onCapture: (imageDataUrl: string) => void;
}
const InvoiceScanner: React.FC<InvoiceScannerProps> = ({ onCapture }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
        const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
        onCapture(imageDataUrl); // Pass the image to the parent
      }
    }
    setIsCameraActive(false);
  };
  return (
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
        {isCameraActive ? "Capture Invoice" : "Scan Invoice"}
      </button>
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        className="rounded-full"
      />
    </div>
  );
};

export default InvoiceScanner;
