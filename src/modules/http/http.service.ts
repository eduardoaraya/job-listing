import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Options = {
  headers?: HttpHeaders | { [key: string]: string } | undefined;
};

@Injectable()
export abstract class HttpService {
  readonly BASE_URL = 'http://localhost:3000/';
  public PATH = '';

  constructor(private httpService: HttpClient) {}

  protected get<T>(url?: string, options?: Options): Observable<T> {
    return this.httpService.get<T>(this.getPath(url), options);
  }

  protected post<T>(url?: string, options?: Options): Observable<T> {
    return this.httpService.get<T>(this.getPath(url), options);
  }

  protected delete<T>(url?: string, options?: Options): Observable<T> {
    return this.httpService.get<T>(this.getPath(url), options);
  }

  protected put<T>(url?: string, options?: Options): Observable<T> {
    return this.httpService.get<T>(this.getPath(url), options);
  }

  protected getPath(url: string = ''): string {
    return this.BASE_URL + this.PATH + url;
  }
}
