
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmailConfirmationDto } from './dto/email-confirmation.dto';
import { RecoverPasswordDto } from './dto/recover-password.dto';
import { EmailSenderService } from './email-sender.service';

@Controller('email-sender')
export class EmailSenderController { }