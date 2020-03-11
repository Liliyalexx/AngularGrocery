import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap:[AppGroceryComponent]
})
export class AppModule { }
