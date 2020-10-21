import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { CovidComponent } from './covid/covid.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    CovidComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
