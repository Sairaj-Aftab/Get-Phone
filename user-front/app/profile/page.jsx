"use client";
import AvatarPro from "@/components/Avatar/AvatarPro";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Profile = async () => {
  const { data: session } = useSession();
  return (
    <div className="py-5">
      <div className="flex gap-2 items-center">
        <AvatarPro width={"w-32"} height={"h-32"} />

        <div>
          <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
          <p className="text-gray-500">
            {session?.user?.phone ? session?.user?.phone : session?.user?.email}
          </p>
        </div>
      </div>
      {/* List of IMEI numbers */}
      <div className="mt-5">
        <div className="mb-2">
          <p className="flex gap-1">
            <span className="text-base font-medium text-secondary">
              Your total IMEI :
            </span>
            <span className="text-base font-medium text-secondary">03</span>
          </p>
        </div>
        <div>
          <Link href="/" className="bg-gray-100 p-3 block rounded-md">
            <p className="text-primary text-lg font-medium">
              Imei number here uitu kjfk95u4 kjf
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="flex justify-between gap-1 text-secondary text-base font-medium">
                    <span>Owener name</span>
                    <span>:</span>
                  </td>
                  <td className="text-base font-medium text-gray-700">
                    Jhon Doe
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between gap-1 text-secondary text-base font-medium">
                    <span>Contact number</span>
                    <span>:</span>
                  </td>
                  <td className="text-base font-medium text-gray-700 underline">
                    123456789
                  </td>
                </tr>
              </tbody>
            </table>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
