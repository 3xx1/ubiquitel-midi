import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Component
import { AppComponent } from './app.component';

// Components
import { UbiCard } from './components/ubi-card/ubi-card.component';

@NgModule({
  declarations: [
    // App containers
    AppComponent,

    // Components
    UbiCard
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
