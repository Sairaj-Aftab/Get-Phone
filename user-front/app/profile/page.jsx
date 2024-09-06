import AvatarPro from "@/components/Avatar/AvatarPro";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="py-5">
      <div className="flex gap-2 items-center">
        {/* <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Avatar"
          width={0}
          height={0}
          sizes="100vw"
          className="h-32 w-32 rounded-full object-cover"
        /> */}
        <AvatarPro width={"w-32"} height={"h-32"} />

        <div>
          <h1 className="text-2xl font-bold">Jhon Doe</h1>
          <p className="text-gray-500">5wK7U@example.com</p>
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
