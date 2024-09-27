"use client";
import React, { useState } from "react";
import InvoiceScanner from "./components/MobileView";
function Page() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = (imageDataUrl: string) => {
    setCapturedImage(imageDataUrl);
  };

  // const handleSubmit = () => {
  //   if (capturedImage) {
  //     // Send the capturedImage to the endpoint
  //     console.log("Sending image to the server:", capturedImage);
  //     // Implement the API call here
  //   }
  // };

  return (
    <div className=" flex flex-col items-center justify-center">
      <main className="h-[800px] w-[360px] flex flex-col my-10 items-center justify-center space-y-8 py-10">
        <InvoiceScanner onCapture={handleCapture} />
        {/* {capturedImage && (
          <div className="flex flex-col items-center">
            <Image
              src={capturedImage}
              alt="Captured invoice"
              className="h-64 w-64 object-cover rounded-full shadow-lg"
              width={256}
              height={256}
            />
            <Button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition duration-300"
            >
              Submit Image
            </Button>
          </div>
        )} */}
        
      </main>
    </div>
  );
}

export default Page;
