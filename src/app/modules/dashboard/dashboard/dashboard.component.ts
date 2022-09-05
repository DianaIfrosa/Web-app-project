import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { DIYIdea } from 'src/app/interfaces/diyidea';
import { DiyideasService } from 'src/app/services/diyideas.service';
import { DIYideaComponent } from '../diyidea/diyidea.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DashboardComponent implements OnInit {

  dataSource: DIYIdea[] = [];
  videos: string[] = [];
  copyDataSource: DIYIdea[] = [];
  columnsToDisplay = ['name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: DIYideaComponent | undefined;
  public parentMessage = 'Page is loaded!';

  public filterForm: FormGroup = new FormGroup({
    text: new FormControl(''),
  });

  // getters
  get text(): AbstractControl {
    return this.filterForm.get('text')!;
  }

  constructor(
    private router: Router,
    private DIYIdeasService: DiyideasService
  ) { this.copyDataSource = this.dataSource; }

  ngOnInit(): void {
    this.DIYIdeasService.getIdeas().subscribe(
      (result) => {
        console.log(result); this.dataSource = result;
        this.dataSource.forEach((element) => { this.videos?.push(element.presentationVideo.link) })
        console.log(this.videos);
      },
      (error) => { console.log(error); }
    );

    this.copyDataSource = this.dataSource;
  }

  applyFilter(event: Event) {
   
    var filterValue = this.filterForm.get('text')!.value;

    if (filterValue != " ")
      this.copyDataSource = this.dataSource.filter((obj) => {
        return obj.name.trim().toLowerCase().includes(filterValue)
          || obj.description.trim().toLowerCase().includes(filterValue);
      });
    else
      this.copyDataSource = this.dataSource;
  }

  public goToIdea(id: number): void {
    /* Ruta cu parametru */
    this.router.navigate(['/diyidea', id]);
  }

  public receiveMessage(event: any): void {
    console.log(event);
  }
}