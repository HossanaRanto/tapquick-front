import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapingComponent } from './taping/taping.component';
import { ScoreComponent } from './score/score.component';



@NgModule({
  declarations: [
    TapingComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompetitorModule { }
