import { Routes, Router } from '@angular/router';
import { StateManagementService } from './../../shared/services/state-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any = {};
  constructor(private $stateManagementService: StateManagementService, private $router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.$stateManagementService.checkUserExist(this.formData).subscribe(res => {
      if (!res) {
        alert('User not exist!!!');
      } else {
        this.$stateManagementService.setAuthSession(this.formData);
        this.$router.navigate(['/dashboard']);
      }
    }, err => {
      alert('Somthings went worng!!!');
    });
  }
}
