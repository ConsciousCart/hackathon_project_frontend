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
            Your AI Grocery Copilot: Effortlessly Transform Invoices into Smart
            Insights for Healthier Choices! Use Gmail to sync your grocery
            invoices from Zepto, Instamart, etc., seamlessly to the site, or
            upload grocery invoices and get feedback and suggestions on your
            purchases.
          </TypographyP>
        </div>
        <div className="flex flex-col justify-center items-center lg:p-6">
          <SignUp
            signInUrl="/sign-in"
            appearance={{
              elements: {
                rootBox: "bg-[rgb(30,30,30)]",
                card: "bg-[rgb(30,30,30)]",
                headerTitle: "text-2xl font-bold mb-4 text-white",
                headerSubtitle: "mb-4 text-gray-400",
                socialButtonsBlockButton:
                  "mb-2 border-gray-700 text-white hover:bg-gray-800 transition-colors",
                dividerLine: "my-4 border-gray-700",
                dividerText: "text-gray-400",
                formFieldLabel: "text-gray-300",
                formFieldInput:
                  "mb-2 bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500",
                formButtonPrimary:
                  "mt-4 bg-[#E7FC00] hover:bg-[#d1e300] text-black transition-colors duration-300 ease-in-out",
                formFieldRow: "mb-2",
                footerActionLink: "text-blue-400 hover:text-blue-300",
                identityPreviewText: "text-gray-300",
                identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
                footer: "hidden", // Hide Clerk's footer
              },
            }}
          />
          {/* Custom footer */}
          <div className="mt-4 text-center text-gray-400">
            <p>
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-400 hover:text-blue-300">
                Sign in
              </a>
            </p>
            <p className="mt-2">Secured by Clerk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
