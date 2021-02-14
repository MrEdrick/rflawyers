import { ContactUsDto } from './dto/contact-us.dto';
import { EmailSenderService } from './email-sender.service';
export declare class EmailSenderController {
    private service;
    constructor(service: EmailSenderService);
    create(contactUsDto: ContactUsDto): Promise<any>;
}
