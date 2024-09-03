import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFightersComponent } from './components/add-fighters/add-fighters.component';
import { ListFightersComponent } from './components/list-fighters/list-fighters.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AddFightersComponent,
    ListFightersComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagesComponent
  ]

})
export class KofightersModule { }
