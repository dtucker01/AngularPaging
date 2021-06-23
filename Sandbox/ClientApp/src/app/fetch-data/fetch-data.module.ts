import { NgModule } from "@angular/core";
import { FetchDataRoutingModule } from "./fetch-data-routing.module";
import { SharedModule } from "../Shared/shared.module";



@NgModule({
  declarations: [FetchDataRoutingModule.components],
  imports: [FetchDataRoutingModule, SharedModule]
})

export class FetchDataModule { }
