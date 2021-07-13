import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-axiscomp',
  templateUrl: './axiscomp.component.html',
  styleUrls: ['./axiscomp.component.css']
})
export class AxiscompComponent {
  
  toggle: boolean = true;
  toggle1: boolean = false;
  toggle2: boolean = false;


  function1():void{
     
    this.toggle =true;
    this.toggle1=false;
    this.toggle2=false;
  }
  
 

  function2():void{
    this.toggle =false;
    this.toggle1=true;
    this.toggle2=false;
  }
  
  function3():void{

    this.toggle =false;
    this.toggle1=false;
    this.toggle2=true;
  }






}
