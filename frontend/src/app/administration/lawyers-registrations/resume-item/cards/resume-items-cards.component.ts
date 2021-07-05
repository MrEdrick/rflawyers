import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeItemDto } from '../dto/resume-item.dto';
import { ResumeItemsService } from '../../services/resume-items.service';

@Component({
  selector: 'app-resume-items-cards',
  templateUrl: './resume-items-cards.component.html',
  styleUrls: ['./resume-items-cards.component.scss']
})
export class ResumeItemsCardsComponent implements OnInit {
  resumeItems: ResumeItemDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resumeItemsService: ResumeItemsService) { }

  ngOnInit() {
    this.resumeItemsService.getAll()
      .toPromise()
      .then(resumeItems => this.resumeItems = resumeItems);
  }

  onDelete(id: string) {
    this.resumeItemsService.delete(id)
      .toPromise()
      .then(resumeItem => console.log(resumeItem));
  }

  onDblClick(id: string) {
    this.router.navigate(['./resumeItem', id], { relativeTo: this.route });
  }
}
