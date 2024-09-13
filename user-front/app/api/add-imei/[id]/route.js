import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "@/utils/cloudinary";
const prisma = new PrismaClient();

export async function POST(request, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
    }
    const body = await request.formData();

    const imei1 = body.get("imei1");
    const sim1 = body.get("sim1");
    const imei2 = body.get("imei2");
    const sim2 = body.get("sim2");
    const mobileNameModel = body.get("mobileNameModel");
    const ownerName = body.get("ownerName");
    const ownerPhone = body.get("ownerPhone");
    const ownerAddress = body.get("ownerAddress");
    const dateOfLost = body.get("dateOfLost");
    const locationOfLost = body.get("locationOfLost");
    const gdNumber = body.get("gdNumber");
    const gdDate = body.get("gdDate");
    const gdImage = body.get("gdImage");

    // Convert file to base64 and upload to Cloudinary
    const buffer = await gdImage.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");
    const fileType = gdImage.type;
    const uploadResult = await uploadImage(
      `data:${fileType};base64,${base64Image}`,
      `${gdNumber}`
    );

    // Format dateOfLost to ISO-8601 format if provided
    const formattedDateOfLost = dateOfLost
      ? new Date(dateOfLost).toISOString()
      : null;
    const formattedGdDate = gdDate
      ? new Date(gdDate).toISOString()
      : null;

    const imei = await prisma.imei.create({
      data: {
        imei1,
        sim1,
        imei2,
        sim2,
        mobileNameModel,
        ownerName,
        ownerPhone,
        ownerAddress,
        dateOfLost: formattedDateOfLost,
        locationOfLost,
        gdNumber,
        gdDate: formattedGdDate,
        gdImage: uploadResult.secure_url,
        user: {
          connect: {
            id: String(id),
          },
        },
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json({ imei, message : "Successfully submitted", success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
