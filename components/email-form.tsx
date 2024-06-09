import * as React from "react";
import {
  Html,
  Body,
  Section,
  Img,
  Text,
  Hr,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

export interface EmailTemplateProps {
  userName?: string;
  emailSender: string;
  msg?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
  emailSender,
  msg,
}) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Body className="rounded-md  bg-slate-100 ">
        <Section className="w-full  bg-teal-700 p-3">
        <Img
          src="https://firefoxusercontent.com/4a7e58f9cbba2ff1bce1608d93c62ad0"
          height="80"
          width="80"
          className="rounded-full border-2 border-indigo-500 mx-auto"
          alt="img"
        />
        <Text 
        className="text-lg font-bold italic text-white text-center  ">
          {userName} {`<${emailSender}>`}
        </Text>
        </Section>
        <Text className="text-md font-semibold my-3 text-black text-center">{msg}</Text>
        <Hr />
      </Body>
    </Html>
  </Tailwind>
);
