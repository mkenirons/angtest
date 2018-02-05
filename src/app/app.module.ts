import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewComponentbComponent } from './my-new-componentb/my-new-componentb.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewComponentbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyNewComponentComponent, MyNewComponentbComponent]
})
export class AppModule { }
