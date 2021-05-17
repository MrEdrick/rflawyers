import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../../../shared-features/dialog-presenter/service/dialog.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SingInComponent implements OnInit {

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

  async ngOnInit(): Promise<void> {
    const confirmationToken = 
      (await this.route.queryParamMap.pipe(first()).toPromise()).get('confirmationToken');

    if (confirmationToken) {
      this.authService.emailConfirmation({ confirmationToken })
        .toPromise()
        .then(
          () => {
            this.dialogService.showAlert('E-mail confirmado com sucesso!');
          })
        .catch((error) => {
          this.dialogService.showAlert('Ocorreu algum erro durante o processo de confirmação do e-mail. Erro: ' + error);
        });
    };
  }

  onSubmit() {
    this.authService.singin(this.singInForm.value)
      .toPromise()
      .then(() => {
        console.log(this.authService);
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/adm/navigation-menu']);
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  onClick() {
    this.router.navigate(['/adm/singup']);
  }

  onRecoverPassword() {
    if (this.singInControls.email.value) {
      this.authService.recoverPassword({ email: this.singInControls.email.value })
        .toPromise()
        .then(
          () => {
            this.dialogService.showAlert('Será enviado um e-mail para recuperação de senha.');
          })
        .catch((error) => {
          this.dialogService.showAlert('Houve algum problema durante o envio do e-mail para recuperação de senha. Error: ' + error);
        });
    }
  }
}
