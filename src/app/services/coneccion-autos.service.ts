import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { ModeloAuto } from '../models/modelo-auto';

@Injectable({
  providedIn: 'root'
})
export class ConeccionAutosService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://pavii.ddns.net/api/autos';
   }

  get(){
    return this.httpClient.get(this.url);
  }

  put(objeto: ModeloAuto){
    return this.httpClient.put(this.url + '/' + objeto.IdAuto, objeto );
  }

}