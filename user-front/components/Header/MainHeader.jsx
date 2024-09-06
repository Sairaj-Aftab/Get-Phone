"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import AvatarPro from "../Avatar/AvatarPro";

const MainHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState(false);
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

        {/* <Button
          onClick={() => setIsSignUpDialogOpen(!isSignUpDialogOpen)}
          className="rounded-full"
        >
          Sign up
        </Button> */}

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full outline-none">
            <AvatarPro />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/add-imei" className={buttonVariants()}>
          Add IMEI
        </Link>
      </div>
      {/* Log in Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Log in</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="Enter your email or phone number" />
            <Input type="password" placeholder="Enter your password" />
          </div>
          <p className="text-sm text-muted-foreground w-fit hover:cursor-pointer hover:underline">
            Forget password?
          </p>
          <DialogFooter>
            <Button type="submit">Log In</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Sign up Dialog */}
      <Dialog open={isSignUpDialogOpen} onOpenChange={setIsSignUpDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign up</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="Enter your name" />
            <Input type="text" placeholder="Enter your email or phone number" />
            <Input type="password" placeholder="Enter your password" />
          </div>
          <p className="text-sm text-muted-foreground w-fit hover:cursor-pointer hover:underline">
            If you already have an account.{" "}
            <a
              href="#"
              onClick={() => {
                setIsSignUpDialogOpen(false);
                setIsDialogOpen(!isDialogOpen);
              }}
              className="text-primary font-bold"
            >
              log in
            </a>
          </p>
          <DialogFooter>
            <Button type="submit">Sign Up</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainHeader;
