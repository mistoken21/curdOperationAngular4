import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate } from '@angular/animations';
//import { animation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations: [
    trigger("myAnimation",[
      state('small',style({
        transform : 'scale(1)',
      })),
      state("large",style({
        transform : 'scale(1.2)',
      })),
      transition('small <=> large',animate("300ms ease-in")),
    ]),

    
  ]
})
export class MyNewComponentComponent implements OnInit {
  
  constructor(private dataService : DataService) { 
    
  }

  ngOnInit() {

  }
  myArr = ["him","her","yours"];
  dataVar = "old";
  isButtonDisabled = "No";
  clickEvent(){
    alert("button is clicked");
  }
  data = this.dataService.arr;
  getAlert(){
    this.dataService.getData();
  }

  state1 = "small";
  changeEffect(){
    this.state1 == "small"? "large" : "small";
  }
}
