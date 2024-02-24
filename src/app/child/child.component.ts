import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Input() mydata:string="";
@Output() childEvent=new EventEmitter();

onclick()
{
  this.childEvent.emit("hello hi all")
}



  ngOnInit(): void {

  }

 

}
