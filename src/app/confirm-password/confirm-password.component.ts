import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userConfrimDto } from '../models/confirmPassword.dto'
import { ConfrimUserService } from '../services/confrim-user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  validateForm: FormGroup;
  isLoadingOne = false;

  submitForm(value: any): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      const {email, password} = value;
       
      this.confirmUser({email: email, password: password});
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  loginPage(){
    this.router.navigateByUrl('/login');
  }

  async confirmUser(userInfo: userConfrimDto) {
    console.log(userInfo)
    const result = this.confirmUserService.confirmUser(userInfo).toPromise();
    result.then(() => {
      this.createMessage('success');
      this.router.navigateByUrl('/login');
    }).catch(() => {

    })
    
  }

  createMessage(type: string): void {
    this.message.create(type, `Password Confirmed successfully`);
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }
  constructor(private fb: FormBuilder, private readonly router: Router, private readonly confirmUserService: ConfrimUserService, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }



}
