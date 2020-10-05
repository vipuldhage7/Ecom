import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserServiceService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required,Validators.minLength(10)]]
     }); 
  }

  get r()
  {
    return this.registrationForm.controls;
  }

  addUser()
  {
    this.submitted = true;
   // console.log("User object:: "+this.r);

    if(this.registrationForm.invalid)
    {
      return;
    }

    this.user = this.registrationForm.value;
    this.userService.AddNewUser(this.user)
    .subscribe(
      data=>{
        console.log('Sucess!',data);
        this.router.navigate(['/user/login']);
      },
      error=>{
              console.log('Error!',error.status);
              alert ("Invalid Username or Password");
          }
    ); 
  }

  

}
