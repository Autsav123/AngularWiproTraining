import { Injectable } from '@angular/core';
import{ HttpClient } from'@angular/common/http';
import { retry,Observable,catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  private apiUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient){}
  getPosts():Observable<any>{
    return this.http.get(this.apiUrl).pipe(// in http using pipe method provide to the access to the further level 
      retry(3),  // Retry 3 times if it gets failled aur get any other issues
    catchError((error) =>{
      console.error('Error after 3 retries:',error);
      throw error;
    })
    )
  }
    getUser(id:number){
      return this.http.get('http://localhost:3000/users/'+id);
    }
getUsers(){
    return this.http.get('http://localhost:3000/users/');
}
addUser(user:any){
   return this.http.post('http://localhost:3000/users/',user);
}
updateUser(user:any){
 return this.http.put('http://localhost:3000/users/',+user.id,user);

}
deleteUser(id: number) {
    return this.http.delete('http://localhost:3000/users/'+id);
  }
    patchUser(id: number, user: any) {
    return this.http.patch('http://localhost:3000/users/'+id, user);
}
}
  

