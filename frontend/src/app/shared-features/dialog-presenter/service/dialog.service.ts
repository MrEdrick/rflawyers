import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogComponent } from '../../../shared-components/dialog/dialog.component';
import { DialogConfig } from '../../../shared-components/dialog/dto/dialog-config.dto';

@Injectable()
export class DialogService implements OnDestroy {
    private destroy: Subject<any> = new Subject();

    constructor(
        private dialog: MatDialog
    ) { }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    showAlert(title?: string, close?: string): void {
        const dialog: DialogConfig = {
            title: title || 'Título',
            close: close || 'OK'
        };

        this.dialog.open(DialogComponent, { width: 'auto', data: dialog });
    }

    async showConfirmation(content?: string, ok?: string, close?: string): Promise<boolean> {
        const dialog: DialogConfig = {
            content: content || '',
            close: close || 'CANCELAR',
            ok: ok || 'CONFIRMAR'
        };

        const dialogRef = this.dialog.open(DialogComponent, { width: 'auto', data: dialog });

        dialogRef
            .afterClosed()
            .pipe(takeUntil(this.destroy))
            .subscribe((result) => result);

        return await dialogRef.afterClosed().toPromise();
    }
}
