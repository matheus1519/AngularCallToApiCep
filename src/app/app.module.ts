import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeeAddressComponent } from './components/see-address/see-address.component';
import { SeeAddressService } from './components/see-address/see-address.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeeAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SeeAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
