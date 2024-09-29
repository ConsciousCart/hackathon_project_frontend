import Image from "next/image";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2";

const ProfileScreen: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="lg:h-full text-white flex flex-col items-center justify-center my-auto">
      <TypographyH2 className="border-none text-xl font-bold mb-2">Profile</TypographyH2>
      <Image
        src={user.imageUrl}
        alt="User Profile"
        className="rounded-full mb-4"
        width={96}
        height={96}
      />
      <TypographyP>
        Name: <span>{user.fullName}</span>
      </TypographyP>
      <TypographyP>
        Email: <span>{user.emailAddresses[0].emailAddress}</span>
      </TypographyP>

      {/* MANAGE ACCOUNT AND SIGN OUT */}
      <div className="mt-6 flex space-x-3 mr-auto">
        <TypographyP className="">Account Settings</TypographyP>
        <div className="text-center">
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
      </div>
    </div>
  );
};

export default ProfileScreen;