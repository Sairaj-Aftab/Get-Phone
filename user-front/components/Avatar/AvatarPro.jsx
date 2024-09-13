"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
const AvatarPro = ({ width, height }) => {
  const { data } = useSession();
  return (
    <Avatar className={`${width} ${height} object-cover`}>
      <AvatarImage
        src={
          data?.user?.image
            ? data?.user?.image
            : "https://github.com/shadcn.png"
        }
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarPro;
