import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {UserService } from '../../shared/user.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
public user:any
  constructor(private userService: UserService,private http:HttpClient) { }
  submitForm(event: any){
      console.log(this.user)
      this.http.post<any>('http://localhost:3000/users/register-user',  this.user).subscribe(data => {
       console.log(data)
    })
}

  

  ngOnInit(): void {
    this.user= this.userService.selectedUser
  }

}
