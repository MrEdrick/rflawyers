import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LawyersService } from '../../services/lawyers.service';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  submitError = '';

  form = this.fb.group({
    id: [null],
    title: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required]
  });

  formControls = this.form.controls;

  hasUnitNumber = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private lawyersService: LawyersService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.lawyersService.getId(this.formControls.id.value)
        .toPromise().then(lawyer => {
          this.formControls.title.setValue(lawyer.title);
          this.formControls.description.setValue(lawyer.description);
          this.formControls.active.setValue(lawyer.active);
        });
    }
  }

  onClickSubmit() {
    this.submitError = '';

    if (this.formControls.id.value) {
      this.lawyersService.update(this.form.value)
        .toPromise()
        .then(
          response => {
            this.location.back();
          },
          error => {
            this.submitError = error;
            this.dialogService.showAlert(GENERIC_SAVE_ERROR_MESSAGE);
          });
    } else {
      this.lawyersService.create(this.form.value)
        .toPromise()
        .then(
          response => {
            if (response?.id) {
              this.formControls.id.setValue(response.id);
              this.location.back();
            }
          },
          error => {
            this.submitError = error;
            console.log(this.submitError);
          });
    }
  }

  onClickCancel() {
    this.location.back();
  }
}
