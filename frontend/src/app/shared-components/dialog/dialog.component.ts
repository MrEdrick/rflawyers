import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from './dto/dialog-config.dto';

@Component({
    selector: 'app-dialog-actions',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

    get dialog(): DialogConfig {
        return this.data;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogConfig,
        public dialogRef: MatDialogRef<DialogComponent>
    ) { }

}
