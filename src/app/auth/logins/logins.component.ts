import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private Auth: AuthService,private route: Router) { }

  ngOnInit(): void {
  }



  async onLogin() {

    const data = {
      username: this.username,
      password: this.password
    }
console.log('data login',data);


    this.Auth.login(data).subscribe
      (res => {
        if (res.status == 1) {
          console.log('login data comming',res);
          this.route.navigate(['/main'])

        } else {
          if (res.status == 0) {
             alert('loin error'+ res  )
            this.route.navigate(['/auth/Logins'])
          }
        }
      }, error => {
        console.log('login errror', error);
      })

  }

  keyupGetusername(e: KeyboardEvent) {
    this.username = (e.target as HTMLInputElement).value
    console.log( this.username);
  }
  keyupGetpassword(e: KeyboardEvent) {
    this.password = (e.target as HTMLInputElement).value
    console.log( this.password);
  }
}




