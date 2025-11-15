import z from "zod";
import { EmailSchema } from "@/schemas";

export type TestimonialsType = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export type EmailTemplateProps = z.infer<typeof EmailSchema>;
