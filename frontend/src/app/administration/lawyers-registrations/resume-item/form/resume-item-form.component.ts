import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResumeItemsService } from '../../../../services/resume-items.service';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-item-form',
  templateUrl: './resume-item-form.component.html',
  styleUrls: ['./resume-item-form.component.scss'],
})
export class ResumeItemFormComponent implements OnInit {
  submitError = '';

  form = this.fb.group({
    id: [null],
    resumeId: [null],
    title: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required]
  });

  formControls = this.form.controls;

  hasUnitNumber = false;

  constructor(
    private dialogRef: MatDialogRef<ResumeItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) private resumeItemKey: {id: string, resumeId: string},
    private fb: FormBuilder,
    private service: ResumeItemsService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.resumeItemKey.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getById(this.formControls.id.value)
        .toPromise().then(resumeItem => {
          this.formControls.resumeId.setValue(resumeItem.resumeId);
          this.formControls.title.setValue(resumeItem.title);
          this.formControls.description.setValue(resumeItem.description);
          this.formControls.active.setValue(resumeItem.active);
        });
    } else {
      this.formControls.resumeId.setValue(this.resumeItemKey.resumeId);
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
