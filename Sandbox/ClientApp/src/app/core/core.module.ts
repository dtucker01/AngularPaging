import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { DataService } from "./services/data.service";



@NgModule({

  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [RouterModule, HttpClientModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [DataService]
})


export class CoreModule { }
