import { Component, Input } from '@angular/core';
import { Fighter } from '../../interfaces/kof.interface';

@Component({
  selector: 'add-fighters',
  templateUrl: './add-fighters.component.html',
  styleUrl: './add-fighters.component.css'
})
export class AddFightersComponent {

  @Input()
  public fightersList: Fighter[] = [
    {
      name:"",
      punchPower:0
    }
  ]

  addFighters(fighter: Fighter): void {

    this.fightersList.push(fighter)

  }
}
