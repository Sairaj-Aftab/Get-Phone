"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useParams } from "next/navigation";

const AddImei = () => {
  const { data: session } = useSession();
  const { userId } = useParams();
  const [showImei2, setShowImei2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        `/api/add-imei/${session?.user?.id}`,
        formData
      );

      console.log(res);

      if (data.success) {
        console.log("Form submitted successfully", data);
      } else {
        console.error("Form submission failed", data.error);
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };
  return (
    <div className="py-5">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="imei1"
            placeholder="IMEI number (15 digit)"
            required
            className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="text"
            name="sim1"
            placeholder="Lost time SIM number"
            required
            className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="text-end">
            <button
              type="button"
              onClick={() => setShowImei2(!showImei2)}
              className="w-fit bg-gray-300 py-1 px-3 text-xs text-gray-700 font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Add another IMEI
            </button>
          </div>
        </div>
        {/* IMEI2 */}
        {showImei2 && (
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="imei2"
              placeholder="IMEI2 number (15 digit) (optional)"
              className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              name="sim2"
              placeholder="Lost time SIM2 number (Optional)"
              className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        )}

        <input
          type="text"
          name="mobileNameModel"
          placeholder="Mobile name and model"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Owener name"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          name="ownerPhone"
          placeholder="Owener contact number"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          name="ownerAddress"
          placeholder="Owener full address"
          required
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <input
          type="text"
          name="locationOfLost"
          placeholder="Location of incident (Optional)"
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <input
          type="text"
          name="gdNumber"
          placeholder="GD number"
          className="border border-gray-300 py-1 px-3 text-base text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">Date of lost (Optional)</Label>
          <Input type="date" name="dateOfLost" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">Police GD copy</Label>
          <Input id="picture" type="file" name="gdImage" required />
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
