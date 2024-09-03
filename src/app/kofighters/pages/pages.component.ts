import { Component } from '@angular/core';
import { Fighter } from '../interfaces/kof.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

  public boxFighters: Fighter[] = [
    {
      name: 'Rugal',
      punchPower: 200
    },
    {
      name: 'Mary',
      punchPower: 20
    },
    {
      name: 'Ralf',
      punchPower: 170
    }
  ]

}
