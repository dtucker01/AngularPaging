import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, PaginatedResult } from '../Shared/interfaces';
import { DataService } from '../core/services/data.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {

  members: Member[] = [];

  searchText: string = "";
  config: any;


  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 5
    }

  }

  constructor(private httpClient: HttpClient, private dataService: DataService) {
    this.getMembers();

   // this.loadMembers();
  }



  pageChanged(event) {
    this.getMembers(event);
  }


  getMembers(pageNumber: number = 1) {
    this.dataService.getMembers(this.searchText.trim(), pageNumber, 5)
      .subscribe((response: PaginatedResult<Member[]>) => {
        this.members = response.resut;
        this.config = {
          itemsPerPage: 5,
          currentPage: response.pagination.currentPage,
          totalItems: response.pagination.totalItems
        };
      },
        (error) => {
          return of(null);
        }
      );
  }


  onSearchClick() {


    this.dataService.getMembers(this.searchText.trim(), 1, 5)
      .subscribe((response: PaginatedResult<Member[]>) => {
        this.members = response.resut;
        this.config = {
          itemsPerPage: 5,
          currentPage: response.pagination.currentPage,
          totalItems: response.pagination.totalItems
        };
      },
        (error) => {
          return of(null);
        }
      );
  }



}


