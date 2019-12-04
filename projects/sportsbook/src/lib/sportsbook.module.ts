import { NgModule } from '@angular/core';
import { SportsbookComponent } from './sportsbook.component';
import { BettingComponentComponent } from './betting-component/betting-component.component';



@NgModule({
  declarations: [SportsbookComponent, BettingComponentComponent],
  imports: [
  ],
  exports: [SportsbookComponent, BettingComponentComponent]
})
export class SportsbookModule { }
