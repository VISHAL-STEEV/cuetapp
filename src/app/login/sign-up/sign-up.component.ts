
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'
import { singUpdetails } from './Datadetails';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


 Dataobj:singUpdetails =new singUpdetails()
  formValue !: FormGroup;

constructor(private FormBuilder : FormBuilder , private service : ApiServiceService){}
ngOnInit(): void {

  this.formValue = this.FormBuilder.group({
      
    name :['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")])],
    MobileNumber :['',Validators.compose([Validators.required,Validators.minLength(10)])],
    Emailaddress :['',Validators.compose([Validators.required,Validators.email])],
    PasswordTwo :['',Validators.required],
    PasswordOne :['',Validators.required]

  })
  
}

get name(){
  return this.formValue.get('name')
}





logindata(){


  this.Dataobj.name=this.formValue.value.name;
  this.Dataobj.MobileNumber=this.formValue.value.MobileNumber;
  this.Dataobj.Emailaddress=this.formValue.value.Emailaddress;
  this.Dataobj.PasswordTwo=this.formValue.value.PasswordTwo;
  this.Dataobj.PasswordOne=this.formValue.value.PasswordOne;

  this.service.postemp(this.Dataobj)
  .subscribe(res=>{
    
    alert("Data  added successfull")
   
    console.log(res)
    
    
  },err=>{
    alert("somthing went wrong")
  })





}

}
