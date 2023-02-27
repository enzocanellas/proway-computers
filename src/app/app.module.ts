import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RooterComponent } from './rooter/rooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RooterComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
