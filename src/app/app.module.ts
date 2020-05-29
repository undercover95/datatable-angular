import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatatableHeadComponent } from './components/datatable/datatable-head/datatable-head.component';
import { DatatableFootComponent } from './components/datatable/datatable-foot/datatable-foot.component';
import { DatatableBodyComponent } from './components/datatable/datatable-body/datatable-body.component';
import { SearchbarComponent } from './components/datatable/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    DatatableHeadComponent,
    DatatableFootComponent,
    DatatableBodyComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
