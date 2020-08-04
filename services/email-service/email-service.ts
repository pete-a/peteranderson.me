import { MessageData } from "../../components/contact-form/contact-form";

export interface EmailService {
  sendEmail(data: MessageData): Promise<void>;
}
