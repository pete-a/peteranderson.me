import * as awsEmailService from "./email-service/aws-email-service";
import { EmailService } from "./email-service/email-service";

export function getEmailService(): EmailService {
  return awsEmailService;
}
