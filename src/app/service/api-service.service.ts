import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {



  cartitem:any=[];


  constructor(private http: HttpClient) { }






  flipcartData(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res
    }))
  }


  postemp(data : any){

    return this.http.post<any>("http://localhost:3000/superheros", data)
    .pipe(map((res:any)=>{ return res  }))
   }


   Islogged(){
    return sessionStorage.getItem('username')!=null;
  }


  homedata(){
   return this.http.get<any>('  http://localhost:3000/Courses').pipe(map((res:any)=>{
      return res;
   }))
  }

  homedataone(){
    return this.http.get<any>(' http://localhost:3000/offer').pipe(map((res)=>{ return res }))
  }


  homedataTwo(){
    return this.http.get(' http://localhost:3000/subject').pipe(map((res)=>{return res}))
  }



  tapdata(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos').pipe(map((data)=>{
        return data
    }))
  }



  addtocart(obj:any){
    this.cartitem.push(obj)
  }

}



