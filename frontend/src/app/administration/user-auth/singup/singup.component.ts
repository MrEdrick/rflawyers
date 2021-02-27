import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogService } from '../../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingUpComponent implements OnDestroy {
  private destroy: Subject<any> = new Subject();

  hide = true;
  hideConfirmation = true;

  singUpForm = this.fb.group({
    name: [null, Validators.required],
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    passwordConfirmation: [null, Validators.required],
  });

  singUpControls = this.singUpForm.controls;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onSubmit() {
    if (this.singUpControls.password.value === this.singUpControls.passwordConfirmation.value) {
      this.authService.singup(this.singUpForm.value)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          () => {
            this.dialogService.showAlert('Será enviado um e-mail de confirmação do cadastro.');
            this.router.navigate(['/adm/singin']);
          },
          (error) => {
            this.dialogService.showAlert('Não foi possível realizar o cadastro. Erro: ' + error);
          });
    }
  }
}
