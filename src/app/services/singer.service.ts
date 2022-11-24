import { Injectable } from '@angular/core';
import { Singer } from '../model/singer.model';
import { Band } from '../model/band.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BandWrapper } from '../model/BandWrapped';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class SingerService {
  apiURL: string = 'http://localhost:8009/singers/api';

  apiURLBand: string = 'http://localhost:8009/singers/band';
  singers!: Singer[];
  bands!: Band[];
  constructor(private http: HttpClient, private authService: AuthService) {


  }

  listeSingers(): Observable<Singer[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Singer[]>(this.apiURL, { headers: httpHeaders });
  }


  ajouterSinger(singer: Singer): Observable<Singer> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Singer>(this.apiURL, singer, { headers: httpHeaders });
  }

  supprimerSinger(id: number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });
  }


  singer!: Singer;

  consulterSinger(id: number): Observable<Singer> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Singer>(url, { headers: httpHeaders });
  }

  updateSinger(singer: Singer): Observable<Singer> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<Singer>(this.apiURL, singer, { headers: httpHeaders });
  }

  listeBands(): Observable<BandWrapper> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<BandWrapper>(this.apiURLBand, { headers: httpHeaders });
  }


  consulterBand(id: number): Band {
    return this.bands.find(bandd => bandd.idBand == id)!;
  }


  rechercherParBand(idBand: number): Observable<Singer[]> {
    const url = `${this.apiURL}/singband/${idBand}`;
    return this.http.get<Singer[]>(url);
  }

  ajouterBand(band: Band): Observable<Band> {
    return this.http.post<Band>(this.apiURLBand, band, httpOptions);
  }

  rechercherParNom(nom: string):Observable< Singer[]> {
    const url = `${this.apiURL}/singsByName/${nom}`;
    return this.http.get<Singer[]>(url);
    }


}
