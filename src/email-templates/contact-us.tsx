import { Section, Text } from "@react-email/components";
import { EmailTemplateProps } from "@/types";

export const ContactUs = ({
  fullname,
  email,
  subject,
  message,
}: EmailTemplateProps) => {
  return (
    <Section className="">
      <Text className="text-[14px] leading-normal">
        <strong>Name</strong> : {fullname},
      </Text>

      <Text className="text-[14px] leading-normal">
        <strong>Email Address</strong> : {email}
      </Text>

      <Text className="text-[14px] leading-normal">
        <strong>Subject</strong> : {subject}
      </Text>

      <Text className="text-[14px] leading-normal">
        <strong>Message</strong> : {message}
      </Text>
    </Section>
  );
};

export default ContactUs;
