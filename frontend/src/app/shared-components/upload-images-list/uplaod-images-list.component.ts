import { Component, OnInit, Input, ViewChild, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilesService } from '../../shared-features/files-manager/service/file.service';
import { UplaodImageComponent } from '../uplaod-image/uplaod-image.component';
import { DeleteRecordDto } from './dto/delete-record.dto';
import { InsertNewRecordDto } from './dto/insert-new-record.dto';
import { SelectFilesPathsDto } from './dto/select-files-paths.dto';

@Component({
  selector: 'app-uplaod-images-list',
  templateUrl: './uplaod-images-list.component.html',
  styleUrls: ['./uplaod-images-list.component.scss'],
})
export class UplaodImagesListComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  @ViewChild('uploadImage')
  uploadImageComponent: UplaodImageComponent;

  loadedImages = false;

  imageIndex = 0;

  selectedImagesFilesList: File[] = [];

  imagesToRemove: string[] = [];

  currentsImages: string[] = [];

  @Input()
  images: string[] = ['assets/images/no-image.jpg'];

  @Input()
  tableName = '';

  @Input()
  columnName = '';

  @Input()
  masterTableId = '';

  @Input()
  masterColumnName = '';

  constructor(private filesService: FilesService) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.images.forEach((image, index) => {
      this.currentsImages[index] = image;
      this.selectedImagesFilesList[index] = null;
    });
  }

  addImage() {
    this.images[this.images.length] = 'assets/images/no-image.jpg';
    this.currentsImages[this.currentsImages.length] = 'assets/images/no-image.jpg';
    this.selectedImagesFilesList[this.selectedImagesFilesList.length] = null;

    this.imageIndex = this.images.length - 1;
    this.loadImage();
  }

  removeImage() {
    if (this.loadedImages) {
      this.imagesToRemove[this.imagesToRemove.length] =
        this.images[this.imageIndex];
    }

    this.images.splice(this.imageIndex, 1);
    this.currentsImages.splice(this.imageIndex, 1);
    this.selectedImagesFilesList.splice(this.imageIndex, 1);

    this.imageIndex = this.images.length - 1;
    this.loadImage();
  }

  previousImage() {
    if (this.imageIndex > 0) {
      this.imageIndex = this.imageIndex - 1;
      this.loadImage();
    }
  }

  nextImage() {
    if (this.imageIndex < (this.images.length - 1)) {
      this.imageIndex = this.imageIndex + 1;
      this.loadImage();
    }
  }

  loadImage() {
    this.uploadImageComponent.image = this.images[this.imageIndex];
  }

  updateImage(image) {
    this.images[this.imageIndex] = image;
  }

  updateImageFile(imageFile) {
    this.selectedImagesFilesList[this.imageIndex] = imageFile;
  }

  populateSelectFilesPathsDto(): SelectFilesPathsDto {
    const selectFilesPathsDto = new SelectFilesPathsDto();

    selectFilesPathsDto.tableName = this.tableName;
    selectFilesPathsDto.columnFilePathName = 'image';
    selectFilesPathsDto.columnIdName = this.masterColumnName;
    selectFilesPathsDto.columnIdValue = this.masterTableId;

    return selectFilesPathsDto;
  }

  selectFilesPathsDtoPopulated(selectFilesPathsDto: SelectFilesPathsDto): boolean {
    return ((selectFilesPathsDto.tableName !== '') &&
      (selectFilesPathsDto.columnFilePathName !== '') &&
      (selectFilesPathsDto.columnIdName !== '') &&
      (selectFilesPathsDto.columnIdValue !== ''));
  }

  @Output()
  loadImages() {
    const selectFilesPathsDto = this.populateSelectFilesPathsDto();

    if (!this.selectFilesPathsDtoPopulated(selectFilesPathsDto)) {
      return;
    }

    this.filesService.selectFilesPaths(selectFilesPathsDto)
      .pipe(takeUntil(this.destroy))
      .subscribe((filesList: string[]) => {
        this.imageIndex = 0;
        this.images = [];
        this.currentsImages = [];

        this.loadedImages = (filesList.length > 0);

        if (filesList.length === 0) {
          this.images = ['assets/images/no-image.jpg'];
          this.currentsImages = ['assets/images/no-image.jpg'];
        }

        filesList.forEach((file: any) => {
          this.images[this.images.length] = file.image;
          this.currentsImages[this.currentsImages.length] = file.image;
        });
      });
  }

  @Output()
  uploadImagesList() {
    for (const [index, image] of this.images.entries()) {
      if ((image !== this.currentsImages[index]) &&
        (this.selectedImagesFilesList[index] !== null)) {
        const insertNewRecordDto = new InsertNewRecordDto();

        insertNewRecordDto.masterColumnName = this.masterColumnName;
        insertNewRecordDto.masterTableId = this.masterTableId;
        insertNewRecordDto.tableName = this.tableName;

        this.filesService.insertNewRecord(insertNewRecordDto)
          // .pipe(takeUntil(this.destroy))
          .subscribe(
            (response) => {
              this.uploadImageComponent.tableId = response.id;
              this.uploadImageComponent.tableName = this.tableName;
              this.uploadImageComponent.columnName = this.columnName;
              this.uploadImageComponent.image = image;
              this.uploadImageComponent.deleteRecordIfFail = 'true';
              this.uploadImageComponent.selectedImageFile = this.selectedImagesFilesList[index];

              this.uploadImageComponent.uploadImage();
            },
            (error) => {
              console.log(error);
            });
      }
    }

    if ((this.loadedImages) && (this.imagesToRemove.length > 0)) {
      let withFileNameEmpty = false;
      const deleteRecordDto = new DeleteRecordDto();

      deleteRecordDto.tableName = this.tableName;
      deleteRecordDto.columnName = 'image';

      for (const imageToRemove of this.imagesToRemove) {
        if (imageToRemove) {
          deleteRecordDto.fileName =
            imageToRemove.substring(imageToRemove.lastIndexOf('/') + 1);
          deleteRecordDto.columnValue = imageToRemove;

          this.filesService.removeFile(deleteRecordDto)
            // .pipe(takeUntil(this.destroy))
            .subscribe(reponse => console.log(reponse));
        } else {
          withFileNameEmpty = true;
        }
      }

      if (withFileNameEmpty) {
        const selectFilesPathsDto = this.populateSelectFilesPathsDto();

        if (this.selectFilesPathsDtoPopulated(selectFilesPathsDto)) {
          this.filesService.clearRecordsWithFileNameEmpty(selectFilesPathsDto)
            // .pipe(takeUntil(this.destroy))
            .subscribe(reponse => console.log(reponse));
        }
      }
    }
  }
}
