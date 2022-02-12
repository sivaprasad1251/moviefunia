import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 public selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor() { }
}
