import { Injectable } from "@angular/core";
import { Member, PaginatedResult } from "../../Shared/interfaces";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class DataService {

  members: Member[];
  constructor(private httpClient: HttpClient) { }

  getMembers(searchQuery?: string, pageNumber?, pageSize?): Observable<PaginatedResult<Member[]>> {

    const paginatedResults: PaginatedResult<Member[]> = new PaginatedResult<Member[]>();

    let params = new HttpParams();

    if (searchQuery != null && searchQuery.trim() != '') {
      params = params.append('searchQuery', searchQuery);
    }

    if (pageNumber != null && pageSize != null) {
      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
    }

    return this.httpClient.get<Member[]>(
      "http://localhost:55406/api/v1/sandbox",
      { responseType: "json", observe: 'response', params })
      .pipe(
        map(res => {
        paginatedResults.resut = res.body;
        if (res.headers.get('X-Pagination') != null) {
          paginatedResults.pagination = JSON.parse(res.headers.get('X-Pagination'))
        }
        return paginatedResults;
      }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error: ', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
  }
}
