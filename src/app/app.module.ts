import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';

const COMPONENTS = [AppComponent, DashboardComponent];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...COMPONENTS],
  bootstrap: [AppComponent],
})
export class AppModule {}
