import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogService } from '../../../shared-features/dialog-presenter/service/dialog.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SingInComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  hide = true;

  singInForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  singInControls = this.singInForm.controls;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy)).subscribe(queryParam => {
      const confirmationToken = queryParam.get('confirmationToken');

      if (confirmationToken) {
        this.authService.emailConfirmation({ confirmationToken })
          .pipe(takeUntil(this.destroy))
          .subscribe(
            () => {
              this.dialogService.showAlert('E-mail confirmado com sucesso!');
            },
            (error) => {
              this.dialogService.showAlert('Ocorreu algum erro durante o processo de confirmação do e-mail. Erro: ' + error);
            });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onSubmit() {
    this.authService.singin(this.singInForm.value)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/adm/navigation-menu']);
        }
      });
  }

  onClick() {
    this.router.navigate(['/adm/singup']);
  }

  onRecoverPassword() {
    if (this.singInControls.email.value) {
      this.authService.recoverPassword({ email: this.singInControls.email.value })
        .pipe(takeUntil(this.destroy))
        .subscribe(
          () => {
            this.dialogService.showAlert('Será enviado um e-mail para recuperação de senha.');
          },
          (error) => {
            this.dialogService.showAlert('Houve algum problema durante o envio do e-mail para recuperação de senha. Error: ' + error);
          });
    }
  }
}
