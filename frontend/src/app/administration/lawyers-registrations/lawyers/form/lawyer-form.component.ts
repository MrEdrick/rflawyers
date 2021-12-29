import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LawyersService } from '../../../../services/lawyers.service';
import { ActivatedRoute } from '@angular/router';
import { UplaodImageComponent } from '../../../../shared-components/uplaod-image/uplaod-image.component';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';

@Component({
  selector: 'app-lawyer-form',
  templateUrl: './lawyer-form.component.html',
  styleUrls: ['./lawyer-form.component.scss'],
})
export class LawyerFormComponent implements OnInit {
  submitError = '';

  @ViewChild('uploadImage')
  uploadImageComponent!: UplaodImageComponent;

  form = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    oab: [null, Validators.required],
    description: [null, Validators.required],
    languages: [null, Validators.required],
    specializations: [null, Validators.required],
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

      this.lawyersService.getById(this.formControls.id.value)
        .toPromise().then(lawyer => {
          this.formControls.firstName.setValue(lawyer.firstName);
          this.formControls.lastName.setValue(lawyer.lastName);
          this.formControls.oab.setValue(lawyer.oab);
          this.formControls.description.setValue(lawyer.description);
          this.formControls.languages.setValue(lawyer.languages);
          this.formControls.specializations.setValue(lawyer.specializations),
          this.formControls.active.setValue(lawyer.active);

          this.uploadImageComponent.image = lawyer.image;
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
            this.uplaodImages();
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
              this.uplaodImages();
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

  uplaodImages() {
    if ((!this.formControls.id.value) || (this.submitError !== '')) { return; }

    this.uploadImageComponent.tableId = this.formControls.id.value;
    this.uploadImageComponent.tableName = 'lawyer';
    this.uploadImageComponent.columnName = 'image';
    
    this.uploadImageComponent.uploadImage();
  }
}
