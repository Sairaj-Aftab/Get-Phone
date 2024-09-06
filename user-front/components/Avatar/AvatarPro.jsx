import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const AvatarPro = ({ width, height }) => {
  return (
    <Avatar className={`${width} ${height} object-cover`}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarPro;
