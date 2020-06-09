import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  private url = 'https://crud-angular-5900a.firebaseio.com';

  constructor(private http: HttpClient) { 

  }

  agregarHeroe(heroe: HeroeModel){
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map( ( resp: any ) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }
}
