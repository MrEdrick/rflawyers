import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from '../../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  hide = true;
  hideConfirmation = true;

  form = this.fb.group({
    recoverToken: [null],
    password: [null, Validators.required],
    passwordConfirmation: [null, Validators.required],
  });

  formControls = this.form.controls;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy)).subscribe(queryParam => {
      this.formControls.recoverToken.setValue(queryParam.get('recoverToken'));
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onSubmit() {
    if (this.formControls.password.value === this.formControls.passwordConfirmation.value) {
      console.log(this.form);
      this.authService.resetPassword(this.form.value)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          () => {
            this.router.navigate(['/adm/singin']);
          },
          (error) => {
            this.dialogService.showAlert('Ocorreu alguma problema no processo de alteração da senha. Erro: ' + error);
          });
    }
  }
}
