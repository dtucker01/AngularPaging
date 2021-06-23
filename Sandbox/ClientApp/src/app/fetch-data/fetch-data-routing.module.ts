import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data.component';

const routes: Routes = [
  {path : '', component: FetchDataComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)]
})

export class FetchDataRoutingModule {
  static components = [FetchDataComponent];
}
