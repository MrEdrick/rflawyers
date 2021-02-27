import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactUsDto } from './dto/contact-us.dto';
import { EmailSenderService } from './email-sender.service';

@Controller('email-sender')
export class EmailSenderController {
    constructor(private service: EmailSenderService) { }

    @Post('contact-us')
    @UsePipes(ValidationPipe)
    create(
        @Body() contactUsDto: ContactUsDto): Promise<any> {
        return this.service.contactUs(contactUsDto);
    }
 }