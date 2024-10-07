// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
// import { TypographyP } from "@/components/ui/Typography/TypographyP";
// import { SignUp } from "@clerk/nextjs";
// export default function Page() {
//   return (
//     <div className="overflow-hidden flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <div className="grid md:w-4/5 lg:w-max rounded-xl border-4 p-6 md:p-8 shadow-lg bg-gradient-to-br from-white to-blue-50 lg:grid-cols-2 gap-6 mx-auto lg:mx-0">
//         <div className="flex flex-col justify-center">
//           <TypographyH2 className="text-3xl md:text-4xl lg:text-5xl text-center tracking-wide mb-4 lg:mb-0">
//             Conscious Cart
//           </TypographyH2>
//           <TypographyP className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-justify mx-auto md:max-w-md">
//             Your AI-powered shopping companion. Scan invoices to instantly
//             reveal their health, environmental, and social impacts. Make
//             informed choices tailored to your personal values and wellbeing
//             goals. Shop smarter, live better.
//           </TypographyP>
//         </div>
//         <div className="flex justify-center items-center lg:p-6">
//           <SignUp
//             signInUrl="/sign-in"
//             appearance={{
//               elements: {
//                 cardBox: "h-full",
//                 card: "h-full flex flex-col",
//                 headerTitle: "text-xl lg:text-2xl font-bold mb-4",
//                 headerSubtitle: "mb-4 text-gray-600",
//                 socialButtonsBlockButton:
//                   "mb-2 hover:bg-blue-50 transition-colors",
//                 dividerLine: "my-4 border-blue-200",
//                 formFieldInput:
//                   "mb-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500",
//                 formButtonPrimary:
//                   "mt-4 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out",
//                 formFieldRow: "mb-2",
//                 main: "flex flex-col justify-between flex-grow",
//                 body: "flex flex-col flex-grow",
//                 form: "flex flex-col flex-grow justify-between",
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
// import { TypographyP } from "@/components/ui/Typography/TypographyP";
// import { SignUp } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="overflow-hidden flex justify-center items-center min-h-screen bg-black">
//       <div className="grid md:w-4/5 lg:w-max rounded-xl border-4 border-gray-800 p-6 md:p-8 shadow-lg bg-gray-900 lg:grid-cols-2 gap-6 mx-auto lg:mx-0">
//         <div className="flex flex-col justify-center">
//           <TypographyH2 className="text-3xl md:text-4xl lg:text-5xl text-center tracking-wide mb-4 lg:mb-0 text-white">
//             Conscious Cart
//           </TypographyH2>
//           <TypographyP className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center lg:text-justify mx-auto md:max-w-md">
//             Your AI-powered shopping companion. Scan invoices to instantly
//             reveal their health, environmental, and social impacts. Make
//             informed choices tailored to your personal values and wellbeing
//             goals. Shop smarter, live better.
//           </TypographyP>
//         </div>
//         <div className="flex justify-center items-center lg:p-6">
//           <SignUp
//             signInUrl="/sign-in"
//             appearance={{
//               elements: {
//                 rootBox: "bg-[rgb(30,30,30)]",
//                 card: "bg-[rgb(30,30,30)]",
//                 headerTitle: "text-white",
//                 headerSubtitle: "text-gray-400",
//                 socialButtonsBlockButton: "border-gray-700 text-white",
//                 dividerLine: "bg-gray-700",
//                 dividerText: "text-gray-400",
//                 formFieldLabel: "text-gray-300",
//                 formFieldInput: "bg-gray-800 border-gray-700 text-white",
//                 formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
//                 footerActionLink: "text-blue-400 hover:text-blue-300",
//                 identityPreviewText: "text-gray-300",
//                 identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen bg-black">
      <div className="grid md:w-4/5 lg:w-max rounded-xl border-4 border-gray-800 p-6 md:p-8 shadow-lg bg-[rgb(30,30,30)] lg:grid-cols-2 gap-6 mx-auto lg:mx-0">
        <div className="flex flex-col justify-center">
          <TypographyH2 className="text-3xl md:text-4xl lg:text-5xl text-center tracking-wide mb-4 lg:mb-0 text-white">
            Conscious Cart
          </TypographyH2>
          <TypographyP className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center lg:text-justify mx-auto md:max-w-md">
            Your AI-powered shopping companion. Scan invoices to instantly
            reveal their health, environmental, and social impacts. Make
            informed choices tailored to your personal values and wellbeing
            goals. Shop smarter, live better.
          </TypographyP>
        </div>
        <div className="flex justify-center items-center lg:p-6">
          <SignUp
            signInUrl="/sign-in"
            appearance={{
              elements: {
                rootBox: "bg-[rgb(30,30,30)]",
                card: "bg-[rgb(30,30,30)]",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton: "border-gray-700 text-white",
                dividerLine: "bg-gray-700",
                dividerText: "text-gray-400",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-gray-800 border-gray-700 text-white",
                formButtonPrimary: "bg-[#E7FC00] hover:bg-[#d1e300] text-black",
                footerActionLink: "text-blue-400 hover:text-blue-300",
                identityPreviewText: "text-gray-300",
                identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
                footer: "bg-[rgb(30,30,30)]",
                footerActionText: "text-gray-400",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}