import { Injectable } from '@angular/core';
import { Singer } from '../model/singer.model';
import { Band } from '../model/band.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BandWrapper } from '../model/BandWrapped';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
   };

@Injectable({
  providedIn: 'root'
})

 
export class SingerService {
  apiURL: string = 'http://localhost:8009/singers/api';

  apiURLBand: string = 'http://localhost:8009/singers/band';
  singers!: Singer[];
  bands! : Band[];
  constructor(private http : HttpClient) {


  }

  listeSingers(): Observable<Singer[]>{
    return this.http.get<Singer[]>(this.apiURL);
  }

  ajouterSinger(singer: Singer):Observable<Singer>{
    return this.http.post<Singer>(this.apiURL,singer, httpOptions);
    }

    supprimerSinger(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      

    singer! : Singer;

    consulterSinger(id: number): Observable<Singer> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Singer>(url);
      }

      updateSinger(singer :Singer) : Observable<Singer>
{
return this.http.put<Singer>(this.apiURL, singer, httpOptions);
}

listeBands():Observable<BandWrapper>{
  return this.http.get<BandWrapper>(this.apiURLBand);
  }
  

        consulterBand(id:number): Band{
          return this.bands.find(bandd => bandd.idBand == id)!;
          }
      

          rechercherParBand(idBand: number):Observable< Singer[]> {
            const url = `${this.apiURL}/singband/${idBand}`;
            return this.http.get<Singer[]>(url);
            }

            ajouterBand( band: Band):Observable<Band>{
              return this.http.post<Band>(this.apiURLBand, band, httpOptions);
              }
              

}
