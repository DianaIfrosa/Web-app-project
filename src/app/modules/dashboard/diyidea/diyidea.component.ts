import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DIYIdea } from 'src/app/interfaces/diyidea';
import { DiyideasService } from 'src/app/services/diyideas.service';

@Component({
  selector: 'app-diyidea',
  templateUrl: './diyidea.component.html',
  styleUrls: ['./diyidea.component.scss']
})
export class DIYideaComponent implements OnInit {

  public subscription!: Subscription;
  public id!: number;
  public idea!: DIYIdea;
  
  constructor(private route: ActivatedRoute, private ideasService: DiyideasService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id)
        this.getIdea();
    });
  }

  public getIdea(){
    this.ideasService.getIdeaByID(this.id).subscribe(
      (result) => {
        console.log(result);
        this.idea = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
