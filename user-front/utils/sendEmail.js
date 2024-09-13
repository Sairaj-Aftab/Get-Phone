// utils/sendEmail.js
import nodemailer from "nodemailer";

// Function to send an email with the verification token
export const sendVerificationEmail = async (email, token) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // TLS port
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // Define email options
  const mailOptions = {
    from: `"Lock IMEI" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Verification Code",
    text: `Your verification code is: ${token}`, // You can make this HTML if needed
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Error sending verification email");
  }
};
