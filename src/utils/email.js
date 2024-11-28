import nodemailer from "nodemailer";
import { forgetPassword, signup } from "./emailTemplates.js";
import { ERROR_LOG, INFO_LOG } from "./logger.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS,
  },
});

export const registrationMail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: data?.email,
      subject: "Account Confirmation Mail",
      text: "Account Confirmation Mail",
      html: signup(data),
    });
    INFO_LOG("registrationMail", info?.messageId);
  } catch (error) {
    ERROR_LOG("registrationMail", error?.message);
  }
};

export const forgetPassEmail = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: data?.email,
      subject: "Password Reset Mail",
      text: "Password Reset Mail",
      html: forgetPassword(data),
    });
    INFO_LOG("forgetPassEmail", info?.messageId);
  } catch (error) {
    ERROR_LOG(`forgetPassEmail : ${error?.message}`);
  }
};
