import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilesService } from '../../services/file.service';

@Component({
  selector: 'app-uplaod-image',
  templateUrl: './uplaod-image.component.html',
  styleUrls: ['./uplaod-image.component.scss'],
})
export class UplaodImageComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  @Input()
  selectedImageFile!: File;

  showImageUploadButton = false;

  imageChanged = false;

  @Input()
  image = 'assets/images/no-image.jpg';

  @Output()
  imageChange = new EventEmitter();

  @Output()
  selectedImageFileChange = new EventEmitter();

  @Input()
  tableName = '';

  @Input()
  tableId = '';

  @Input()
  columnName = '';

  @Input()
  deleteRecordIfFail = 'false';

  constructor(private filesService: FilesService) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void { }

  onImageClick() {
    this.showImageUploadButton = !this.showImageUploadButton;
  }

  onUploadImage(fileUpload: any) {
    (fileUpload as HTMLElement).click();
  }

  onChangeFile($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      const fileReader = new FileReader();
      this.selectedImageFile = $event.target.files[0];

      fileReader.onload = (event: any) => {
        this.image = event.target.result;
        this.showImageUploadButton = false;
        this.imageChange.emit(this.image);
        this.selectedImageFileChange.emit(this.selectedImageFile);
        this.imageChanged = true;
      };

      fileReader.readAsDataURL(this.selectedImageFile);
    }
  }

  @Output()
  uploadImage() {
    if ((!this.imageChanged) || (!this.tableName) || (!this.tableId)) {
      return;
    }

    const formData = new FormData();
    formData.append('tableName', this.tableName);
    formData.append('tableId', this.tableId);
    formData.append('columnName', this.columnName);
    formData.append('type', 'image');
    formData.append('deleteRecordIfFail', this.deleteRecordIfFail);
    formData.append('file', this.selectedImageFile);

    this.filesService.uploadImage(formData)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response) => console.log(response)
    );
  }
}
