import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { UplaodImageComponent } from 'src/app/shared-components/uplaod-image/uplaod-image.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentsService } from 'src/app/services/contents.service';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss'],
})
export class ContentFormComponent implements OnInit {
  submitError = '';

  form = this.fb.group({
    id: [null],
    articleId: [null, Validators.required],
    subTitle: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required],
  });

  formControls = this.form.controls;

  constructor(
    private dialogRef: MatDialogRef<ContentFormComponent>,
    @Inject(MAT_DIALOG_DATA) private idArticleId: {id: string, articleId: string},
    private fb: FormBuilder,
    private service: ContentsService,
    private dialogService: DialogService) { }

  ngOnInit() {
    if (this.idArticleId.articleId) {
      this.formControls.id.setValue(this.idArticleId.articleId);

      this.service.getById(this.formControls.id.value)
        .toPromise().then(content => {
          this.formControls.articleId.setValue(this.idArticleId.articleId);
          this.formControls.subTitle.setValue(content.subTitle);
          this.formControls.description.setValue(content.description);
          this.formControls.active.setValue(content.active);
        });
    } else {
      this.formControls.articleId.setValue(this.idArticleId.articleId);
    }
  }

  onClickSubmit() {
    this.submitError = '';

    if (this.formControls.id.value) {
      this.service.update(this.form.value)
        .toPromise()
        .then(
          _ => {
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
            this.dialogRef.close();
          });
    }
  }

  onClickCancel() {
    this.dialogRef.close();
   }
}
