import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { UplaodImageComponent } from 'src/app/shared-components/uplaod-image/uplaod-image.component';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { LawyersService } from 'src/app/services/lawyers.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  submitError = '';
  lawyerIdSelected = '';
  lawyers: LawyerDto[] = [];

  @ViewChild('uploadImage')
  uploadImageComponent!: UplaodImageComponent;

  form = this.fb.group({
    id: [null],
    lawyerId: [null, Validators.required],
    title: [null, Validators.required],
    description: [null, Validators.required],
    active: [true, Validators.required],
    date: [null, Validators.required]
  });

  formControls = this.form.controls;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private service: ArticlesService,
    private lawyerService: LawyersService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.laodLawyers();

    if (id) {
      this.formControls.id.setValue(id);

      this.service.getId(this.formControls.id.value)
        .toPromise().then(article => {
          this.lawyerIdSelected = article.lawyerId;

          this.formControls.lawyerId.setValue(article.lawyerId);
          this.formControls.title.setValue(article.title);
          this.formControls.description.setValue(article.description);
          this.formControls.active.setValue(article.active);
          this.formControls.date.setValue(article.date);
          this.uploadImageComponent.image = article.image;
        });
    }
  }

  onClickSubmit() {
    if (this.formControls.id.value) {
      this.service.update(this.form.value)
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
      this.service.create(this.form.value)
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
          });
    }
  }

  onClickCancel() {
    this.location.back();
  }

  uplaodImages() {
    if ((!this.formControls.id.value) || (this.submitError !== '')) { return; }

    this.uploadImageComponent.tableId = this.formControls.id.value;
    this.uploadImageComponent.tableName = 'article';
    this.uploadImageComponent.columnName = 'image';
    
    this.uploadImageComponent.uploadImage();
  }

  onLawyerSelectionChange($event: { value: string; }) {
    this.lawyerIdSelected = $event.value;
    this.formControls.lawyerId.setValue(this.lawyerIdSelected);
  }

  laodLawyers() {
    this.lawyerService.getAll()
      .toPromise()
      .then(lawyers => {
        this.lawyers = lawyers;
      });
  }

}
