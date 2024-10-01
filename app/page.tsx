"use client";
import MobileView from "./components/MobileView";
// import { useEffect } from "react";
function Page() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://consciouscart-backend-production.up.railway.app/api/file");
  //     const data = await response.json()
  //     console.log(data);
  //   }
  //   fetchData()
  // },[])
  return (
    <div className=" flex overflow-hidden flex-col items-stretch justify-center">
      <main className="overflow-hidden lg:h-auto flex flex-col w-screen lg:my-10 items-center justify-center space-y-8 lg:py-10">
      <MobileView/>
      </main>
    </div>
  );
}

export default Page;
