"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import AvatarPro from "../Avatar/AvatarPro";

const MainHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="shadow-md w-full md:w-[700px] mx-auto">
      <div className="flex items-center gap-3 py-2 px-3">
        <Link href="/" className="text-primary text-lg font-bold">
          Logo
        </Link>
        <Input
          type="text"
          placeholder="Search your IMEI number"
          className="rounded-full outline-primary"
        />

        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full outline-none">
              <AvatarPro />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="/add-imei">Add IMEI</Link>
              </DropdownMenuItem>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/sign-up" className={buttonVariants()}>
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
