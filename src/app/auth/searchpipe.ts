import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name: "search"
})
export class searchpipe implements PipeTransform{

    transform(value: any, args?:any): any {
    
    

   
        if(!value) return null;
        if(!args) return value;
      
        args = args.toLowerCase();
      
        return value.filter((a:any)=>{
          return JSON.stringify(a).toLowerCase().includes(args);
        }) ;
    
      
      }

}