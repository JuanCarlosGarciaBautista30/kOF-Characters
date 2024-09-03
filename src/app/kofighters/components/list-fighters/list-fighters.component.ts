import { Component, Input } from '@angular/core';
import { Fighter } from '../../interfaces/kof.interface';

@Component({
  selector: 'list-fighters',
  templateUrl: './list-fighters.component.html',
  styleUrl: './list-fighters.component.css'
})

export class ListFightersComponent {

  @Input()
  public onlyFight:Fighter[] = [

    {
      name: '',
      punchPower: 0
    }
  ]

}
