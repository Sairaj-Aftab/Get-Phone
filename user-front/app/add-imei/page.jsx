import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddImei = () => {
  return (
    <div className="py-5">
      <form action="" className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="IMEI number"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Phone name and model"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Owener full name of NID"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Owener email"
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Owener phone number"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Owener full address"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          placeholder="Owener NID number"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">Police GD file or GD photo</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">NID photo</Label>
          <Input id="picture" type="file" />
        </div>

        <button
          type="submit"
          className="bg-primary text-white text-base font-semibold py-1 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddImei;
