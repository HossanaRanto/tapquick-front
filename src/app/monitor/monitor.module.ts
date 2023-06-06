import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CompetitorScreenComponent } from './competitor-screen/competitor-screen.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    MainComponent,
    CompetitorScreenComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MonitorModule { }
