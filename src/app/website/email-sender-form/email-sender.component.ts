import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  onClickSubmit() { }



}
