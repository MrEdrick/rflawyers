import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResumesService } from '../../../../services/resumes.service';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { UplaodImageComponent } from 'src/app/shared-components/uplaod-image/uplaod-image.component';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private service: ResumesService,
    private dialogService: DialogService) { }

  ngOnInit() {
    //this.lawyerId = this.idLawyerId.lawyerId;
    const id = this.route.snapshot.params.id;

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getById(this.formControls.id.value)
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

            }
          },
          error => {
            this.submitError = error;
            console.log(this.submitError);
          });
    }
  }

  onClickCancel() {

  }
}
