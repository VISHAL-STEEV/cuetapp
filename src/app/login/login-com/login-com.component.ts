import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-com',
  templateUrl: './login-com.component.html',
  styleUrls: ['./login-com.component.css']
})
export class LoginComComponent implements OnInit {
  formValue !:FormGroup;
  visible:boolean = true;
  changetype:boolean = true;

constructor(private FormBuilder : FormBuilder,private http :HttpClient,private route :Router ){
  sessionStorage.clear();
}

ngOnInit(): void {
 this.formValue = this.FormBuilder.group ({
  mailmobile : [''],
  password:['']
 })
}

login(){
  this.http.get<any>(" http://localhost:3000/superheros").subscribe(res=>{
      const user =res.find((a:any)=>{
          
        console.log(a.MobileNumber)
        console.log(a.PasswordOne)
        

        return a.MobileNumber === this.formValue.value.mailmobile && a.passwordOne === this.formValue.value.password
        

      });

      if(user){
        alert("login sucess!!!");
        this.formValue.reset();
        this.route.navigate(['home'])
        sessionStorage.setItem('username',user.password)
      }else{
        alert("user not found");
      }
  },error=>{
    alert("sorry")
  })
}




viewpass(){
  this.visible = !this.visible;
  this.changetype=!this.changetype
}

}



