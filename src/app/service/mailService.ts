import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
) {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    "1050300072750-825kmrqv2la51rk0qkl0unfakfppcsah.apps.googleusercontent.com", // Replace with your client ID
    "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", // Replace with your client secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: "asdfasd", // Replace with your refresh token
  });

  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "abdulrazzaquenixx@gmail.com", // Replace with your email
      clientId:
        "1050300072750-825kmrqv2la51rk0qkl0unfakfppcsah.apps.googleusercontent.com", // Replace with your client ID
      clientSecret: "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", // Replace with your client secret
      refreshToken: "fasdasfqeasd", // Replace with your refresh token
      accessToken: accessToken.token,
    },
  } as any);

  const mailOptions = {
    from: "abdulrazzaquenixx@gmail.com", // Replace with your email
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error: any, info) {
    if (error) {
      console.log(error);
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
