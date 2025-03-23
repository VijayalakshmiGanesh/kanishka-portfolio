"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kanishkapinkfairy@gmail.com",
      subject: `Message from ${name}`,
      html: ` <div>
          <h2>Someone has tried to reach out to you</h2>
          <p>Name: ${name} </p>
          <p>Email: ${email}</p>
          <p> Message: ${message} </p>
        </div>`,
    });

    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
}
