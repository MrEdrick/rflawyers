import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared-features/dialog-presenter/service/dialog.service';
import { EmailSenderService } from './email-sender.service';

@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.scss']
})
export class EmailSenderComponent implements OnInit {

  form = this.fb.group({
    name: [null, Validators.required],
    telephone: [null, Validators.required],
    email: [null, Validators.required],
    message: [null, Validators.required],
  });

  formControls = this.form.controls;

  constructor(
    private fb: FormBuilder,
    private emailSender: EmailSenderService,
    private dialogService: DialogService) { }

  ngOnInit() { }

  onClickEmailSender() {
    this.emailSender.contactUs(this.form.value)
      .toPromise()
      .then(
        () => {
          this.dialogService.showAlert('Será enviado um e-mail para contato.');
        })
      .catch(
        () => {
          this.dialogService.showAlert('Não foi possível realizar o envio. Por favor, tente novamente ou por outro meio.');
        });
  }
}