import { MessageData } from "../../components/contact-form/contact-form";
import AWS from "aws-sdk";
import SES from "aws-sdk/clients/sesv2";

export function sendEmail(data: MessageData): Promise<void> {
  AWS.config = new AWS.Config({
    secretAccessKey: process.env["APP_AWS_SECRET_ACCESS_KEY"],
    accessKeyId: process.env["APP_AWS_ACCESS_KEY_ID"],
    region: "ap-southeast-2",
  });

  const ses = new SES();
  const body = `From: ${data.name}\nEmail: ${data.email}\n Message:\n${data.message}`;

  const params: SES.SendEmailRequest = {
    FromEmailAddress: process.env["APP_SENDER_EMAIL"],
    Destination: {
      ToAddresses: [process.env["APP_RECEIVER_EMAIL"] || ""],
    },
    Content: {
      Simple: {
        Body: { Text: { Charset: "UTF-8", Data: body } },
        Subject: { Charset: "UTF-8", Data: "New message via peteranderson.me" },
      },
    },
    ReplyToAddresses: [data.email],
  };
  return ses.sendEmail(params).promise().then();
}
