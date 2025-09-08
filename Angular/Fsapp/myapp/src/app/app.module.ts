import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FileOpsComponent } from './file-ops/file-ops.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { User } from './user/user.component';
import { Menu } from './Component/menu/menu';
import { Body } from './Component/body/body';
import { Hobbies } from './Component/hobbies/hobbies';
import { Favourite } from './Component/favourite/favourite';
import { Highlight } from './Directies/highlight';
import { Stylesample } from './Component/stylesample/stylesample';
import { Style2 } from './Component/style2/style2';
import { MypipePipe } from './Pipe/mypipe-pipe';
import { ReversepipePipe } from './Pipe/reversepipe-pipe';
import { LifeCycle } from './Component/life-cycle/life-cycle';
import { ReactiveForm } from './Component/reactive-form/reactive-form';
//import {Reactiveform} from './Component/reactiveform/reactiveform';
@NgModule({
  declarations: [
    AppComponent,
    FileOpsComponent,
    LoginComponent,
    User,
    Menu,
    Body,
    Hobbies,
    Favourite,
    Highlight,
    Stylesample,
    Style2,
    MypipePipe,
    ReversepipePipe,
    LifeCycle,
    ReactiveForm,
  
    
 ],
  imports: [
    BrowserModule,
    FormsModule,
        ReactiveFormsModule,
    
      CommonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }