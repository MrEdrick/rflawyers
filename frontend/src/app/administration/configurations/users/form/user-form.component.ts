import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { UplaodImageComponent } from '../../../../shared-components/uplaod-image/uplaod-image.component';
import { DialogService } from '../../../../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_SAVE_ERROR_MESSAGE } from '../../../../common/const/error-messages.const';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @ViewChild('uploadImageMobile')
  uploadImageMobileComponent!: UplaodImageComponent;

  @ViewChild('uploadImageDesktop')
  uploadImageDesktopComponent!: UplaodImageComponent;

  submitError = '';

  hide = true;
  hideConfirmation = true;

  form = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    email: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.required],
    passwordConfirmation: [null, Validators.required],
    active: [true, Validators.required],
    isAdministrator: [false, Validators.required],
    image: ['assets/images/no-image.jpg']
  });

  formControls = this.form.controls;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.formControls.id.setValue(id);

      if (this.formControls.id.value) {
        this.usersService.getId(this.formControls.id.value)
          .toPromise()
          .then(user => {
            this.formControls.name.setValue(user.name);
            this.formControls.email.setValue(user.email);
            this.formControls.username.setValue(user.username);
            this.formControls.active.setValue(user.active);
            this.formControls.isAdministrator.setValue(user.isAdministrator);
            
            if (user.image) {
              this.formControls.image.setValue(user.image);
            } 
              
            this.uploadImageMobileComponent.image = user.image;
            this.uploadImageDesktopComponent.image = user.image;
          });
      }
    }
  }

  onClickSubmit() {
    console.log(this.form.value);
    if (this.formControls.id.value) {
      this.usersService.update(this.form.value)
        .toPromise()
        .then(
          () => {
            this.uplaodImages();
            this.location.back();
          },
          error => {
            this.submitError = error;
            this.dialogService.showAlert(GENERIC_SAVE_ERROR_MESSAGE);
          });
    } else {
      this.usersService.create(this.form.value)
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
            this.dialogService.showAlert(GENERIC_SAVE_ERROR_MESSAGE);
          });
    }
  }

  onClickCancel() {
    this.location.back();
  }

  uplaodImages() {
    if ((!this.formControls.id.value) || (this.submitError !== '')) { return; }

    this.uploadImageMobileComponent.tableId = this.formControls.id.value;
    this.uploadImageMobileComponent.tableName = 'user';
    this.uploadImageMobileComponent.columnName = 'image';


    this.uploadImageDesktopComponent.tableId = this.formControls.id.value;
    this.uploadImageDesktopComponent.tableName = 'user';
    this.uploadImageDesktopComponent.columnName = 'image';

    this.uploadImageMobileComponent.uploadImage();

    this.uploadImageDesktopComponent.uploadImage();
  }

  onResetPassword() {
    if (this.formControls.email.value) {
      this.authService.recoverPassword({ email: this.formControls.email.value })
        .toPromise()
        .then((response) => {
          console.log(response);
        });
    }
  }
}
