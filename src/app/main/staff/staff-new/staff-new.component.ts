import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-new',
  templateUrl: './staff-new.component.html',
  styleUrls: ['./staff-new.component.css']
})
export class StaffNewComponent implements OnInit {
  url="https://www.kaohoon.com/wp-content/uploads/2020/07/20170323BA.jpg";
  constructor() { }

  ngOnInit(): void {
  }
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
