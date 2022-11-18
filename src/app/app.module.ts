import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingersComponent } from './singers/singers.component';
import { AddSingerComponent } from './add-singer/add-singer.component';
import { FormsModule } from '@angular/forms';
import { UpdateSingerComponent } from './update-singer/update-singer.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParBandComponent } from './recherche-par-band/recherche-par-band.component';
import { ListeBandsComponent } from './liste-bands/liste-bands.component';
import { UpdateBandComponent } from './update-band/update-band.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';




@NgModule({
  declarations: [
    AppComponent,
    SingersComponent,
    AddSingerComponent,
    UpdateSingerComponent,
    RechercheParBandComponent,
    ListeBandsComponent,
    UpdateBandComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
