import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { 

  }
  url="https://www.kaohoon.com/wp-content/uploads/2020/07/20170323BA.jpg";

//   testclick(){
//   const e :HTMLElement=this.InputFile.nativeElement;
//   e.click;
//   console.log('tetstts');
  
// }

  selectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e:any) => { 
         this.url =e.target.result
      }
    }
  }

  
}
  