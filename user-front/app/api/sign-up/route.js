import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { isEmail, isPhoneNumber } from "@/utils/validate";
import { NextResponse } from "next/server";
import { generateVerificationToken } from "@/utils/generate";
import { sendVerificationEmail } from "@/utils/sendEmail";
import { sendSMStoPhone } from "@/utils/sendSMStoPhone";
const prisma = new PrismaClient();
export async function POST(request) {
  try {
    const data = await request.json();

    const trimmedAuth = data.auth?.trim();

    const isAuthEmail = isEmail(trimmedAuth);
    const formatedPhone = isPhoneNumber(trimmedAuth);

    // Ensure at least one of the email or phone is valid
    if (!isAuthEmail && !formatedPhone) {
      return NextResponse.json(
        { error: "Invalid email or phone number" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: isAuthEmail ? trimmedAuth : undefined },
          { phone: formatedPhone ? formatedPhone : undefined },
        ],
      },
    });

    if (existingUser) {
      const existingType = existingUser.email ? "email" : "phone";
      return NextResponse.json(
        { error: "Already has an account with this " + existingType + "!" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    // Generate a 5-digit verification token
    const verificationToken = generateVerificationToken();

    // Prepare the data for user creation, omitting `email` and `phone` if they are `null`
    const userData = {
      name: data.name.trim(),
      password: hashedPassword,
      verificationToken: String(verificationToken),
      ...(isAuthEmail && { email: trimmedAuth }),
      ...(formatedPhone && { phone: formatedPhone }),
    };

    const user = await prisma.user.create({
      data: userData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Failed to sign up" }, { status: 400 });
    }

    if (user && formatedPhone) {
      await sendSMStoPhone(
        formatedPhone,
        `Welcome to Lock IMEI!\n\n Hi ${data.name},\n\nThank you for registering with us. Your verification code is ${verificationToken}. Please use this code to complete your registration.\n\nIf you have any questions, feel free to contact us at support@lockimei.com.\n\nBest regards,\nThe Lock IMEI Team`
      );
    }

    if (user && isAuthEmail) {
      await sendVerificationEmail(trimmedAuth, verificationToken);
    }

    return NextResponse.json({ user, message: "Successfully signed up" });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Failed to sign up" }, { status: 400 });
  }
}
