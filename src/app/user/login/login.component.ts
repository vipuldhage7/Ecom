import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
     }); 
  }

  get r()
  {
    return this.loginForm.controls;
  }

  userLogin()
  {
    this.submitted = true;

    if(this.loginForm.invalid)
    {
      return;
    }

     this.user = this.loginForm.value;
    this.loginService.userLogin(this.user)
    .subscribe(
      data=>{
              console.log('Sucess!',data);
              this.user = data;
              
              // console.log(""+this.user.id);
              // console.log(""+data.userId);
              localStorage.setItem('userId', this.user.id.toString());

              this.router.navigate(['/products/getAllProducts']);
             // this.router.navigate(['/user/login']);
            },
              error=>{
                console.log('Error!',error.status);
                window.alert('Incorrect Username or Password')
              }
              
    ); 


  }
}
