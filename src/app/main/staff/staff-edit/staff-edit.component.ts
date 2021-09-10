import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

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
