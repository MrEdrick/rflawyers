import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchoolingService } from '../../../../services/schooling.service';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-schooling-form',
  templateUrl: './schooling-form.component.html',
  styleUrls: ['./schooling-form.component.scss'],
})
export class SchoolingFormComponent implements OnInit {
  submitError = '';

  form = this.fb.group({
    id: [null],
    lawyerId: [null],
    title: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required]
  });

  formControls = this.form.controls;

  hasUnitNumber = false;

  constructor(
    private dialogRef: MatDialogRef<SchoolingFormComponent>,
    @Inject(MAT_DIALOG_DATA) private lawyerKey: {id: string, lawyerId: string},
    private fb: FormBuilder,
    private service: SchoolingService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.lawyerKey.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getId(this.formControls.id.value)
        .toPromise().then(schooling => {
          this.formControls.lawyerId.setValue(schooling.lawyerId);
          this.formControls.title.setValue(schooling.title);
          this.formControls.description.setValue(schooling.description);
          this.formControls.active.setValue(schooling.active);
        });
    } else {
      this.formControls.lawyerId.setValue(this.lawyerKey.lawyerId);
    }
  }

  onClickSubmit() {
    this.submitError = '';

    if (this.formControls.id.value) {
      this.service.update(this.form.value)
        .toPromise()
        .then(
          response => {
            this.dialogRef.close();
          },
          error => {
            this.submitError = error;
            this.dialogService.showAlert(GENERIC_SAVE_ERROR_MESSAGE);
          });
    } else {
      this.service.create(this.form.value)
        .toPromise()
        .then(
          response => {
            if (response?.id) {
              this.formControls.id.setValue(response.id);
              this.dialogRef.close();
            }
          },
          error => {
            this.submitError = error;
            console.log(this.submitError);
          });
    }
  }

  onClickCancel() {
    this.dialogRef.close();
  }
}
