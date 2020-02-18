import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { userDto } from 'src/app/models/user.dto';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AlertService } from '../alert/alert.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  validateForm: FormGroup;
  returnUrl: any;
  isLoadingOne = false;

  submitForm(value: any): void {
    console.log(value);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      this.login(value);
    }
    
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private authenticationService: AuthService,
    private alertService: AlertService) {
    if(this.authenticationService.currentUserValue){
      this.router.navigateByUrl('/dashboard');
    }
   }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard'
  }

  login(user: userDto) {
    console.log(user)
    this.authenticationService.login(user.email, user.password).subscribe((data) => {
       // this.router.navigate([this.returnUrl]);
       this.router.navigateByUrl('/dashboard');
    },error => {
      this.alertService.error(error);
    }
    )
  }

  confirmPassword() {
    this.router.navigateByUrl('/confirmPassword');
  }

}
