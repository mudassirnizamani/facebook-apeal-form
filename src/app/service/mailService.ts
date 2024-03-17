import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
) {
  var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "f13943bea63f60c5f0151d34f9caf535"
    }
  });

  const mailOptions = {
    // from: "abdulrazzaquenixx@gmail.com",
    from: "mudasiralinizamani@gmail.com",
    to: "mudasiralinizamani@gmail.com",
    subject: subject,
    text: otpText,
  };

  transport.sendMail(mailOptions, function (error: any, info) {
    if (error) {
      console.log(error);
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
