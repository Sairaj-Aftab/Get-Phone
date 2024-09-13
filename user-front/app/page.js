"use client";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="py-5">
      <div className="mb-3 flex justify-between items-center">
        <p className="flex gap-1">
          <span className="text-base font-medium text-secondary">
            Total IMEI :
          </span>
          <span className="text-base font-medium text-secondary">591</span>
        </p>
        <Link
          href={`/add-imei/${session?.user?.id}`}
          className={buttonVariants()}
        >
          Add IMEI
        </Link>
      </div>
      <div>
        <Link href="/" className="bg-gray-100 p-3 block rounded-md">
          <p className="text-primary text-lg font-medium">
            <span>IMEI 1 :</span>{" "}
            <span>Imei number here uitu kjfk95u4 kjf</span>
          </p>
          <p className="text-primary text-lg font-medium">
            <span>IMEI 2 :</span>{" "}
            <span>Imei number here uitu kjfk95u4 kjf</span>
          </p>
          <table>
            <tbody>
              <tr>
                <td className="flex justify-between gap-1 text-secondary text-base font-medium">
                  <span>Device name & model</span>
                  <span>:</span>
                </td>
                <td className="text-base font-medium text-gray-700">
                  Samsung Galaxy S22 Ultra
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
  );
}
