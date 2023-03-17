import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response';
import { StorageService } from './storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers: HttpHeaders = new HttpHeaders();
  private token: string | undefined;
  private api: string = environment.api;

  constructor(
    private _http: HttpClient,
    private _storage: StorageService,
    private _snackbar: MatSnackBar,
    private _router: Router
  ) {
    this._getHeaders();
  }

  async get(
    uri: string,
    params: any = {},
    showSuccess: boolean = false
  ): Promise<ApiResponse | null> {
    console.log('GET: ' + uri);

    this._getHeaders();
    const httpParams: HttpParams = this._getParams(params);
    const res = await this._http
      .get<ApiResponse>(this.api + uri, {
        headers: this.headers,
        observe: 'body',
        params: httpParams,
        reportProgress: true,
        responseType: 'json',
      })
      .toPromise()
      .finally(() => {});
    const _res = res;
    if (_res == undefined) return null;
    if (!this._isSuccessful(_res, showSuccess)) return null;

    return res!;
  }

  async post(
    uri: string,
    body: any,
    showSuccess: boolean = false
  ): Promise<ApiResponse | null> {
    console.log('POST: ' + uri);

    this._getHeaders();
    const res = await this._http
      .post<ApiResponse>(this.api + uri, body, {
        headers: this.headers,
        observe: 'body',
        reportProgress: true,
        responseType: 'json',
      })
      .toPromise()
      .finally(() => {});
    const _res = res;
    if (_res == undefined) return null;
    if (!this._isSuccessful(_res, showSuccess)) return null;

    return res!;
  }

  private _isSuccessful(
    response: ApiResponse,
    showSuccess: boolean = false
  ): boolean {
    if (response.code == 401 || response.code == 403) {
      this._snackbar.open('Unauthorized!', 'OK');
      this._storage.clear();
      this._router.navigateByUrl('/');
      return false;
    } else if (response.code == 412) {
      const data = response.data;
      Object.entries(data).forEach(([key, value]) => {
        const arr = value as Array<string>;
        this._snackbar.open(arr[0], 'OK');
      });
      return false;
    } else if (response.code == 400) {
      this._snackbar.open(response.msg, 'OK');
      console.warn(response.msg);
      return false;
    } else if (response.code == 500) {
      this._snackbar.open(response.msg, 'OK');
      console.warn(response.data);
      return false;
    }
    if (showSuccess) {
      this._snackbar.open(response.msg, 'OK');
    }
    return true;
  }

  private _getHeaders() {
    this.token = this._storage.get('token', '');

    this.headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + this.token);
  }

  private _getParams(params: any = {}): HttpParams {
    let param: HttpParams = new HttpParams();

    Object.keys(params).forEach(function (key) {
      if (params[key] != undefined && params[key] != null) {
        param = param.set(key, params[key]);
      }
    });

    return param;
  }
}
