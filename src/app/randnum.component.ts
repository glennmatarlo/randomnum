import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'randnum',
  templateUrl: './randnum.component.html',
  styleUrls: ['./app.component.css']
})

export class RandNum {

  result:any="Choose";

  rn1 = Math.floor(Math.random()*46)+1;
  rn2 = Math.floor(Math.random()*46)+1;
  rn3 = Math.floor(Math.random()*46)+1;
  rn4 = Math.floor(Math.random()*46)+1;
  rn5 = Math.floor(Math.random()*46)+1;
  rn6 = Math.floor(Math.random()*46)+1;

        crn1(){
            this.result = this.rn1;
        }
        crn2(){
            this.result = this.rn2;
        }
        crn3(){
            this.result = this.rn3;
        }
        crn4(){
            this.result = this.rn4;
        }
        crn5(){
            this.result = this.rn5;
        }
        crn6(){
            this.result = this.rn6;
        }
}