import { Component, Input, OnInit } from '@angular/core';
import { ResumeItemDto } from 'src/app/dto/resume-item.dto';
import { ResumeDto } from 'src/app/dto/resume.dto';
import { ResumeItemsService } from 'src/app/services/resume-items.service';

@Component({
  selector: 'app-resume-item-list',
  templateUrl: './resume-item-list.component.html',
  styleUrls: ['./resume-item-list.component.scss']
})
export class ResumeItemListComponent implements OnInit {
  @Input()
  resume: ResumeDto | undefined;

  resumeItems: ResumeItemDto[] = [];

  constructor(
    private resumeItemsService: ResumeItemsService
  ) { }

  ngOnInit(): void {
    this.resumeItemsService.getWithFilter([{key: 'resumeId', value: this.resume?.id}])
      .toPromise().then(resumeItems => this.resumeItems = resumeItems)
  }

}
