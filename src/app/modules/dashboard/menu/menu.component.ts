import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /* Comunicare intre componentele Dashboard si Menu */
  @Input() messageFromParent: any;
  @Output() messageFromChild = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.messageFromParent);
  }

  public notifyParent(section: string): void{
    this.messageFromChild.emit(section + ' is being hovered!');
  }

}
