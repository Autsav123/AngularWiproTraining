import { Component } from '@angular/core';
import { Dataservice } from '../service/dataservice';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class User {
   
  users:any[]=[];
  firstName: string = '';
  age: number = 0;
  user: any={};
  
  userId: number = 0;
  constructor(private dataservice:Dataservice){
  }
  ngOnInit():void{
    this.dataservice.getPosts().subscribe({
next:(data)=>console.log('Data Received',data),
error:(err)=>console.error('Final Error after Retries:',err),
    });
}

getusers(){
  this.dataservice.getUsers().subscribe({
    next:(users)=>this.users=users as any[],
    complete:()=>console.log('Users Fetched Succesfully' ),
    error:(err)=>console.error('Error Fecthing users:',err)
  });
}
addUser() {
    this.user = {
      id:Math.random().toString(36).substring(2, 15),
      firstName: this.firstName,
      age: this.age
    };
    console.log('Adding user:', this.user);
    this.dataservice.addUser(this.user).subscribe({
      next: (user) => {
        console.log('User added successfully:', user);
        this.users.push(user);
        this.firstName = '';
        this.age = 0;
      }
      ,
     
      error: (err) => console.error('Error adding user:', err)
    });
  }
    updateUser(user: any) {
    console.log('Updating user:', user);
    this.dataservice.updateUser(user).subscribe({
      next: (updatedUser) => {
        console.log('User updated successfully:', updatedUser);
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      },
      error: (err) => console.error('Error updating user:', err)
    });
  }
  editUser(user: any) {
    this.userId = user.id;
    this.firstName = user.firstName;
    this.age = user.age;
    this.user = {id: this.userId, firstName: this.firstName, age: this.age};
    console.log('Editing user:', this.user);
  }
  deleteUser(id: number) {
    this.dataservice.deleteUser(id).subscribe({
      next: () => {
        console.log('User deleted successfully');
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (err) => console.error('Error deleting user:', err)
    });
}

}
