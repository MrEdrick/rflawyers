import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ResumeItemsService } from '../../services/resume-items.service';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';

@Component({
  selector: 'app-resume-item-form',
  templateUrl: './resume-item-form.component.html',
  styleUrls: ['./resume-item-form.component.scss'],
})
export class ResumeItemFormComponent implements OnInit {
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
    private service: ResumeItemsService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getId(this.formControls.id.value)
        .toPromise().then(resumeItem => {
          this.formControls.title.setValue(resumeItem.title);
          this.formControls.description.setValue(resumeItem.description);
          this.formControls.active.setValue(resumeItem.active);
        });
    }
  }

  onClickSubmit() {
    this.submitError = '';

    if (this.formControls.id.value) {
      this.service.update(this.form.value)
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
      this.service.create(this.form.value)
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
