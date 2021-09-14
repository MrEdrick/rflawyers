import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResumesService } from '../../../../services/resumes.service';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UplaodImageComponent } from 'src/app/shared-components/uplaod-image/uplaod-image.component';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss'],
})
export class ContentFormComponent implements OnInit {
  lawyerId  = '';
  submitError = '';

  @ViewChild('uploadImage')
  uploadImageComponent!: UplaodImageComponent;

  form = this.fb.group({
    id: [null],
    lawyerId: [null],
    title: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required]
  });

  formControls = this.form.controls;

  constructor(
    private dialogRef: MatDialogRef<ContentFormComponent>,
    @Inject(MAT_DIALOG_DATA) private idLawyerId: {id: string, lawyerId: string},
    private fb: FormBuilder,
    private service: ResumesService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.lawyerId = this.idLawyerId.lawyerId;
    const id = this.idLawyerId.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getId(this.formControls.id.value)
        .toPromise().then(resume => {
          this.formControls.lawyerId.setValue(this.lawyerId);
          this.formControls.title.setValue(resume.title);
          this.formControls.description.setValue(resume.description);
          this.formControls.active.setValue(resume.active);
        });
    } else {
      this.formControls.lawyerId.setValue(this.lawyerId);
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
