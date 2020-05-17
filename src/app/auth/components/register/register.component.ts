import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    lastname: '',
    age: '',
    email: '',
  };

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('this.user', this.user);
  }
}
