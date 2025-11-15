import * as z from "zod";

export const EmailSchema = z.object({
  fullname: z
    .string()
    .min(4, {
      message: `Your "Full Name" must be of atleast 4 characters long.`,
    })
    .max(100, {
      message: "Full Name must not exceed 100 characters.",
    }),
  email: z.email(),
  subject: z.string(),
  message: z.string().max(5000, {
    message: "Message content must not exceed 5000 characters.",
  }),
});
