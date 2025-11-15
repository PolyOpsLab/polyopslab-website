import { ContactUs } from "@/email-templates/contact-us";
import { EmailSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const isDataValid = EmailSchema.safeParse(body);

    if (!isDataValid.success) {
      return NextResponse.json({
        success: false,
        message: "Please enter valid information.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: `Query from ${body.fullname} <noreply@contact-us.polyopslab.com>`,
      to: "contact@polyopslab.com",
      subject: body.subject,
      react: ContactUs({ ...body }),
    });

    if (error) {
      return Response.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
